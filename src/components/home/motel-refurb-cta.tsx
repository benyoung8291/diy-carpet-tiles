import Link from "next/link";

export function MotelRefurbCta() {
  return (
    <section className="bg-white">
      <div className="container-main py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-accent-light rounded-lg p-8 md:p-10 border-2 border-accent/20">
          <p className="overline mb-3">Owner-Operated Motels</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-4 text-balance">
            Refurbish motel rooms without closing the property
          </h2>
          <p className="text-body-md text-brand-700 leading-relaxed mb-6">
            Owner-operators can refresh guest rooms one at a time during
            low-occupancy windows — the rest of the motel keeps selling.
            Premrest supplies and installs the floor in Melbourne, Sydney, and
            Brisbane so you do not have to take the property offline.
          </p>
          <Link
            href="/refurbish-motel-without-closing-rooms"
            className="inline-flex items-center font-semibold text-accent underline underline-offset-4 hover:no-underline"
          >
            Room-by-room motel refurbishment without closing rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
