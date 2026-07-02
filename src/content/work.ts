export type WorkStudy = {
  number: string;
  eyebrow: string;
  title: { before: string; accent: string; after: string };
  blurb: string;
  services: string[];
  lead: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

export const workIntro = {
  eyebrow: "Our work",
  headline: { before: "Every listing, treated like a ", accent: "launch", after: "." },
  intro:
    "Three recent productions — an estate, a family ranch, and a new build — shot, staged, and launched by our in-house media team. This is the standard every Zeoli Realty listing gets.",
};

export const workStudies: WorkStudy[] = [
  {
    number: "01",
    eyebrow: "The estate",
    title: { before: "A landmark home, given a ", accent: "cinematic", after: " debut." },
    blurb:
      "Twilight exteriors, magazine-grade interiors, and a coming-soon sequence that had buyers waiting before showings opened. Marble, iron, and light — photographed the way it deserves.",
    services: ["Twilight photography", "Cinematic video", "3D tour", "Signature open house"],
    lead: {
      src: "/images/work/estate-twilight.jpg",
      alt: "Modern stone estate at twilight",
    },
    gallery: [
      { src: "/images/work/estate-foyer.jpg", alt: "Two-story foyer with chandelier and iron staircase" },
      { src: "/images/work/estate-greatroom.jpg", alt: "Great room with ribbon fireplace and marble floors" },
      { src: "/images/work/estate-kitchen.jpg", alt: "Kitchen with waterfall marble island" },
      { src: "/images/work/estate-loft.jpg", alt: "Upper loft with iron railing" },
      { src: "/images/work/estate-bedroom.jpg", alt: "Primary suite with balcony doors" },
    ],
  },
  {
    number: "02",
    eyebrow: "The family ranch",
    title: { before: "An everyday home, launched ", accent: "properly", after: "." },
    blurb:
      "The launch isn't just for the estates. A three-bed ranch gets the same twilight shoot, aerial coverage, and staged interiors — because a family's biggest asset deserves the full production.",
    services: ["Twilight photography", "Drone aerials", "Staging", "One-week launch"],
    lead: {
      src: "/images/home-ranch.jpg",
      alt: "Classic ranch home at twilight with warm-lit windows",
    },
    gallery: [
      { src: "/images/work/ranch-aerial.jpg", alt: "Aerial view of the ranch and its neighborhood" },
      { src: "/images/work/staged-living.jpg", alt: "Staged living room with warm wood floors" },
      { src: "/images/work/ranch-dining.jpg", alt: "Kitchen and dining space" },
      { src: "/images/work/ranch-kitchen.jpg", alt: "Kitchen with stainless appliances" },
      { src: "/images/work/ranch-bedroom.jpg", alt: "Staged bedroom" },
    ],
  },
  {
    number: "03",
    eyebrow: "The new build",
    title: { before: "New construction, sold before the ", accent: "snow melted", after: "." },
    blurb:
      "Working alongside the builder, we brought a brand-new craftsman to market in the middle of winter — pink-sky twilight exteriors, finished-basement lifestyle shots, and buyers who could see themselves home.",
    services: ["Builder consulting", "Twilight photography", "Virtual staging", "Zillow Showcase"],
    lead: {
      src: "/images/work/craftsman-twilight.jpg",
      alt: "New-build craftsman home at twilight in the snow",
    },
    gallery: [
      { src: "/images/work/newbuild-exterior2.jpg", alt: "Craftsman exterior in fresh snow" },
      { src: "/images/work/newbuild-entry.jpg", alt: "Entry stair with modern railing" },
      { src: "/images/work/newbuild-kitchen.jpg", alt: "White kitchen with island pendants" },
      { src: "/images/work/newbuild-island.jpg", alt: "Kitchen island with granite counters" },
      { src: "/images/work/newbuild-basement.jpg", alt: "Finished basement lounge with black ceiling" },
    ],
  },
];
