import { MetaHeader, HeroSection, Section1, Section2 } from '@/components/templates/meta';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function MetaTemplate() {
  return (
    <main>
      <MetaHeader />
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