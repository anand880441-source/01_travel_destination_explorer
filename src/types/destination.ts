export interface Destination {
  id: number;
  slug: string;
  name: string;
  country: string;
  region: string;
  continent: string;
  image: string;
  shortDescription: string;
  description: string;
  bestTimeToVisit: string;
  budget: "Budget" | "Moderate" | "Luxury";
  averageCostPerDay: number;
  rating: number;
  popularFor: string[];
  attractions: string[];
  activities: string[];
  travelTips: string[];
}
