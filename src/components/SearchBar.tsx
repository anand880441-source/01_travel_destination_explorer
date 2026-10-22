"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-3">

      <input
        type="text"
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;

          setValue(newValue);
          onSearch(newValue);
        }}
        placeholder="Search destinations..."
        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
      />

    </div>
  );
}