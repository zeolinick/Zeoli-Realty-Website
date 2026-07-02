export type Testimonial = {
  quote: string;
  attribution: string;
  detail: string;
};

// Featured set — from the 2026 listing presentation.
export const featuredTestimonials: Testimonial[] = [
  {
    quote:
      "Multiple offers before the first weekend was over. The whole launch was handled like a real event — we sold above asking.",
    attribution: "The Sellers",
    detail: "Macomb County",
  },
  {
    quote:
      "Every week we got a real update — and they actually called the agents who toured. We always knew where we stood.",
    attribution: "Repeat Client",
    detail: "Oakland County",
  },
  {
    quote:
      "We needed a fast sale and they brought a serious cash buyer in days. Professional, honest, a true team start to finish.",
    attribution: "Investor Client",
    detail: "Wayne County",
  },
];

// Public reviews — Zillow, Google, Facebook, Homes.com.
export const reviews: Testimonial[] = [
  {
    quote:
      "Nick is an amazing real estate agent. He helped us sell our house quickly. He was in constant communication with us and was very helpful and informative throughout the whole process.",
    attribution: "Seller",
    detail: "Metro Detroit",
  },
  {
    quote:
      "The Zeoli team is very professional and knowledgeable. They assisted me throughout the entire buying process. The administrative support I received was above and beyond my expectations.",
    attribution: "Buyer",
    detail: "Google review",
  },
  {
    quote: "She did a great job selling my house within a week.",
    attribution: "Seller",
    detail: "Warren",
  },
  {
    quote:
      "She worked so hard to help us find the right home for our family. She researched every prospective property, was easy to get ahold of, and was friendly, professional, and knowledgeable throughout.",
    attribution: "First-time Buyers",
    detail: "Google review",
  },
  {
    quote:
      "He was a pleasure to work with and was excellent with everything from start to finish. He found us a dependable buyer quickly and the selling process went smoothly and efficiently from there.",
    attribution: "Seller",
    detail: "Google review",
  },
  {
    quote:
      "He truly goes above and beyond for his clients. He takes the time going over all aspects of the buy-sell process.",
    attribution: "Client",
    detail: "LinkedIn recommendation",
  },
];
