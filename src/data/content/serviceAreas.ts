// Illustrative Melbourne-wide coverage (2026-08-10) -- real suburb/region
// names, used as realistic placeholder data for the searchable suburb
// finder built after benchmarking removalistsconnect.com.au/#suburbs (see
// the "Suburb Coverage — Visualization Recommendation" artifact). This is
// NOT Blue Line Removals' confirmed coverage list or radius -- swap for
// the client's real regions/suburbs before launch.
export const serviceAreasIntro = {
  eyebrow: "Where we work",
  heading: "Servicing Melbourne, wall to wall.",
  body: "Search your suburb below, or browse by region. Not listed? Ask us anyway — most Melbourne postcodes are a yes, and we're adding more all the time.",
};

export const serviceAreaRegions: Record<string, string[]> = {
  "Inner Melbourne": [
    "Melbourne CBD",
    "Carlton",
    "Fitzroy",
    "Fitzroy North",
    "Collingwood",
    "Abbotsford",
    "Richmond",
    "Cremorne",
    "South Yarra",
    "Prahran",
    "Windsor",
    "St Kilda",
    "St Kilda East",
    "Albert Park",
    "Southbank",
    "Docklands",
    "East Melbourne",
    "North Melbourne",
    "Parkville",
    "South Melbourne",
  ],
  Bayside: ["Brighton", "Brighton East", "Sandringham", "Hampton", "Beaumaris", "Black Rock", "Elwood", "Elsternwick", "Gardenvale", "Mentone", "Cheltenham"],
  "Eastern Suburbs": [
    "Camberwell",
    "Hawthorn",
    "Hawthorn East",
    "Kew",
    "Kew East",
    "Balwyn",
    "Balwyn North",
    "Box Hill",
    "Surrey Hills",
    "Canterbury",
    "Glen Iris",
    "Malvern",
    "Malvern East",
    "Toorak",
    "Armadale",
  ],
  "Outer East": ["Ringwood", "Croydon", "Bayswater", "Boronia", "Ferntree Gully", "Rowville", "Knoxfield", "Mount Evelyn", "Mooroolbark", "Lilydale"],
  "South East": [
    "Caulfield",
    "Carnegie",
    "Murrumbeena",
    "Oakleigh",
    "Clayton",
    "Mulgrave",
    "Springvale",
    "Noble Park",
    "Dandenong",
    "Keysborough",
    "Cranbourne",
    "Berwick",
    "Narre Warren",
    "Pakenham",
  ],
  "Western Suburbs": ["Footscray", "Yarraville", "Seddon", "Williamstown", "Newport", "Altona", "Point Cook", "Werribee", "Sunshine", "Braybrook", "Maidstone", "West Melbourne"],
  "Northern Suburbs": ["Brunswick", "Brunswick East", "Coburg", "Preston", "Reservoir", "Northcote", "Thornbury", "Fairfield", "Pascoe Vale", "Essendon", "Moonee Ponds", "Airport West"],
  "North East / Outer North": ["Heidelberg", "Ivanhoe", "Bundoora", "Greensborough", "Eltham", "Doncaster", "Templestowe", "Mill Park", "South Morang", "Epping"],
};

export const serviceAreaTotalCount = Object.values(serviceAreaRegions).reduce((sum, list) => sum + list.length, 0);
