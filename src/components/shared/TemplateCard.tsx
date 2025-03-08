'use client';

import Image from "next/image";
import Button from "../ui/Button";
import { Suspense } from "react";
import dynamic from "next/dynamic";

interface TemplateCardProps {
  name: string;
  image: string;
  isNew?: boolean;
  fallbackColor: string;
}

export default function TemplateCard({ name, image, isNew, fallbackColor }: TemplateCardProps) {
  // Dynamically import the template components
  const Template = dynamic(
    () => import(`@/components/templates/${name.toLowerCase()}/PreviewCard`).catch(() => () => null),
    { ssr: false }
  );

  return (
    <div className="group relative bg-black/5 rounded-2xl overflow-hidden">
      <div className={`relative aspect-[4/3] ${fallbackColor}`}>
        <div className="absolute inset-0 w-full h-full scale-[0.25] origin-top-left transform-gpu">
          <Suspense fallback={
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          }>
            <Template />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-60 touch-none" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        {isNew && (
          <div className="self-start bg-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-black">
            New Template
          </div>
        )}
        
        <div className="flex flex-col gap-2 sm:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 md:hidden md:group-hover:flex">
          <h3 className="text-white text-lg sm:text-xl font-medium drop-shadow-lg">{name}</h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button href={`/templates/${name.toLowerCase()}`} variant="primary" className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm">
              Preview Theme
            </Button>
            <Button href={`/start/${name.toLowerCase()}`} variant="secondary" className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm">
              Start with {name.split(' ')[0]}
            </Button>
          </div>
        </div>

        {/* Always visible on mobile */}
        <div className="flex flex-col gap-2 md:hidden">
          <h3 className="text-white text-lg sm:text-xl font-medium drop-shadow-lg">{name}</h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button href={`/templates/${name.toLowerCase()}`} variant="primary" className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm">
              Preview Theme
            </Button>
            <Button href={`/start/${name.toLowerCase()}`} variant="secondary" className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm">
              Start with {name.split(' ')[0]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 