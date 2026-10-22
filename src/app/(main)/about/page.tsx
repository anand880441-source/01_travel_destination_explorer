export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
        About
      </p>

      <h1 className="mt-3 text-4xl font-bold text-emerald-950 md:text-5xl">
        Explore more. Travel better.
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-8 text-stone-600">
        <p>
          TravelExplorer is a destination discovery
          application built with Next.js App Router.
        </p>

        <p>
          The project demonstrates modern frontend
          concepts including dynamic routes, reusable
          components, responsive layouts and local
          structured data.
        </p>

        <p>
          The goal is to make it easy for travelers to
          discover destinations and explore useful
          information before planning a trip.
        </p>
      </div>
    </section>
  );
}
