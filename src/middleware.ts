import { NextRequest, NextResponse } from "next/server";
import { HOMEPAGE_MARKDOWN } from "@/lib/homepage-markdown";

const LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</how-to-install>; rel="service-doc"; type="text/html"',
  '</>; rel="describedby"; type="text/markdown"',
].join(", ");

function prefersMarkdown(accept: string): boolean {
  if (!accept) return false;
  const entries = accept.split(",").map((part) => {
    const [typeRaw, ...params] = part.trim().split(";");
    const type = typeRaw.trim().toLowerCase();
    const qParam = params.find((p) => p.trim().toLowerCase().startsWith("q="));
    const q = qParam ? parseFloat(qParam.split("=")[1]) : 1;
    return { type, q: Number.isFinite(q) ? q : 1 };
  });

  const markdown = entries.find((e) => e.type === "text/markdown");
  if (!markdown || markdown.q <= 0) return false;

  const competing = entries
    .filter((e) => e.type !== "text/markdown" && e.type !== "*/*")
    .reduce((max, e) => Math.max(max, e.q), 0);

  return markdown.q >= competing;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept") || "";

  if (prefersMarkdown(accept)) {
    const tokens = Math.ceil(HOMEPAGE_MARKDOWN.length / 4);
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(tokens),
        Link: LINK_HEADER,
        Vary: "Accept",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Link", LINK_HEADER);
  response.headers.append("Vary", "Accept");
  return response;
}

export const config = {
  matcher: "/",
};
