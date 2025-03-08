import Image from 'next/image';
import DomeHeader from './DomeHeader';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/templates/dome/dome-hero.png"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <DomeHeader />
      
      <div className="relative z-1 text-center text-white px-8">
        <h1 className="text-6xl md:text-7xl font-[500] mb-6 font-[family-name:var(--font-spectral)] tracking-[-0.04em]">
          Simply Delicious <br /> Gourmet Meals
        </h1>
        <div className="space-y-2">
          <p className="text-xl text-white/90">
            The Dome, 123, Main Avenue, Barcelona
          </p>
          <p className="text-xl text-white/90">
            10011
          </p>
        </div>
        <button className="mt-8 bg-[#C17F00] text-white px-8 py-4 rounded-full hover:bg-[#D4A853]/90 transition-colors">
          Explore More
        </button>
      </div>
    </section>
  );
} 