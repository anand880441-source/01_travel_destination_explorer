"use client"

import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "../../../data/destination";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function DestinationsPage() {

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = destinations.filter((item) => (
    item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  ))

  return (
    <div>

      {/* Page Hero */}

      <section className="border-b border-stone-200 bg-amber-50/70">

        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
            Explore the world
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-emerald-950 md:text-5xl">
            Find your next destination
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Discover beautiful places, unique cultures, memorable
            experiences and destinations worth exploring.
          </p>

          <SearchBar onSearch={(val) => setSearchTerm(val)}/>

        </div>

      </section>


      {/* Destination Section */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        {/* Heading */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-medium text-stone-500">
              {destinations.length} places to explore
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-emerald-950">
              All Destinations
            </h2>

          </div>

          <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-700 outline-none focus:border-emerald-700"
            defaultValue="popular"
          >
            <option value="popular">
              Most Popular
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="budget">
              Budget Friendly
            </option>
          </select>

        </div>


        {/* Filters */}

        <div className="mt-8 flex flex-wrap gap-3">

          <button className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-amber-50">
            Asia
          </button>

          <button className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-amber-50">
            Europe
          </button>

          <button className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-amber-50">
            North America
          </button>

          <button className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-amber-50">
            Budget Friendly
          </button>

        </div>


        {/* Cards */}

        <div className="mt-10">

          <DestinationGrid
            destinations={handleSearch}
          />

        </div>

      </section>

    </div>
  );
}