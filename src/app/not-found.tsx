import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="text-[120px] font-serif text-brand-200 leading-none mb-4">
          404
        </p>
        <h1 className="font-serif text-heading-lg text-brand-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-body-md text-brand-500 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
          moved or no longer exists.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
