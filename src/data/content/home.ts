// Homepage copy for Blue Line Removals (brand confirmed 2026-07-23).
// Focus is deliberately moving-first per the client's direction -- junk
// removal and packing are framed as what happens alongside a move, not a
// co-equal separate business. Suburb list in serviceAreas below is an
// illustrative Melbourne-wide spread, not a confirmed coverage list.

export const hero = {
  kicker: "Melbourne Home & Office Removals",
  heading: "Moving house? We'll get you there — and clear out what's not coming with you.",
  lede: "Blue Line Removals loads, drives, and unloads your move end to end, then takes what you're leaving behind straight to donation or recycling — not landfill. Upfront pricing, same-day slots where you need them.",
  primaryCta: { label: "Get a Free Moving Quote", href: "#quote" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

// New-customer / seasonal discount hook -- shown as a badge in the Hero
// and referenced again near the quote form. Update or retire seasonally.
export const promo = {
  badge: "New Customer Offer",
  heading: "30% off your first move",
  body: "Book your first move or junk removal with Blue Line Removals and save 30% off the flat-rate quote — mention it when you call or note it on the form below.",
};

export const trustStats = [
  { value: "Same Day", label: "Slots available, 7 days a week" },
  { value: "100%", label: "Licensed & insured crews" },
  { value: "Donate First", label: "Recycled or donated before landfill" },
  { value: "30% Off", label: "Your first move — new customer offer" },
];

export const services = [
  {
    title: "House & Office Moving",
    body: "Local Melbourne relocations handled end to end — our crew loads, drives, and unloads, so nothing gets left behind or damaged in transit.",
    bullets: ["Local house & apartment moves", "Small office & commercial relocations", "Furniture disassembly & reassembly"],
    image: "serviceMoving",
    cta: { label: "Get a moving quote", href: "#quote" },
  },
  {
    title: "Packing Assistance",
    body: "Don't want to spend your weekend wrapping glassware? We pack a room, a kitchen, or the whole house — with materials included.",
    bullets: ["Full or partial packing service", "Packing materials supplied", "Careful handling of fragile items"],
    image: "servicePacking",
    cta: { label: "Get a packing quote", href: "#quote" },
  },
  {
    title: "Junk & Rubbish Removal",
    body: "Old furniture, appliances, garage clear-outs, renovation debris — anything you can't fit in the council bin. Point at the pile, we quote it on the spot and take it away same visit.",
    bullets: ["Furniture & appliance removal", "Garage, shed & yard clear-outs", "Renovation & deceased-estate cleanups"],
    image: "serviceJunk",
    cta: { label: "Get a junk removal quote", href: "#quote" },
  },
];

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

// Illustrative Melbourne-wide spread (CBD + north/south/east/west), not a
// confirmed coverage list -- check the exact suburb list and any coverage
// radius with the client before launch (see roadmap Phase 1).
export const serviceAreas = {
  eyebrow: "Where we work",
  heading: "Servicing Melbourne, wall to wall.",
  body: "Based in Melbourne and covering suburbs right across the metro area. Not sure if you're in range? Ask when you call — most Melbourne postcodes are a yes.",
  suburbs: ["Melbourne CBD", "St Kilda", "Richmond", "Brunswick", "Footscray", "Dandenong", "Frankston", "Werribee"],
};

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

export const quoteCta = {
  eyebrow: "Get a quote",
  heading: "Tell us what needs to go — or where it needs to go.",
  body: "Fill in the form or call directly. First move or first junk pickup with us? Ask about the 30% new-customer offer. Same-day slots fill up fast, so the earlier in the day you reach out, the more likely we can fit you in today.",
  formNote: "This form is a working draft of the layout — hooking it up to send real quote requests (email/SMS alert, same pattern as qamiraconsulting.com's contact form) is the next build step.",
};
