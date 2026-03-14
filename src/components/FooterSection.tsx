const FooterSection = () => {
  return (
    <footer className="bg-black px-6 py-12 text-white border-t border-neutral-900 md:px-12">
      <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
        <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
          &copy; 2024 NO SIGNAL. All Rights Reserved.
        </div>
        <div className="flex space-x-8 text-[10px] tracking-[0.2em] uppercase">
          <a href="#" className="transition-colors duration-300 hover:text-neutral-400">Instagram</a>
          <a href="#" className="transition-colors duration-300 hover:text-neutral-400">Privacy</a>
          <a href="#" className="transition-colors duration-300 hover:text-neutral-400">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
