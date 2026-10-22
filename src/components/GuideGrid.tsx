import { Guide } from "@/types/guide";
import GuideCard from "./GuideCard";

interface GuideGridProps {
  guides: Guide[];
}

export default function GuideGrid({
  guides,
}: GuideGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {guides.map((guide) => (
        <GuideCard
          key={guide.id}
          guide={guide}
        />
      ))}

    </div>
  );
}