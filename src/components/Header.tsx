'use client';

import Image from "next/image";
import Button from "./ui/Button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center py-6 px-8 sm:px-20">
      <div>
        <Image
          src="/overnite-logo.png"
          alt="Vernite Website"
          width={168}
          height={46}
          className="w-[168px] h-[46px]"
        />
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <a
            href="/login"
            className="text-white/80 hover:text-white transition-colors text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
          <Button href="/start" variant="primary" onClick={() => setIsMenuOpen(false)}>
            Start Your Website →
          </Button>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-4">
        <a
          href="/login"
          className="text-white/80 hover:text-white transition-colors"
        >
          Login
        </a>
        <Button href="/start" variant="primary">
          Start Your Website →
        </Button>
      </nav>
    </header>
  );
}