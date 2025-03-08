import Link from 'next/link';

export default function DomeHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-[800] font-[family-name:var(--font-spectral)]">
            DOME
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-8">
              <Link href="#home" className="text-white border-b border-white">
                Home
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#menu" className="text-white/80 hover:text-white transition-colors">
                Menu
              </Link>
              <Link href="#blog" className="text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
              Reservations
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 