import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-8 pt-16 text-white/70 sm:pt-20">
      <Container>
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-[30ch] text-sm">{site.tagline}</p>
          </div>
          <FooterColumn title="Services" items={footerNav.services} />
          <FooterColumn title="Company" items={footerNav.company} />
          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/50">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-action-bright">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-action-bright">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.serviceRegion}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.fullName}. All rights reserved. {site.abnNote}
          </span>
          <span>Fully licensed &amp; insured, {site.serviceRegion}.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/50">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.label}>
            {item.href.includes("#") ? (
              <a href={item.href} className="text-sm transition-colors hover:text-action-bright">
                {item.label}
              </a>
            ) : (
              <Link to={item.href} className="text-sm transition-colors hover:text-action-bright">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
