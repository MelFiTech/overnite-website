import { DomeHeader, HeroSection, Section1, Section2 } from '@/components/templates/dome';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function DomeTemplate() {
  return (
    <main>
      <DomeHeader />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Section1 />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Section2 />
      </AnimatedSection>
    </main>
  );
} 