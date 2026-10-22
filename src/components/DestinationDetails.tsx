import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types/destination";

interface DestinationDetailsProps {
  destination: Destination;
  relatedDestinations: Destination[];
}

export default function DestinationDetails({
  destination,
  relatedDestinations,
}: DestinationDetailsProps) {
  return (
    <article>

      {/* Hero */}

      <section className="relative h-96 md:h-[28rem]">

        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">

          <div className="mx-auto w-full max-w-7xl px-6 pb-12 text-white">

            <p className="text-sm font-medium text-white/85">
              {destination.country} · {destination.region}
            </p>

            <h1 className="mt-2 text-4xl font-bold md:text-5xl">
              {destination.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">

              <span>
                ⭐ {destination.rating}
              </span>

              <span>
                {destination.budget}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Main */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-emerald-950">
              About {destination.name}
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              {destination.description}
            </p>


            {/* Popular For */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold text-emerald-950">
                Popular For
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">

                {destination.popularFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-900"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* Attractions */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold text-emerald-950">
                Top Attractions
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {destination.attractions.map(
                  (attraction, index) => (

                    <div
                      key={attraction}
                      className="rounded-lg border border-stone-200 bg-white p-4"
                    >

                      <span className="mr-3 font-semibold text-emerald-700">
                        0{index + 1}
                      </span>

                      {attraction}

                    </div>

                  )
                )}

              </div>

            </div>


            {/* Activities */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold text-emerald-950">
                Things To Do
              </h2>

              <ul className="mt-5 space-y-3">

                {destination.activities.map(
                  (activity) => (

                    <li
                      key={activity}
                      className="flex gap-3"
                    >
                      <span className="text-emerald-700">
                        ✓
                      </span>

                      {activity}
                    </li>

                  )
                )}

              </ul>

            </div>

          </div>


          {/* Sidebar */}

          <aside>

            <div className="sticky top-24 rounded-xl border border-stone-200 bg-white p-6">

              <h2 className="text-xl font-bold text-emerald-950">
                Travel Information
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-sm text-stone-500">
                    Best Time To Visit
                  </p>

                  <p className="mt-1 font-medium text-stone-800">
                    {destination.bestTimeToVisit}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">
                    Average Daily Cost
                  </p>

                  <p className="mt-1 font-medium text-stone-800">
                    ${destination.averageCostPerDay}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">
                    Budget Type
                  </p>

                  <p className="mt-1 font-medium text-stone-800">
                    {destination.budget}
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>


        {/* Travel Tips */}

        <section className="mt-16">

          <h2 className="text-2xl font-bold text-emerald-950">
            Travel Tips
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {destination.travelTips.map(
              (tip, index) => (

                <div
                  key={tip}
                  className="rounded-lg border border-stone-200 bg-white p-5"
                >

                  <span className="font-bold text-emerald-700">
                    Tip {index + 1}
                  </span>

                  <p className="mt-2 text-stone-600">
                    {tip}
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* Related Destinations */}

        <section className="mt-16">

          <h2 className="text-2xl font-bold text-emerald-950">
            You May Also Like
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {relatedDestinations.map(
              (related) => (

                <Link
                  key={related.id}
                  href={`/destinations/${related.slug}`}
                  className="rounded-lg border border-stone-200 bg-white p-5 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
                >

                  <h3 className="text-lg font-semibold text-emerald-950">
                    {related.name}
                  </h3>

                  <p className="mt-1 text-sm text-stone-500">
                    {related.country}
                  </p>

                </Link>

              )
            )}

          </div>

        </section>

      </section>

    </article>
  );
}