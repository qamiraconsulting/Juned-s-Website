import type { ReactNode } from "react";
import clsx from "clsx";

type Tone = "paper" | "white" | "navy";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-white",
};

export function Section({
  children,
  tone = "paper",
  bordered = false,
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  bordered?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 sm:py-20 lg:py-24",
        toneClasses[tone],
        bordered && (tone === "navy" ? "border-t border-white/10" : "border-t border-ink/10"),
        className,
      )}
    >
      {children}
    </section>
  );
}
