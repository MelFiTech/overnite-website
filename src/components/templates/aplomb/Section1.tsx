export default function Section1() {
  return (
    <section className="py-32 px-8 bg-[#1B4D3E]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-5xl font-[500] text-white font-[family-name:var(--font-inter)] tracking-[-0.04em]">
              A passion for traditional Spanish tapas and a commitment to using the freshest, highest quality ingredients.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-white/90 text-xl leading-relaxed font-[family-name:var(--font-inter)]">
              Aplomb is the brain child and the passion project of Chef Gonzalo. He has been working in the culinary industry for over 20 years, and has gained a reputation for his skills in creating delicious and authentic Spanish dishes. He has trained with some of the top chefs in Spain and has a deep understanding of the country&apos;s culinary traditions and techniques.
            </p>
            <button className="bg-[#C69C8B] text-white px-8 py-4 rounded-lg hover:bg-[#C69C8B]/90 transition-colors font-[family-name:var(--font-inter)]">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 