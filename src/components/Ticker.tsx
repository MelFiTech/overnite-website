export default function Ticker() {
  const tickerItems = [
    "BEST DESIGN",
    "IDEAS", 
    "BEST TEMPLATE",
    "STRATEGY"
  ];

  return (
    <div className="w-full overflow-hidden bg-black/10 backdrop-blur-sm py-2 sm:py-3">
      <div className="flex gap-4 sm:gap-8 animate-scroll whitespace-nowrap">
        {/* Original items */}
        {tickerItems.map((item, index) => (
          <div key={`item-${index}`} className="flex items-center gap-1 sm:gap-2 text-white/80">
            <span className="text-rose-500 text-sm sm:text-base">★</span>
            <span className="font-[family-name:var(--font-syncopate)] text-lg sm:text-2xl font-bold">{item}</span>
          </div>
        ))}
        
        {/* Duplicate items for seamless scrolling */}
        {tickerItems.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex items-center gap-1 sm:gap-2 text-white/80">
            <span className="text-rose-500 text-sm sm:text-base">★</span>
            <span className="font-[family-name:var(--font-syncopate)] text-lg sm:text-2xl font-bold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}