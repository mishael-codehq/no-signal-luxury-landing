import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/90 px-6 py-4 text-white backdrop-blur-md md:px-12">
      <div className="text-xs font-bold tracking-[0.3em] uppercase">No Signal</div>

      {/* Desktop links */}
      <div className="hidden space-x-8 text-[10px] tracking-[0.2em] uppercase md:flex">
        <a href="#collection" className="transition-colors duration-300 hover:text-neutral-400">Collection</a>
        <a href="#editorial" className="transition-colors duration-300 hover:text-neutral-400">Editorial</a>
        <a href="#archive" className="transition-colors duration-300 hover:text-neutral-400">Archive</a>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-[10px] tracking-[0.2em] uppercase">Cart (0)</span>
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1px] w-5 bg-white transition-all duration-500 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-[1px] w-5 bg-white transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1px] w-5 bg-white transition-all duration-500 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`absolute left-0 top-full w-full bg-black transition-all duration-500 ${menuOpen ? "max-h-60 border-t border-neutral-800" : "max-h-0 overflow-hidden"} md:hidden`}>
        <div className="flex flex-col items-center space-y-6 py-8 text-[10px] tracking-[0.2em] uppercase">
          <a href="#collection" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-neutral-400">Collection</a>
          <a href="#editorial" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-neutral-400">Editorial</a>
          <a href="#archive" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-neutral-400">Archive</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
