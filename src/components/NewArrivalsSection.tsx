const products = [
  {
    name: "Oversized Wool Coat",
    price: "$890",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Structured Blazer",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Technical Trouser",
    price: "$450",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1000",
  },
];

const NewArrivalsSection = () => {
  return (
    <section id="new-arrivals" className="bg-black px-6 py-32 text-white md:px-12">
      <div className="mb-16 flex items-end justify-between border-b border-neutral-800 pb-8">
        <h2 className="text-[10px] tracking-[0.3em] uppercase">New Arrivals</h2>
        <a
          href="#"
          className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 transition-colors duration-300 hover:text-white"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 gap-px bg-neutral-800 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative bg-black p-4 transition-colors duration-500 hover:bg-neutral-950"
          >
            <div className="mb-6 aspect-[3/4] overflow-hidden bg-neutral-900">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.1em] uppercase">
              <span>{product.name}</span>
              <span className="text-neutral-500">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
