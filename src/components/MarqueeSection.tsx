const MarqueeSection = () => {
  const text = "NO SIGNAL — AUTUMN WINTER 2024 — ";
  const repeated = text.repeat(6);

  return (
    <section className="overflow-hidden bg-black py-8 border-y border-neutral-800">
      <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500">
          {repeated}
        </span>
        <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500">
          {repeated}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
