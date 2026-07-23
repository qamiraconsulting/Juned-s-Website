import type { ReactNode } from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  arrow?: boolean;
  onClick?: () => void;
  className?: string;
  title?: string;
  type?: "button" | "submit";
};

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.02em] transition-all duration-200 ease-signature hover:-translate-y-px";

const variantClasses: Record<Variant, string> = {
  primary: "bg-action text-white shadow-[0_4px_14px_rgba(255,107,26,0.35)] hover:bg-action-bright",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-white hover:text-action-bright",
};

export function Button({ children, href, variant = "primary", arrow = false, onClick, className, title, type = "button" }: ButtonProps) {
  const classes = clsx(base, variantClasses[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        title={title}
        target={!isAnchor && href.startsWith("http") ? "_blank" : undefined}
        rel={!isAnchor && href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} title={title}>
      {content}
    </button>
  );
}
