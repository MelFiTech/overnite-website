import Link from 'next/link';

export default function RelayHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <nav className="flex items-center justify-between bg-[#657257]/10 backdrop-blur-sm rounded-[100px] px-8 py-4">
          <Link href="/" className="text-[#4A6163] text-2xl font-[500] font-[family-name:var(--font-spectral)]">
            Julia.R
          </Link>
          
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-8">
              <Link 
                href="#home" 
                className="text-[#4A6163] border-b-2 border-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#blog" 
                className="text-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
              >
                Blog
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href="#" 
                className="text-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="text-[#4A6163] hover:text-[#4A6163]/80 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>

            <button className="bg-[#4A6163] text-white px-6 py-3 rounded-full hover:bg-[#4A6163]/90 transition-colors">
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}