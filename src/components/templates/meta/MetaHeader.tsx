import Link from 'next/link';

export default function MetaHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-medium">
            The Food Co.
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="#home" className="text-white border-b border-white">
              Home
            </Link>
            <Link href="#story" className="text-white/80 hover:text-white transition-colors">
              Our Story
            </Link>
            <Link href="#menu" className="text-white/80 hover:text-white transition-colors">
              Menu
            </Link>
            <Link href="#gallery" className="text-white/80 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="#reservations" className="text-white/80 hover:text-white transition-colors">
              Reservations
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 