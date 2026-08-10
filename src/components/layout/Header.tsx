import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Header() {
  // Only Home has a full-bleed dark hero behind the header, so only Home
  // gets the transparent/white-text treatment at scrollY 0 -- every other
  // page opens straight onto a light background and needs the solid
  // white-bar/navy-text styling from the first frame, or the nav is
  // unreadable (white text on white).
  const { pathname } = useLocation();
  const hasHero = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);
  const scrolled = scrolledPast || !hasHero;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => setScrolledPast(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-[100]">
      {/* Slim contact strip -- hidden once scrolled, to keep the sticky bar compact */}
      <div
        className={clsx(
          "hidden overflow-hidden bg-navy text-white transition-all duration-300 ease-signature sm:block",
          scrolled ? "max-h-0" : "max-h-10",
        )}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-2 text-xs sm:px-8 lg:px-12">
          <span className="font-medium">Same-day service available across {site.serviceRegion}</span>
          <a href={site.phoneHref} className="flex items-center gap-1.5 font-bold tracking-wide hover:text-action-bright">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>

      <div
        className={clsx(
          "transition-all duration-300 ease-signature",
          scrolled ? "border-b border-ink/10 bg-white/95 py-3 shadow-sm backdrop-blur-md" : "border-b border-transparent py-4",
        )}
      >
        {/* Mobile/tablet: hamburger - logo - call button, matching the sample's
            mobile header. Desktop (lg+): logo - nav - phone + quote button,
            hamburger and mobile call button drop out entirely. */}
        <div className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={clsx(
              "order-first flex h-10 w-10 shrink-0 items-center justify-center rounded-md border lg:hidden",
              scrolled ? "border-ink/15 text-navy" : "border-white/30 text-white",
            )}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          <Logo large light={!scrolled} />

          <nav className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => {
              const navClass = clsx(
                "font-display text-sm font-bold uppercase tracking-[0.02em] transition-colors hover:text-action-bright",
                scrolled ? "text-navy" : "text-white",
              );
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
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-action text-white lg:hidden"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.phoneHref}
              className={clsx(
                "hidden items-center gap-2 font-display text-sm font-bold lg:flex",
                scrolled ? "text-navy" : "text-white",
              )}
            >
              <Phone className="h-4 w-4 text-action" aria-hidden="true" />
              {site.phone}
            </a>
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
