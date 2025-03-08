import Image from 'next/image';

export default function Section2() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[48px] font-[500] text-black font-[family-name:var(--font-spectral)] text-center mb-16">
          Our Menus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appetizers */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/templates/meta/appetizers.png"
                alt="Appetizers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-4xl text-white font-[family-name:var(--font-spectral)]">
                  Appetizers
                </h3>
              </div>
            </div>
          </div>

          {/* Entrées */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/templates/meta/entrees.png"
                alt="Entrées"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-4xl text-white font-[family-name:var(--font-spectral)]">
                  Entrées
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 