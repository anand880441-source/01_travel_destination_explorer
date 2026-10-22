import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <p className="text-7xl font-bold text-stone-300">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-emerald-950">
          Page Not Found
        </h1>

        <p className="mt-3 text-stone-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/destinations"
          className="mt-6 inline-block rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
        >
          Explore Destinations
        </Link>

      </div>

    </div>
  );
}