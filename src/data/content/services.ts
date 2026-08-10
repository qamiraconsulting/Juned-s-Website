// Full 7-service catalog for the /services list page and /services/:slug
// detail pages (2026-08-10, replicated from the client's sample site --
// see BLR Sample Site-Lovejeet screenshots). Only Junk Removal's detail
// copy (headline, checklist, eco callout) came from the sample itself --
// the other six services weren't shown in detail in the screenshots, so
// their detail copy below is drafted in the same voice and flagged here
// for the client to review before launch.
export type Service = {
  slug: string;
  title: string;
  icon: "home" | "building" | "truck" | "trash" | "package" | "warehouse" | "armchair";
  listBody: string;
  listAccent?: string; // orange highlight line shown above listBody (Junk Removal only, per sample)
  ecoFriendly?: boolean;
  category: string;
  headline: string;
  headlineAccent: string; // portion of the headline rendered in orange
  intro: string;
  image: string; // key into data/content/images.ts
  checklist: string[];
  ecoCallout?: { heading: string; body: string };
  ctaHeading: string;
  ctaBody: string;
};

export const services: Service[] = [
  {
    slug: "home-removals",
    title: "Home Removals",
    icon: "home",
    listBody: "We make your home move stress-free and hassle-free.",
    category: "Home Removals",
    headline: "Your Move, Done Right.",
    headlineAccent: "Done Right.",
    intro:
      "From a studio apartment to a full family home, our crew packs, loads, drives, and unloads with care — so nothing gets left behind or damaged in transit.",
    image: "homeRemovals",
    checklist: [
      "Local & suburban moves",
      "Furniture disassembly & reassembly",
      "Careful handling of fragile items",
      "Flexible scheduling, incl. weekends",
      "Experienced, uniformed crews",
      "Free no-obligation quote",
    ],
    ctaHeading: "Ready to Move?",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "office-removals",
    title: "Office Removals",
    icon: "building",
    listBody: "Efficient office moves with minimal downtime.",
    category: "Office Removals",
    headline: "Minimal Downtime, Maximum Care.",
    headlineAccent: "Maximum Care.",
    intro:
      "Desks, IT equipment, filing systems and everything in between — we plan around your business hours so your team is back up and running fast.",
    image: "officeRemovals",
    checklist: [
      "Desk & workstation relocation",
      "IT equipment handling",
      "After-hours & weekend moves",
      "Secure filing & document transport",
      "Minimal business disruption",
      "Free no-obligation quote",
    ],
    ctaHeading: "Planning an Office Move?",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "interstate-removals",
    title: "Interstate Removals",
    icon: "truck",
    listBody: "Reliable moving services across all states and territories.",
    category: "Interstate Removals",
    headline: "Across the Country, Without the Stress.",
    headlineAccent: "Without the Stress.",
    intro:
      "Moving interstate involves more logistics, not more hassle. We plan the route, handle the paperwork, and keep you updated door to door.",
    image: "interstateRemovals",
    checklist: [
      "Coverage across all states & territories",
      "Fixed timelines & tracking",
      "Secure long-haul transport",
      "Full-service or self-pack options",
      "Fully insured in transit",
      "Free no-obligation quote",
    ],
    ctaHeading: "Moving Interstate?",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "junk-removal",
    title: "Junk Removal",
    icon: "trash",
    listBody: "We remove unwanted items quickly and responsibly.",
    listAccent: "Junk Gone, Space Won.",
    ecoFriendly: true,
    category: "Junk Removal",
    headline: "Junk Gone, Space Won.",
    headlineAccent: "Space Won.",
    intro: "From old furniture to general junk, we make it easy to clear out what you don't need.",
    image: "junkRemoval",
    checklist: [
      "Furniture & Appliance Removal",
      "Garden Waste Removal",
      "Garage & Shed Cleanouts",
      "Construction Debris Removal",
      "E-Waste Removal",
      "Donations & Recycling",
    ],
    ecoCallout: {
      heading: "We Care About Our Environment",
      body: "We recycle and donate as much as possible to reduce landfill waste.",
    },
    ctaHeading: "Got Junk? Let's Remove It!",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    icon: "package",
    listBody: "Professional packing services to keep your items safe.",
    category: "Packing & Unpacking",
    headline: "Pack Less, Stress Less.",
    headlineAccent: "Stress Less.",
    intro:
      "Don't want to spend your weekend wrapping glassware? We pack a room, a kitchen, or the whole house — materials included — and unpack on the other end if you need it.",
    image: "packingUnpacking",
    checklist: [
      "Full or partial packing service",
      "Quality packing materials supplied",
      "Careful handling of fragile & valuable items",
      "Labelled boxes for an easy unpack",
      "Unpacking & settling-in service",
      "Free no-obligation quote",
    ],
    ctaHeading: "Need a Hand Packing?",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "storage-solutions",
    title: "Storage Solutions",
    icon: "warehouse",
    listBody: "Secure short and long term storage solutions available.",
    category: "Storage Solutions",
    headline: "Secure Storage, Any Timeframe.",
    headlineAccent: "Any Timeframe.",
    intro:
      "Between homes, renovating, or just need the space? Store your belongings in our secure, monitored facility for as long as you need.",
    image: "storageSolutions",
    checklist: [
      "Short & long-term storage",
      "Clean, secure, monitored facility",
      "Flexible month-to-month terms",
      "Easy access when you need it",
      "Free pickup & delivery available",
      "Free no-obligation quote",
    ],
    ctaHeading: "Need Somewhere to Store It?",
    ctaBody: "Get your free quote today.",
  },
  {
    slug: "specialty-items",
    title: "Specialty Items",
    icon: "armchair",
    listBody: "Piano, pool tables, antique & fragile item specialists.",
    category: "Specialty Items",
    headline: "Handled With Real Care.",
    headlineAccent: "Real Care.",
    intro:
      "Pianos, pool tables, antiques, artwork and other awkward or fragile items need specialist handling — our crew has the equipment and experience to move them safely.",
    image: "specialtyItems",
    checklist: [
      "Piano & pool table relocation",
      "Antique & fine art handling",
      "Custom crating for fragile pieces",
      "Specialist equipment & rigging",
      "Fully insured for high-value items",
      "Free no-obligation quote",
    ],
    ctaHeading: "Got Something Special to Move?",
    ctaBody: "Get your free quote today.",
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}

export const trustIcons = [
  { icon: "badge-dollar", label: "Upfront Pricing" },
  { icon: "clock", label: "On-Time, Every Time" },
  { icon: "users", label: "Friendly Team" },
  { icon: "recycle", label: "Eco-Friendly Disposal" },
] as const;
