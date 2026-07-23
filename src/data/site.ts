// PLACEHOLDER BRAND -- "JDcorp" is a stand-in name pending the client's final
// business name/ABN. Every occurrence of it lives in this file and
// content/home.ts, so swapping the real name later is a find-and-replace,
// not a rebuild.
export const site = {
  name: "JDcorp",
  fullName: "JDcorp Junk Removal & Moving",
  tagline: "Aussie junk removal and house moving, sorted same day.",
  description:
    "JDcorp clears the junk you can't put out with the bins and moves the stuff you're keeping -- house and office relocations, full-service packing, and same-day rubbish removal across [Service Region], Australia.",
  phone: "1300 000 000",
  phoneHref: "tel:1300000000",
  email: "hello@jdcorp.com.au",
  url: "https://www.jdcorp.com.au",
  abnNote: "ABN XX XXX XXX XXX", // fill in once the client's ABN is confirmed
  serviceRegion: "Greater [City], [State]",
} as const;
