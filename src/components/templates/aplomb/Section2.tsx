import Image from 'next/image';

export default function Section2() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/templates/aplomb/wine-tasting.jpg"
        alt="Wine tasting and tapas experience"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
} 