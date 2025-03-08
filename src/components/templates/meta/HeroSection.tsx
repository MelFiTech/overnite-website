import Image from 'next/image';
import MetaHeader from './MetaHeader';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/templates/meta/metahero.png"
          alt="Restaurant ambiance"
          fill
          className="object-cover brightness-50"
        />
      </div>

      <MetaHeader />
      
      <div className="relative z-1 text-center text-white px-8">
        <h1 className="text-6xl md:text-7xl font-[500] mb-4 font-[family-name:var(--font-spectral)] tracking-[-4px]">
          The Fine Art of Dining
        </h1>
        <p className="text-xl text-white/90 mb-8">
          123 Demo Street, Barcelona - (999) 666 3333
        </p>
        <button className="bg-white text-black px-8 py-4 rounded hover:bg-white/90 transition-colors">
          Make a Reservation
        </button>
      </div>
    </section>
  );
} 