import Image from 'next/image';

interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function DishCard({ name, description, price, image }: DishCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-gray-900">{name}</h3>
          <span className="text-xl font-medium text-gray-900">{price}</span>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
} 