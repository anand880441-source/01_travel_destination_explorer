export interface Region {
  id: number;
  name: string;
  slug: string;
  continent: string;
  description: string;
  image: string;
  highlights: string[];
}

export const regions: Region[] = [
  {
    id: 1,
    name: "Asia",
    slug: "asia",
    continent: "Asia",
    description:
      "Discover ancient cultures, futuristic cities, tropical islands, incredible food and diverse landscapes.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    highlights: [
      "Culture",
      "Food",
      "Temples",
      "Beaches",
    ],
  },

  {
    id: 2,
    name: "Europe",
    slug: "europe",
    continent: "Europe",
    description:
      "Explore historic cities, beautiful architecture, famous landmarks and diverse European cultures.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    highlights: [
      "History",
      "Architecture",
      "Art",
      "Food",
    ],
  },

  {
    id: 3,
    name: "North America",
    slug: "north-america",
    continent: "North America",
    description:
      "Experience modern cities, breathtaking national parks, diverse cultures and unforgettable road trips.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    highlights: [
      "Cities",
      "Nature",
      "Road Trips",
      "Entertainment",
    ],
  },

  {
    id: 4,
    name: "South America",
    slug: "south-america",
    continent: "South America",
    description:
      "Explore vibrant cultures, dramatic landscapes, rainforests, mountains and historic destinations.",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    highlights: [
      "Adventure",
      "Mountains",
      "Wildlife",
      "Culture",
    ],
  },

  {
    id: 5,
    name: "Africa",
    slug: "africa",
    continent: "Africa",
    description:
      "Discover incredible wildlife, ancient traditions, deserts, mountains and beautiful coastlines.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    highlights: [
      "Safari",
      "Wildlife",
      "Nature",
      "Adventure",
    ],
  },

  {
    id: 6,
    name: "Oceania",
    slug: "oceania",
    continent: "Oceania",
    description:
      "Experience spectacular beaches, islands, coral reefs and unique natural landscapes.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1",
    highlights: [
      "Beaches",
      "Islands",
      "Diving",
      "Nature",
    ],
  },
];