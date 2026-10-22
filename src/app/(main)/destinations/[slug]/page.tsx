import { notFound } from "next/navigation";
import DestinationDetails from "../../../../components/DestinationDetails";
import { destinations } from "../../../../data/destination";

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {

  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  const relatedDestinations = destinations
    .filter(
      (item) =>
        item.continent === destination.continent &&
        item.id !== destination.id
    )
    .slice(0, 3);

  return (
    <DestinationDetails
      destination={destination}
      relatedDestinations={relatedDestinations}
    />
  );
}