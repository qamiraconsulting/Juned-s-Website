import { site } from "@/data/site";

export function Logo({ large = false, light = false }: { large?: boolean; light?: boolean }) {
  return (
    <a href="#top" className="flex items-center">
      <img
        src={light ? "/logo-white.png" : "/logo-navy.png"}
        alt={site.name}
        className={large ? "h-12 w-auto sm:h-14" : "h-10 w-auto sm:h-11"}
      />
    </a>
  );
}
