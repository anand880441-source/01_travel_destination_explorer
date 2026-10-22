"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        <Link
          href="/destinations"
          className="text-xl font-bold tracking-tight text-emerald-950"
        >
          Way<span className="text-amber-700">Finder</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/destinations"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-800"
          >
            Destinations
          </Link>

          <Link
            href="/region"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-800"
          >
            Regions
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-800"
          >
            About
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-stone-300 px-3 py-2 text-stone-700 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <nav className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4 text-stone-700">

            <Link
              href="/destinations"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </Link>

            <Link
              href="/region"
              onClick={() => setMenuOpen(false)}
            >
              Regions
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

          </div>

        </nav>
      )}
    </header>
  );
}