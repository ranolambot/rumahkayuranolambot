"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-card font-bold text-lg group-hover:bg-secondary transition-colors duration-300">
              D
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                Desa Ranolambot
              </h1>
              <p className="text-xs text-foreground/60">
                Rumah Kayu Tradisional
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Beranda
            </Link>
            <Link
              href="/houses"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Rumah
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-border rounded transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-4 animate-slideInDown">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Beranda
            </Link>
            <Link
              href="/houses"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Rumah
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Tentang Kami
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
