const HeroSection = () => {
  return (
    <section className="relative flex h-svh flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div className="z-10 flex flex-col items-center text-center">
        <span className="mb-4 text-[10px] tracking-[0.5em] uppercase text-neutral-400 animate-[fadeIn_1s_ease-out_0.2s_both]">
          Autumn / Winter 2024
        </span>
        <h1 className="mb-8 text-[18vw] font-bold leading-[0.8] tracking-tighter md:text-[15vw] animate-[fadeIn_1s_ease-out_0.4s_both]">
          NO SIGNAL
        </h1>
        <p className="mb-12 max-w-md px-6 text-sm font-light leading-relaxed tracking-wide text-neutral-300 md:text-base animate-[fadeIn_1s_ease-out_0.6s_both]">
          A study in monochrome. High-performance silhouettes for the modern minimalist.
        </p>
        <a
          href="#new-arrivals"
          className="border border-white px-12 py-4 text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black animate-[fadeIn_1s_ease-out_0.8s_both]"
        >
          Shop New Arrivals
        </a>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-50" />
    </section>
  );
};

export default HeroSection;
