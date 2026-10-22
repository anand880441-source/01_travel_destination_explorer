import { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: 1,

    slug: "paris",

    name: "Paris",

    country: "France",

    region: "Western Europe",

    continent: "Europe",

    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",

    shortDescription:
      "Experience art, architecture, food and romance in the heart of France.",

    description:
      "Paris is one of the world's most iconic travel destinations, famous for its historic architecture, museums, cafés and beautiful streets. From the Eiffel Tower and Louvre Museum to charming neighborhoods and French cuisine, Paris offers something for almost every type of traveler.",

    bestTimeToVisit:
      "April to June and September to October",

    budget: "Moderate",

    averageCostPerDay: 150,

    rating: 4.8,

    popularFor: [
      "Art",
      "Architecture",
      "Food",
      "History",
      "Shopping"
    ],

    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Montmartre"
    ],

    activities: [
      "Visit museums",
      "Walk along the Seine",
      "Explore Montmartre",
      "Try French cuisine",
      "Visit local cafés"
    ],

    travelTips: [
      "Use public transportation to move around the city.",
      "Book popular attractions in advance.",
      "Wear comfortable shoes for walking.",
      "Keep valuables secure in crowded tourist areas."
    ]
  },

  {
    id: 2,

    slug: "tokyo",

    name: "Tokyo",

    country: "Japan",

    region: "East Asia",

    continent: "Asia",

    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",

    shortDescription:
      "Explore the perfect combination of traditional culture and futuristic city life.",

    description:
      "Tokyo is a dynamic city where ancient temples exist alongside modern skyscrapers, technology and vibrant entertainment districts. Visitors can explore historic neighborhoods, enjoy Japanese cuisine and experience one of the world's most efficient urban environments.",

    bestTimeToVisit:
      "March to May and September to November",

    budget: "Moderate",

    averageCostPerDay: 130,

    rating: 4.9,

    popularFor: [
      "Technology",
      "Food",
      "Culture",
      "Shopping",
      "Anime"
    ],

    attractions: [
      "Tokyo Tower",
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Meiji Shrine",
      "Akihabara"
    ],

    activities: [
      "Explore Shibuya",
      "Visit traditional temples",
      "Try Japanese food",
      "Explore Akihabara",
      "Visit Tokyo markets"
    ],

    travelTips: [
      "Get a rechargeable transportation card.",
      "Learn a few basic Japanese phrases.",
      "Avoid talking loudly on public transportation.",
      "Carry some cash for small local businesses."
    ]
  },

  {
    id: 3,

    slug: "bali",

    name: "Bali",

    country: "Indonesia",

    region: "Southeast Asia",

    continent: "Asia",

    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",

    shortDescription:
      "Relax on tropical beaches and discover temples, rice terraces and local culture.",

    description:
      "Bali is a tropical destination known for beautiful beaches, temples, rice terraces, waterfalls and vibrant local culture. It is popular with travelers looking for relaxation, adventure, wellness and cultural experiences.",

    bestTimeToVisit:
      "April to October",

    budget: "Budget",

    averageCostPerDay: 70,

    rating: 4.7,

    popularFor: [
      "Beaches",
      "Nature",
      "Temples",
      "Wellness",
      "Adventure"
    ],

    attractions: [
      "Uluwatu Temple",
      "Tegallalang Rice Terraces",
      "Tanah Lot",
      "Seminyak Beach",
      "Ubud"
    ],

    activities: [
      "Surfing",
      "Temple visits",
      "Scuba diving",
      "Hiking",
      "Yoga and wellness"
    ],

    travelTips: [
      "Respect local temple customs.",
      "Carry sunscreen and drinking water.",
      "Rent transportation only from reliable providers.",
      "Check weather conditions before outdoor activities."
    ]
  },

  {
    id: 4,

    slug: "goa",

    name: "Goa",

    country: "India",

    region: "South Asia",

    continent: "Asia",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",

    shortDescription:
      "Enjoy beaches, Portuguese architecture, local food and relaxed coastal life.",

    description:
      "Goa is one of India's most popular coastal destinations. It combines beaches, Portuguese-influenced architecture, local seafood, markets and a relaxed atmosphere.",

    bestTimeToVisit:
      "November to February",

    budget: "Budget",

    averageCostPerDay: 50,

    rating: 4.6,

    popularFor: [
      "Beaches",
      "Food",
      "Nightlife",
      "Culture",
      "Water Sports"
    ],

    attractions: [
      "Baga Beach",
      "Calangute Beach",
      "Fort Aguada",
      "Basilica of Bom Jesus",
      "Palolem Beach"
    ],

    activities: [
      "Beach hopping",
      "Water sports",
      "Explore old Goa",
      "Try local cuisine",
      "Visit markets"
    ],

    travelTips: [
      "Avoid visiting beaches during rough weather.",
      "Carry sunscreen.",
      "Respect local customs.",
      "Rent vehicles only from licensed providers."
    ]
  },

  {
    id: 5,

    slug: "switzerland",

    name: "Switzerland",

    country: "Switzerland",

    region: "Central Europe",

    continent: "Europe",

    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",

    shortDescription:
      "Discover dramatic Alps, beautiful lakes and charming mountain towns.",

    description:
      "Switzerland is known for its spectacular Alpine landscapes, clean cities, scenic train journeys and peaceful mountain villages. It is ideal for travelers who enjoy nature, hiking and beautiful scenery.",

    bestTimeToVisit:
      "June to September",

    budget: "Luxury",

    averageCostPerDay: 250,

    rating: 4.9,

    popularFor: [
      "Mountains",
      "Nature",
      "Hiking",
      "Scenic Trains",
      "Lakes"
    ],

    attractions: [
      "Swiss Alps",
      "Lake Geneva",
      "Jungfraujoch",
      "Interlaken",
      "Zermatt"
    ],

    activities: [
      "Hiking",
      "Mountain train journeys",
      "Skiing",
      "Lake cruises",
      "Explore mountain villages"
    ],

    travelTips: [
      "Public transportation is very reliable.",
      "Book mountain excursions in advance.",
      "Check weather before hiking.",
      "Travel costs can be high, so plan your budget carefully."
    ]
  },

  {
    id: 6,

    slug: "new-york",

    name: "New York",

    country: "United States",

    region: "North America",

    continent: "North America",

    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",

    shortDescription:
      "Experience iconic landmarks, diverse neighborhoods, museums and world-famous entertainment.",

    description:
      "New York City is a fast-paced global destination famous for Times Square, Central Park, museums, Broadway, diverse food and neighborhoods with distinct identities.",

    bestTimeToVisit:
      "April to June and September to November",

    budget: "Luxury",

    averageCostPerDay: 200,

    rating: 4.7,

    popularFor: [
      "Shopping",
      "Entertainment",
      "Food",
      "Museums",
      "Architecture"
    ],

    attractions: [
      "Times Square",
      "Central Park",
      "Statue of Liberty",
      "Empire State Building",
      "Brooklyn Bridge"
    ],

    activities: [
      "Watch a Broadway show",
      "Visit museums",
      "Explore Central Park",
      "Walk across Brooklyn Bridge",
      "Try different cuisines"
    ],

    travelTips: [
      "Use the subway for efficient transportation.",
      "Keep your belongings secure in crowded areas.",
      "Plan popular attractions ahead of time.",
      "Wear comfortable shoes."
    ]
  }
];