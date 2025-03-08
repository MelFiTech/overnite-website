import Image from 'next/image';

export default function Section1() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[584px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/templates/dome/story.png"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 pt-8">
            <h2 className="text-[48px] font-[500] text-[#C17F00] font-[family-name:var(--font-spectral)] tracking-[-0.04em]">
              Our Story
            </h2>
            <p className="text-black/70 text-xl leading-relaxed">
              Dome is a multi-cuisine restaurant that offers a rich and diverse dining experience. With a menu inspired by flavours from around the world, Dome blends culinary traditions to create innovative dishes that cater to every palate.
            </p>
            <button className="bg-[#C17F00] text-white px-8 py-4 rounded-full hover:bg-[#C17F00]/90 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 