import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition-shadow hover:shadow-md">

      <Link href={`/destinations/${destination.slug}`}>

        <div className="relative h-64 overflow-hidden">

          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

      </Link>

      <div className="p-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-stone-500">
            {destination.country}
          </span>

          <span className="text-sm text-stone-700">
            ⭐ {destination.rating}
          </span>

        </div>

        <h2 className="mt-2 text-2xl font-bold text-emerald-950">
          {destination.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-stone-600">
          {destination.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-900">
            {destination.budget}
          </span>

          <Link
            href={`/destinations/${destination.slug}`}
            className="font-semibold text-emerald-800 hover:text-emerald-950"
          >
            View Details →
          </Link>

        </div>

      </div>

    </article>
  );
}