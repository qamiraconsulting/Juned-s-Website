// TEMPORARY STOCK PHOTOS -- sourced from Unsplash (free to use) as
// placeholders only. Swap every one of these for the client's own truck,
// team, and job photos before launch -- real photos matter a lot for trust
// in this category (junk.com.au and 1800gotjunk both lead with real crews).
// Keeping every reference in this one file so replacement is a single pass.
function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  hero: unsplash("photo-1698917414969-feade59e3343", 1800), // mover unloading furniture from a truck
  before: unsplash("photo-1709831917664-804b57448953", 900), // cluttered garage
  after: unsplash("photo-1721395286594-8913b06056eb", 900), // empty, clean room
  serviceJunk: unsplash("photo-1602770318920-7a02839e5c4d", 900), // old sofa beside a bin
  serviceMoving: unsplash("photo-1783473007464-1dbf2ff30dec", 900), // moving truck + person carrying furniture
  servicePacking: unsplash("photo-1580710438850-988a62dee2af", 900), // person beside packed boxes
} as const;
