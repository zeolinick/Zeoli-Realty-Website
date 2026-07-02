export type Community = {
  slug: string;
  name: string;
  county: string;
  positioning: string;
  description: string[];
  highlights: string[];
  goodFor: string;
};

export const communities: Community[] = [
  {
    slug: "rochester",
    name: "Rochester",
    county: "Oakland",
    positioning: "A storybook downtown with room to grow.",
    description: [
      "Rochester pairs one of Metro Detroit's most beloved Main Streets — holiday lights, independent shops, restaurants that fill up on a Tuesday — with quiet, established neighborhoods just a few blocks off the bustle.",
      "Buyers come for the walkability and the Paint Creek Trail; they stay for Rochester Community Schools and a downtown that keeps getting better. Inventory moves quickly here, and homes that are prepared and launched well routinely draw multiple offers.",
    ],
    highlights: [
      "Walkable historic downtown on Main Street",
      "Paint Creek Trail & Municipal Park",
      "Rochester Community Schools",
      "The Big, Bright Light Show each winter",
    ],
    goodFor:
      "Buyers who want small-town character with first-rate schools and a real downtown.",
  },
  {
    slug: "rochester-hills",
    name: "Rochester Hills",
    county: "Oakland",
    positioning: "Established neighborhoods, parks, and top-tier schools.",
    description: [
      "Rochester Hills is one of Oakland County's most consistently in-demand family markets — a broad mix of colonials, ranches, and newer builds across leafy subdivisions, minutes from both downtown Rochester and the M-59 corridor.",
      "With Stoney Creek Metropark at its edge, Oakland University in its backyard, and a deep bench of well-kept neighborhoods, homes here reward careful pricing and strong presentation.",
    ],
    highlights: [
      "Consistently ranked among Michigan's best places to live",
      "Stoney Creek Metropark & Bloomer Park",
      "Rochester Community Schools",
      "Easy access to M-59 and I-75",
    ],
    goodFor:
      "Families trading up who want space, parks, and schools without leaving Oakland County.",
  },
  {
    slug: "royal-oak",
    name: "Royal Oak",
    county: "Oakland",
    positioning: "Metro Detroit's liveliest downtown — and its bungalows.",
    description: [
      "Royal Oak runs on energy: a downtown packed with restaurants, bars, and the Detroit Zoo on its doorstep, ringed by blocks of charming 1920s bungalows, updated ranches, and a new generation of condos and townhomes.",
      "It's one of the region's most liquid markets — first-time buyers, young professionals, and downsizers all compete for the same walkable blocks, which makes launch strategy and negotiation matter more here, not less.",
    ],
    highlights: [
      "Downtown dining, nightlife & farmers market",
      "Detroit Zoo & Normandy Oaks",
      "Classic bungalow streets + new construction condos",
      "Quick commutes via I-696 and Woodward",
    ],
    goodFor:
      "First-time buyers and professionals who want walkable city energy in the suburbs.",
  },
  {
    slug: "troy",
    name: "Troy",
    county: "Oakland",
    positioning: "Top-rated schools and a true corporate crossroads.",
    description: [
      "Troy is Oakland County's economic engine — home to the Somerset Collection, a deep corporate corridor, and one of the most sought-after school districts in the state. The housing stock spans mid-century ranches to executive colonials and new construction.",
      "Demand from relocating professionals and multigenerational families keeps this market competitive year-round, and well-launched listings routinely outperform.",
    ],
    highlights: [
      "Troy School District — among Michigan's best",
      "Somerset Collection & Big Beaver corporate corridor",
      "Diverse, international community",
      "Central access to I-75 and M-59",
    ],
    goodFor:
      "Buyers prioritizing schools and commute — and sellers sitting on serious demand.",
  },
  {
    slug: "shelby-township",
    name: "Shelby Township",
    county: "Macomb",
    positioning: "Newer builds and metropark living in Macomb County.",
    description: [
      "Shelby Township offers some of the strongest value in the region: newer construction, generous lots, and split-levels and colonials that deliver more square footage per dollar than their Oakland County neighbors.",
      "With Stony Creek Metropark on its border and the Utica school system at its core, Shelby draws steady demand from growing families and right-sizers alike.",
    ],
    highlights: [
      "Stony Creek Metropark trails, beaches & golf",
      "Utica Community Schools",
      "Strong new-construction pipeline",
      "M-53 access for easy north-south commutes",
    ],
    goodFor:
      "Growing families who want newer homes and more space for the money.",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    county: "Oakland",
    positioning: "Walkable luxury at the center of Oakland County.",
    description: [
      "Birmingham is Metro Detroit's signature luxury address: a genuinely walkable downtown of boutiques, galleries, and restaurants surrounded by estate streets, storied architecture, and some of the highest property values in the state.",
      "This is a market where preparation, presentation, and discretion drive results — and where our launch process is built to concentrate the attention premium properties deserve.",
    ],
    highlights: [
      "Downtown shopping, dining & the Birmingham 8",
      "Quarton Lake & Shain Park estate streets",
      "Birmingham Public Schools",
      "Enduring value — Michigan's benchmark luxury market",
    ],
    goodFor:
      "Luxury buyers and sellers who expect a considered, professional process.",
  },
  {
    slug: "bloomfield-hills",
    name: "Bloomfield Hills",
    county: "Oakland",
    positioning: "Estate properties on Michigan's most prestigious streets.",
    description: [
      "Bloomfield Hills is defined by privacy: wooded lots, winding lanes, lakes, and estates — including the landmark Cranbrook campus. It's consistently among the most exclusive zip codes in the Midwest.",
      "Selling here is a different discipline. Pricing demands real comparable judgment, marketing demands magazine-grade production, and buyers arrive well-advised. We built our listing process for exactly this.",
    ],
    highlights: [
      "Cranbrook Schools & campus",
      "Private wooded and lakefront estates",
      "Bloomfield Hills Schools",
      "Minutes from Birmingham's downtown",
    ],
    goodFor:
      "Estate sellers and discerning buyers who value discretion and production quality.",
  },
  {
    slug: "macomb",
    name: "Macomb Township",
    county: "Macomb",
    positioning: "One of Michigan's fastest-growing family communities.",
    description: [
      "Macomb Township has spent two decades as one of the state's growth stories — subdivision after subdivision of newer colonials and ranches, built around parks, ballfields, and the Macomb Corners corridor.",
      "It's a value-driven, family-first market with steady new construction. Resale sellers here compete with builders, which makes professional staging, photography, and launch timing decisive.",
    ],
    highlights: [
      "Newer construction & modern floor plans",
      "Chippewa Valley & Utica school options",
      "Macomb Corners Park & growing retail",
      "Strong value per square foot",
    ],
    goodFor:
      "Families who want a newer home and room to grow at a sensible price.",
  },
  {
    slug: "berkley",
    name: "Berkley",
    county: "Oakland",
    positioning: "Bungalow charm with a tight-knit, walkable feel.",
    description: [
      "Berkley is the neighborly middle of the Woodward corridor — tree-lined blocks of well-kept bungalows and ranches, a growing strip of shops and restaurants on Twelve Mile and Coolidge, and a genuine community calendar (the Berkley Art Bash, the Holiday Lights Parade).",
      "It's a favorite first move for buyers priced out of Royal Oak and Birmingham — which keeps demand steady and days-on-market short for well-presented homes.",
    ],
    highlights: [
      "Walkable downtown strips on Twelve Mile & Coolidge",
      "Berkley School District",
      "Classic bungalows & updated ranches",
      "Minutes from Royal Oak, Ferndale & Birmingham",
    ],
    goodFor:
      "First-time buyers and young families who want charm and community.",
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    county: "Oakland",
    positioning: "Birmingham schools, village calm.",
    description: [
      "The Village of Beverly Hills offers a quieter path into the Birmingham orbit: winding, wooded streets, mid-century homes with real character, and Beverly Park at its heart — all within Birmingham Public Schools.",
      "Inventory is limited and loyalty is high; homes here often trade on preparation and positioning rather than volume marketing.",
    ],
    highlights: [
      "Birmingham Public Schools",
      "Beverly Park & the Rouge trail corridor",
      "Wooded lots & mid-century architecture",
      "Village-scale quiet next to downtown Birmingham",
    ],
    goodFor:
      "Buyers who want Birmingham schools and privacy without the downtown premium.",
  },
  {
    slug: "franklin",
    name: "Franklin",
    county: "Oakland",
    positioning: "“The town that time forgot” — estates included.",
    description: [
      "Franklin Village is one of Metro Detroit's most distinctive addresses: a preserved 19th-century village center, the beloved Franklin Cider Mill, and acreage estates tucked along wooded lanes minutes from Telegraph Road.",
      "Properties here are individual by nature — no two alike — so pricing and marketing demand judgment, not formulas. That's the kind of listing work we like best.",
    ],
    highlights: [
      "Historic village center & Franklin Cider Mill",
      "Acreage & estate properties",
      "Birmingham Public Schools (in part)",
      "Minutes from Birmingham & Bloomfield",
    ],
    goodFor:
      "Buyers seeking character and land; sellers of one-of-a-kind properties.",
  },
];

export function getCommunity(slug: string) {
  return communities.find((c) => c.slug === slug);
}
