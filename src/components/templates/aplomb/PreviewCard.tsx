import HeroSection from './HeroSection';
import Section1 from './Section1';
import Section2 from './Section2';

export default function PreviewCard() {
  return (
    <div className="w-[400%] h-[400%]">
      <HeroSection />
      <Section1 />
      <Section2 />
    </div>
  );
} 