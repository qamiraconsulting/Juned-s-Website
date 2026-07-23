import clsx from "clsx";
import { Truck } from "lucide-react";
import { site } from "@/data/site";

// Text wordmark placeholder -- swap for the client's real logo file once
// the brand name/ABN is confirmed (see data/site.ts).
export function Logo({ large = false, light = false }: { large?: boolean; light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2">
      <span
        className={clsx(
          "flex items-center justify-center rounded-md bg-action text-white",
          large ? "h-9 w-9" : "h-8 w-8",
        )}
      >
        <Truck className={large ? "h-5 w-5" : "h-4.5 w-4.5"} aria-hidden="true" />
      </span>
      <span
        className={clsx(
          "font-display font-black uppercase tracking-tight",
          large ? "text-xl" : "text-lg",
          light ? "text-white" : "text-navy",
        )}
      >
        {site.name}
      </span>
    </a>
  );
}
