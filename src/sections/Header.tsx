import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="border-b border-white/15 py-4 md:border-none">
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 transition hover:text-white">
                Features
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Developers
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Pricing
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0px_0px_10px_rgba(140,69,255,0.7)_inset]"></div>
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
