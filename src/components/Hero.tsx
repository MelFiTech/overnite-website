import Ticker from "./Ticker";
import Button from "./ui/Button";
import AnimatedSection from "./shared/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-32">
      <AnimatedSection className="text-center px-8">
        <h1 className="text-[64px] leading-[1.1] lg:text-[80px] font-bold mb-3 sm:mb-6 text-white max-w-[1200px] mx-auto tracking-[-0.04em]">
          Portfolio of Stunning Website
          <br />
          <span className="bg-gradient-to-r from-[#4D7EF2] to-[#7C4DF2] text-transparent bg-clip-text">
            Templates
          </span>
        </h1>
        <p className="text-lg text-white/80 max-w-[600px] mx-auto mb-6 sm:mb-10 tracking-[-0.02em]">
          Discover stunning portfolio websites by our talented designers & start building your own today.
        </p>
        <Button href="/create">
          Create Your Website
        </Button>
      </AnimatedSection>
      
      <div className="absolute bottom-60 left-0 right-0 bg-gradient-to-b from-transparent to-black/20 pt-20">
        <div className="rotate-[-2deg]">
          <Ticker />
        </div>
      </div>
    </section>
  );
}