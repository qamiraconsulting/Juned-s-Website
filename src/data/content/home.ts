// Homepage copy for Blue Line Removals (brand confirmed 2026-07-23).
// 2026-08-10 pass: hero/trustStats/servicesOverview rewritten to match the
// client-supplied sample site pages verbatim (see BLR Sample Site-Lovejeet
// screenshots). Client confirmed the "8+ years / 11,000+ moves / 5,000+
// customers / 100% insured" stats below are real and OK to publish as-is.
// The full 7-service catalog (used on /services and /services/:slug) now
// lives in data/content/services.ts, not here.
import { site } from "@/data/site";

export const hero = {
  heading: "Beyond Boxes, We Move Memories.",
  headingAccent: "Memories.",
  lede: "Moving & Junk Removal Services Across Australia.",
  primaryCta: { label: "Get a Free Quote", href: "/quote" },
  callCta: { label: "Call Us Now", href: site.phoneHref },
  callbackCta: { label: "Request Callback" }, // opens the lightweight CallbackModal, not a route -- see lib/callbackModal.tsx
};

// New-customer / seasonal discount hook, carried over from the pre-sample
// build (2026-07-23 decision). Not part of the sample's hero -- surfaced
// instead on the Quote page so it isn't lost. Update or retire seasonally.
export const promo = {
  badge: "New Customer Offer",
  heading: "30% off your first move",
  body: "Book your first move or junk removal with Blue Line Removals and save 30% off the flat-rate quote — mention it when you call or note it on the form.",
};

export const trustStats = [
  { icon: "award", value: "8+", label: "Years of Experience" },
  { icon: "truck", value: "11,000+", label: "Successful Moves" },
  { icon: "users", value: "5,000+", label: "Happy Customers" },
  { icon: "shield", value: "100%", label: "Fully Insured" },
] as const;

// Homepage "Moving & Junk Removal Made Simple" overview -- two cards
// linking into the full catalog on /services. Full per-service detail
// pages are in data/content/services.ts.
export const servicesOverview = {
  eyebrow: "Our Services",
  heading: "Moving & Junk Removal Made Simple",
  headingAccent: "Junk Removal",
  items: [
    {
      title: "Moving Services",
      body: "From small homes to big moves, we handle it all with care.",
      icon: "truck",
      href: "/services",
    },
    {
      title: "Junk Removal",
      titleAccent: true,
      body: "Fast, reliable removal of unwanted items.",
      subheading: "Junk Gone, Space Won.",
      icon: "trash",
      href: "/services/junk-removal",
    },
  ],
};

export const howItWorks = [
  {
    step: "01",
    title: "Tell us what's going on",
    body: "Call, text a few photos, or fill in the quote form. Junk pile, a whole house move, or both — either way you'll get a straight answer, not a guess.",
  },
  {
    step: "02",
    title: "Get a flat-rate quote",
    body: "No call-out fee to find out the price. We quote by the job, not the hour, so there's no surprise number at the end.",
  },
  {
    step: "03",
    title: "Lock in a time",
    body: "Same-day slots most days, or book ahead for moving day. We turn up when we say we will.",
  },
  {
    step: "04",
    title: "We do the heavy lifting",
    body: "Moves get loaded, driven, and unloaded with care. Anything you're not taking gets sorted — donated or recycled first, landfill last.",
  },
];

export const beforeAfter = {
  eyebrow: "Kind to Melbourne, not just your garage",
  heading: "We sort it before we dump it — nature doesn't need more landfill.",
  body: "Most junk-removal outfits take everything straight to landfill. Blue Line Removals separates what can be donated or recycled first — furniture to charity, metal and e-waste to recyclers — because protecting the environment isn't an afterthought here, it's how every job is run.",
  beforeLabel: "Before — the job we get called for",
  afterLabel: "After — cleared, sorted, done",
};

export const whyUs = [
  {
    title: "Licensed & Insured",
    body: "Every job is covered — public liability and goods-in-transit insurance, so your property (and ours) is protected.",
  },
  {
    title: "Same-Day Availability",
    body: "Most jobs can be booked and cleared the same day. If it's urgent, say so when you call.",
  },
  {
    title: "Upfront, Flat-Rate Pricing",
    body: "You get a price before we start, not an hourly meter running while we work. What we quote is what you pay.",
  },
  {
    title: "Donate & Recycle First",
    body: "Landfill is the last resort, never the first. We're committed to keeping usable furniture and recyclable materials out of it — reused, donated, or recycled wherever Melbourne's facilities allow.",
  },
];

// Placeholder layout only -- JDcorp hasn't taken its first job yet, so
// there are no real reviews to show. Replace every card with an actual
// Google review (and turn on the review-request flow from the roadmap)
// once jobs start coming in. Do not ship this section with invented quotes
// attributed to real-looking names.
export const reviews = {
  eyebrow: "Reviews",
  heading: "This is where your Google reviews will go",
  body: "This section is built and ready — as soon as the first few jobs are done, swap these placeholders for real reviews (star rating + quote + first name is plenty).",
  placeholders: [
    "Sample review slot — swap for a real 5-star Google review after your first completed job.",
    "Sample review slot — swap for a real 5-star Google review after your first completed job.",
    "Sample review slot — swap for a real 5-star Google review after your first completed job.",
  ],
};

// Homepage's closing section -- the full quote form now lives on its own
// page (/quote, see pages/Quote.tsx), so this is a short CTA banner rather
// than an embedded form.
export const quoteCta = {
  eyebrow: "Get a quote",
  heading: "Tell us what needs to go — or where it needs to go.",
  body: "Get a free, no-obligation quote in minutes. First move or first junk pickup with us? Ask about the 30% new-customer offer. Same-day slots fill up fast, so the earlier in the day you reach out, the more likely we can fit you in today.",
  cta: { label: "Get My Free Quote", href: "/quote" },
};
