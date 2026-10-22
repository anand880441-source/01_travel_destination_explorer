import { Destination } from "@/types/destination";
import DestinationCard from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({
  destinations,
}: DestinationGridProps) {
  if (destinations.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-emerald-950">
          No destinations found
        </h2>

        <p className="mt-2 text-stone-600">
          Try exploring another region.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}