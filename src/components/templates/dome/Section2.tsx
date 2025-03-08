import DishCard from './ui/DishCard';

const menuItems = [
  {
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
    price: "$28",
    image: "/templates/dome/dish.png"
  },
  {
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms and parmesan",
    price: "$24",
    image: "/templates/dome/dish.png"
  },
  {
    name: "Beef Tenderloin",
    description: "Prime cut beef with red wine reduction and roasted vegetables",
    price: "$34",
    image: "/templates/dome/dish.png"
  }
];

export default function Section2() {
  return (
    <section className="py-32 px-8 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-[500] text-black font-[family-name:var(--font-spectral)] tracking-[-0.04em] mb-6">
            Featured Dishes
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto">
            Discover our chef&apos;s specially curated selection of signature dishes, each crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <DishCard
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 