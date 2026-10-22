import Image from "next/image";
import Link from "next/link";
import { Region } from "../data/regions";

interface RegionCardProps {
  region: Region;
}

export default function RegionCard({
  region,
}: RegionCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition-shadow hover:shadow-md">

      {/* Image */}

      <Link
        href={`/region/${region.slug}`}
        className="block"
      >
        <div className="relative h-64 overflow-hidden">

          <Image
            src={region.image}
            alt={region.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Region name */}

          <div className="absolute bottom-5 left-5 text-white">

            <p className="text-sm text-white/80">
              Explore
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              {region.name}
            </h2>

          </div>

        </div>
      </Link>

      {/* Content */}

      <div className="p-5">

        <p className="text-sm leading-6 text-stone-600">
          {region.description}
        </p>

        {/* Highlights */}

        <div className="mt-5 flex flex-wrap gap-2">

          {region.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-900"
            >
              {highlight}
            </span>
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-6 border-t border-stone-200 pt-4">

          <Link
            href={`/region/${region.slug}`}
            className="flex items-center justify-between text-sm font-semibold text-emerald-950 transition group-hover:text-emerald-700"
          >
            <span>
              Explore {region.name}
            </span>

            <span className="text-lg">
              →
            </span>

          </Link>

        </div>

      </div>

    </article>
  );
}