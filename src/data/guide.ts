import { Guide } from "@/types/guide";

export const guides: Guide[] = [
  {
    id: 1,

    slug: "planning",

    title: "Travel Planning",

    description:
      "Learn how to plan your trip from choosing a destination to creating a practical itinerary.",

    category: "Planning",

    icon: "🗺️",

    readTime: "6 min read",

    introduction:
      "Good travel planning helps you make the most of your trip while avoiding unnecessary stress. Start by deciding your destination, travel dates, budget and the experiences you want to have.",

    tips: [
      "Decide your budget before booking major expenses.",
      "Research the destination before your trip.",
      "Keep some flexibility in your itinerary.",
      "Book important attractions and accommodation in advance.",
      "Always keep important travel documents accessible."
    ],

    checklist: [
      "Choose destination",
      "Set travel budget",
      "Select travel dates",
      "Book accommodation",
      "Plan major activities",
      "Check travel documents"
    ],

    sections: [
      {
        title: "Choose your destination",
        content:
          "Start by choosing a destination based on your interests, budget and available travel time. Consider weather, local culture, transportation and major attractions."
      },

      {
        title: "Set a realistic budget",
        content:
          "Divide your budget into transportation, accommodation, food, activities and emergency expenses. Keeping a small reserve can help you handle unexpected costs."
      },

      {
        title: "Create an itinerary",
        content:
          "Plan the main activities you want to experience while leaving some free time. Avoid trying to visit too many places in a single day."
      }
    ]
  },

  {
    id: 2,

    slug: "budget",

    title: "Budget Travel",

    description:
      "Simple strategies to reduce travel costs without missing the important experiences.",

    category: "Budget",

    icon: "💰",

    readTime: "5 min read",

    introduction:
      "Travel does not always have to be expensive. With careful planning, flexible dates and smart choices, you can significantly reduce your travel expenses.",

    tips: [
      "Compare transportation options before booking.",
      "Travel during shoulder seasons when possible.",
      "Choose accommodation based on location and value.",
      "Use public transportation.",
      "Look for free attractions and activities."
    ],

    checklist: [
      "Compare flights",
      "Compare accommodation",
      "Set daily spending limit",
      "Research public transportation",
      "Find free attractions"
    ],

    sections: [
      {
        title: "Choose affordable transportation",
        content:
          "Compare flights, trains, buses and other transportation options. Sometimes traveling slightly earlier or later can reduce the cost significantly."
      },

      {
        title: "Save on accommodation",
        content:
          "Look beyond expensive hotels and compare hostels, guesthouses, apartments and other accommodation options."
      },

      {
        title: "Control daily expenses",
        content:
          "Set a daily spending limit and keep track of food, transportation and activity expenses throughout the trip."
      }
    ]
  },

  {
    id: 3,

    slug: "packing",

    title: "Smart Packing",

    description:
      "Learn what to pack and how to avoid carrying unnecessary items during your trip.",

    category: "Packing",

    icon: "🎒",

    readTime: "4 min read",

    introduction:
      "Packing efficiently makes traveling easier. The goal is to carry everything you actually need without filling your luggage with unnecessary items.",

    tips: [
      "Check the weather before packing.",
      "Pack clothes that can be combined easily.",
      "Keep important documents in your carry-on.",
      "Carry basic medicines and personal essentials.",
      "Avoid packing items you probably will not use."
    ],

    checklist: [
      "Passport or ID",
      "Travel documents",
      "Clothes",
      "Toiletries",
      "Chargers",
      "Medications",
      "Travel accessories"
    ],

    sections: [
      {
        title: "Check the weather",
        content:
          "Always check the expected weather conditions before packing. This helps you choose appropriate clothing and footwear."
      },

      {
        title: "Pack versatile clothing",
        content:
          "Choose clothes that can be mixed and matched. Neutral colors and lightweight layers are useful for many types of trips."
      },

      {
        title: "Keep essentials accessible",
        content:
          "Keep your passport, identification, booking information, money and essential medication somewhere easy to access."
      }
    ]
  },

  {
    id: 4,

    slug: "safety",

    title: "Travel Safety",

    description:
      "Practical safety tips to help you travel confidently and responsibly.",

    category: "Safety",

    icon: "🛡️",

    readTime: "5 min read",

    introduction:
      "Being aware of your surroundings and preparing for common travel situations can make your journey safer and more comfortable.",

    tips: [
      "Keep copies of important documents.",
      "Avoid displaying large amounts of cash.",
      "Research local emergency numbers.",
      "Be careful with valuables in crowded places.",
      "Tell someone you trust about your travel plans."
    ],

    checklist: [
      "Save emergency numbers",
      "Keep document copies",
      "Secure valuables",
      "Research local customs",
      "Share itinerary"
    ],

    sections: [
      {
        title: "Protect important documents",
        content:
          "Keep your passport, identification and important booking information secure. Digital backups can also be useful if documents are lost."
      },

      {
        title: "Stay aware",
        content:
          "Pay attention to your surroundings, especially in busy tourist areas, transportation hubs and unfamiliar neighborhoods."
      },

      {
        title: "Know local emergency information",
        content:
          "Before traveling, research local emergency services and save important contact numbers on your phone."
      }
    ]
  }
];