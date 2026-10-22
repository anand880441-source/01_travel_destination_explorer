"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-emerald-950">
          Something went wrong
        </h1>

        <p className="mt-4 text-stone-600">
          We couldn&apos;t load this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}