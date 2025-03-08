import Image from 'next/image';
import RelayHeader from './RelayHeader';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white relative">
      <RelayHeader />
      
      <div className="max-w-6xl mx-auto px-8 pt-40 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[800px]">
            <Image
              src="/templates/relay/relay-hero.png"
              alt="Julia with healthy food"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-[48px] leading-[1.0] font-[500] text-[#4A6163] font-[family-name:var(--font-spectral)] tracking-[-0.04em]">
              Rise with Julia for a healthy, strong body and mind.
            </h1>
            <p className="text-[#4A6163]/80 text-lg leading-relaxed">
              As a Nutristation, I am a cutting-edge, high-tech machine designed to provide personalized nutrition advice and guidance to individuals seeking to improve their health and well-being. Equipped with advanced algorithms and artificial intelligence, I am able to analyze vast amounts of data about each user&apos;s unique characteristics, such as age, weight, height, body composition, and activity level, to create a personalized nutrition plan tailored to their individual needs and goals.
            </p>
            <button className="bg-white text-[#4A6163] px-8 py-4 rounded-full text-lg border border-[#4A6163]/20 hover:bg-[#4A6163]/5 transition-colors">
              About Julia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 