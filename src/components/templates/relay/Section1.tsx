import Image from 'next/image';

export default function Section1() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-[48px] font-[500] text-[#4A6163] font-[family-name:var(--font-spectral)] tracking-[-0.04em] mb-6">
                Nutrition for a <br /> Healthy Life
              </h2>
              <p className="text-[#4A6163]/80 text-lg leading-relaxed">
                At the heart of my functionality is a deep understanding of the science behind nutrition and its impact on the human body. With my vast database of nutritional information, I can help you make informed choices about what to eat and when to eat it, ensuring that you get the nutrients you need to fuel your body and reach your goals.
              </p>
            </div>

            <button className="text-[#4A6163] px-8 py-4 rounded-full text-lg border border-[#4A6163]/20 hover:bg-[#4A6163]/5 transition-colors">
              View Services
            </button>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/templates/relay/food1.png"
                alt="Fresh salad with cashews"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="relative aspect-[4/3] w-full h-full">
              <Image
                src="/templates/relay/food2.png"
                alt="Healthy meal with vegetables"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}