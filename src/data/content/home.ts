// Homepage copy. "JDcorp" and every suburb/number in brackets is a
// placeholder pending the client's real business name, ABN, and confirmed
// service area (see [[project-qamira-status]] roadmap doc). Swapping the
// name is a find-and-replace in this file and data/site.ts -- nothing else
// needs to change.

export const hero = {
  kicker: "Junk Removal & House Moving",
  heading: "Got junk? Got a move? We'll sort it — today if you need it.",
  lede: "One local crew for the rubbish you can't put out with the bins and the boxes you're taking with you. Upfront pricing, same-day slots, and we donate or recycle before anything goes to landfill.",
  primaryCta: { label: "Get a Free Quote", href: "#quote" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

export const trustStats = [
  { value: "Same Day", label: "Slots available, 7 days a week" },
  { value: "100%", label: "Licensed & insured crews" },
  { value: "Donate First", label: "Recycled or donated before landfill" },
  { value: "Upfront", label: "Flat-rate quotes, no surprise fees" },
];

export const services = [
  {
    title: "Junk & Rubbish Removal",
    body: "Old furniture, appliances, garage clear-outs, renovation debris — anything you can't fit in the council bin. Point at the pile, we quote it on the spot and take it away same visit.",
    bullets: ["Furniture & appliance removal", "Garage, shed & yard clear-outs", "Renovation & deceased-estate cleanups"],
    image: "serviceJunk",
    cta: { label: "Get a junk removal quote", href: "#quote" },
  },
  {
    title: "House & Office Moving",
    body: "Local relocations handled end to end — our crew loads, drives, and unloads, so nothing gets left behind or damaged in transit.",
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
    body: "Junk gets sorted — donated or recycled first, landfill last. Moves get loaded, driven, and unloaded with care.",
  },
];

export const beforeAfter = {
  eyebrow: "Where it actually goes",
  heading: "We sort it before we dump it.",
  body: "Most junk-removal outfits take everything straight to landfill. We separate what can be donated or recycled first — furniture to charity, metal and e-waste to recyclers — so only the genuine rubbish ends up in a skip.",
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
    body: "Landfill is the last resort, not the first. Reusable items are diverted to charity and recycling wherever possible.",
  },
];

// Placeholder -- confirm the exact suburb/region list with the client
// before launch (see roadmap Phase 1). Do not publish these as real
// coverage without checking.
export const serviceAreas = {
  eyebrow: "Where we work",
  heading: "Servicing [Suburb 1], [Suburb 2] and greater [City]",
  body: "Based in [Suburb], covering [City] and the surrounding suburbs. Not sure if you're in range? Ask when you call — most local jobs are.",
  suburbs: ["[Suburb 1]", "[Suburb 2]", "[Suburb 3]", "[Suburb 4]", "[Suburb 5]", "[Suburb 6]", "[Suburb 7]", "[Suburb 8]"],
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
  body: "Fill in the form or call directly. Same-day slots fill up fast, so the earlier in the day you reach out, the more likely we can fit you in today.",
  formNote: "This form is a working draft of the layout — hooking it up to send real quote requests (email/SMS alert, same pattern as qamiraconsulting.com's contact form) is the next build step.",
};
