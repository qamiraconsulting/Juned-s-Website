import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { icons, type IconKey } from "@/lib/icons";

// Small 3-4 up row of icon + label trust signals, used at the bottom of
// service detail pages and inside the Quote form.
export function TrustIconsRow({ items, className }: { items: readonly { icon: IconKey; label: string }[]; className?: string }) {
  return (
    <Container className={className}>
      <RevealGroup className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <RevealItem key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.04em] text-ink-dim sm:text-sm sm:normal-case sm:tracking-normal sm:font-semibold sm:text-ink">
                {item.label}
              </span>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
