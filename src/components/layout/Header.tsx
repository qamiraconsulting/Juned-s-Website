import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";

// Always the solid navy bar now, on every page and at every scroll
// position -- previously this only went solid-white after scrolling 12px
// past a hero (and was solid-white from the first frame on every other
// page). The slim "Same-day service..." contact strip that used to show
// above it pre-scroll is dropped along with that toggle, since it would
// never be reachable anymore.
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-[100]">
      <div className="border-b border-white/10 bg-navy py-3 shadow-sm">
        {/* Mobile/tablet: hamburger - logo - quote button, matching the sample's
            hamburger-left/logo-center/right-slot mobile header layout (the
            right slot held a call button until the phone number was
            dropped 2026-08-15). Desktop (lg+): logo - nav - quote button,
            hamburger and the mobile right slot drop out entirely. */}
        <div className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="order-first flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/30 text-white lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          <Logo large light />

          <nav className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => {
              const navClass = "font-display text-sm font-bold uppercase tracking-[0.02em] text-white transition-colors hover:text-action-bright";
              return item.href.includes("#") ? (
                <a key={item.href} href={item.href} className={navClass}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} to={item.href} className={navClass}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/quote"
              aria-label="Get a Free Quote"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-action text-white lg:hidden"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="hidden lg:inline-flex">
              <Button href="/quote">Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-ink/10 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const itemClass = "rounded-md px-2 py-2.5 font-display text-sm font-bold uppercase tracking-[0.02em] text-navy hover:bg-paper";
              return item.href.includes("#") ? (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={itemClass}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className={itemClass}>
                  {item.label}
                </Link>
              );
            })}
            <Button href="/quote" className="mt-2" onClick={() => setMenuOpen(false)}>
              Get a Free Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
