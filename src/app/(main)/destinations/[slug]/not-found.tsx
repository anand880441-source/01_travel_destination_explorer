import Link from "next/link";

export default function DestinationNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">

      <p className="text-6xl font-bold text-stone-300">
        404
      </p>

      <h1 className="mt-4 text-3xl font-bold text-emerald-950">
        Destination not found
      </h1>

      <p className="mt-4 text-stone-600">
        We couldn&apos;t find the destination you&apos;re looking for.
      </p>

      <Link
        href="/destinations"
        className="mt-8 inline-block rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
      >
        Explore Destinations
      </Link>

    </div>
  );
}