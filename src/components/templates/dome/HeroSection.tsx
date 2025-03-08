import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white relative">
      <div className="max-w-[1200px] mx-auto px-8 pt-40 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-[500] text-black font-[family-name:var(--font-spectral)] tracking-[-0.04em]">
              A Modern Dining Experience
            </h1>
            <p className="text-black/80 text-xl leading-relaxed">
              Experience fine dining reimagined at Dome, where culinary excellence meets contemporary ambiance.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-black/90 transition-colors">
              Reserve a Table
            </button>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/templates/dome/hero.png"
              alt="Modern restaurant interior"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 