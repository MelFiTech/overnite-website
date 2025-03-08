import { HeroSection, Section1 } from '@/components/templates/relay';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function RelayTemplate() {
  return (
    <main>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Section1 />
      </AnimatedSection>
    </main>
  );
} 