import Link from "next/link";
import { Guide } from "@/types/guide";

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({
  guide,
}: GuideCardProps) {
  return (
    <article className="group rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-md">

      {/* Icon */}

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-2xl">
        {guide.icon}
      </div>

      {/* Category */}

      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-800">
        {guide.category}
      </p>

      {/* Title */}

      <h2 className="mt-2 text-2xl font-bold text-emerald-950">
        {guide.title}
      </h2>

      {/* Description */}

      <p className="mt-3 text-sm leading-6 text-stone-600">
        {guide.description}
      </p>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">

        <span className="text-xs text-stone-500">
          {guide.readTime}
        </span>

        <Link
          href={`/guide/${guide.slug}`}
          className="text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-950"
        >
          Read Guide →
        </Link>

      </div>

    </article>
  );
}