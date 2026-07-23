export type NavItem = {
  label: string;
  href: string;
};

// Single-page site for now -- every link is an in-page anchor. Once
// /services, /areas, /reviews etc. become real routed pages, swap these
// hrefs for router paths (see qamira-web's navigation.ts for that pattern).
export const primaryNav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export const footerNav = {
  services: [
    { label: "Junk & Rubbish Removal", href: "#services" },
    { label: "House & Office Moving", href: "#services" },
    { label: "Packing Assistance", href: "#services" },
    { label: "Same-Day Service", href: "#services" },
  ],
  company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "Get a Quote", href: "#quote" },
  ],
} satisfies Record<string, NavItem[]>;
