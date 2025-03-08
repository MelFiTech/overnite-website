import Image from 'next/image';
import AplombHeader from './AplombHeader';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1B4D3E]">
      <AplombHeader />
      
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 my-auto relative">
        <div className="relative z-10 space-y-6 bg-[#D49A89]/85 p-8 rounded-lg">
          <h1 className="text-6xl md:text-7xl font-[500] font-[family-name:var(--font-inter)] tracking-[-0.04em] text-white">
            Experience the <br />
            authentic <br />
            flavors of Spain <br />
            at Aplomb.
          </h1>
          <p className="text-white/90 text-xl leading-relaxed font-[family-name:var(--font-inter)]">
            Aplomb is an authentic tapas restaurant with a delicious and varied selection of tapas dishes, served in a warm and welcoming atmosphere.
          </p>
          <p className="text-white/90 text-xl font-[family-name:var(--font-inter)]">
            Visit us at Calle de la Tapas, 12 Barcelona, Spain <br />
            08001
          </p>
          <button className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors font-[family-name:var(--font-inter)]">
            Make a Reservation
          </button>
        </div>

        <div className="absolute right-0 w-[60%] h-full flex items-center justify-center">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/templates/aplomb/tapas.png"
              alt="Spanish tapas dishes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 