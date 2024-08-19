import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
import Button from "@/components/Button"

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
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
