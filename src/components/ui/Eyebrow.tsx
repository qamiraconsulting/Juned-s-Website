import clsx from "clsx";

export function Eyebrow({
  children,
  center = false,
  tone = "action",
  className,
}: {
  children: string;
  center?: boolean;
  tone?: "action" | "eco" | "white";
  className?: string;
}) {
  const toneClasses = {
    action: "text-action-dim",
    eco: "text-eco",
    white: "text-white/80",
  }[tone];

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-[0.14em]",
        toneClasses,
        center && "justify-center",
        className,
      )}
    >
      <span aria-hidden="true" className="h-[3px] w-6 rounded-full bg-current" />
      {children}
    </span>
  );
}
