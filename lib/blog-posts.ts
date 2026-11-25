export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  publishedDate: string
  updatedDate: string
  heroImage: string
  heroImageAlt: string
  readTime: string
}

// Add future posts here. The listing page and sitemap are generated from
// this array, so a new entry is all that's needed to publish another post.
export const blogPosts: BlogPostMeta[] = [
{
  "slug": "moving-a-sorn-untaxed-or-no-mot-car",
  "title": "Moving a SORN, Untaxed or No-MOT Car: A UK Transport Guide",
  "excerpt": "Plan transport for a SORN, untaxed or no-MOT car with official guidance, status checks, paperwork and collection arrangements.",
  "metaDescription": "Moving a SORN, untaxed or no-MOT car? Check the official rules, compare transport options and prepare the paperwork for collection and delivery.",
  "publishedDate": "2026-11-25",
  "updatedDate": "2026-11-25",
  "heroImage": "/images/moving-a-sorn-untaxed-car-featured.webp",
  "heroImageAlt": "Off-road classic car being loaded onto a vehicle transporter",
  "readTime": "10 min read"
},
{
  "slug": "12v-vs-24v-jump-start",
  "title": "12V vs 24V Jump Starts: Cars, Vans and Commercial Vehicles Explained",
  "excerpt": "Understand 12V and 24V systems, confirm your vehicle’s voltage and prepare the details needed for suitable jump start assistance or recovery.",
  "metaDescription": "Is your vehicle 12V or 24V? How to check, why the wrong jump start can cause damage, which vehicles usually use each, and when recovery is safer.",
  "publishedDate": "2026-11-24",
  "updatedDate": "2026-11-24",
  "heroImage": "/images/12v-vs-24v-jump-start-featured.webp",
  "heroImageAlt": "Technician connecting a jump pack to a van battery",
  "readTime": "9 min read"
},
{
  "slug": "mini-digger-transport-guide",
  "title": "Transporting a Mini Digger or Excavator: What Plant Haulage Involves (Planning Checklist)",
  "excerpt": "Plan a mini digger move with machine details, site access checks, collection preparation, loading and delivery arrangements.",
  "metaDescription": "Moving a mini digger or excavator? The details a haulier needs, trailer and access checks, preparing the machine and what happens on collection day.",
  "publishedDate": "2026-11-23",
  "updatedDate": "2026-11-23",
  "heroImage": "/images/mini-digger-transport-featured.webp",
  "heroImageAlt": "Mini excavator chained onto a plant transport truck at a building site",
  "readTime": "8 min read"
},
{
  "slug": "rtc-recovery-vs-accident-recovery",
  "title": "RTC Recovery, Accident Recovery or Specialist Recovery? A Clear Comparison",
  "excerpt": "Clear definitions, a side-by-side comparison, the details a recovery operator needs, and the usual sequence from the scene to the destination.",
  "metaDescription": "RTC recovery, accident recovery and specialist accident recovery compared: what each covers, when you need it, what to tell the operator and what happens next.",
  "publishedDate": "2026-11-22",
  "updatedDate": "2026-11-23",
  "heroImage": "/images/rtc-vs-accident-recovery-featured.webp",
  "heroImageAlt": "Recovery truck loading an accident-damaged car at the roadside with cones in place",
  "readTime": "8 min read"
},
  {
    slug: "broken-down-no-breakdown-cover",
    title: "Broken Down With No Breakdown Cover? A Clear Plan for What to Do Next",
    excerpt:
      "Get safe, check whether you already have cover, choose roadside help or recovery, and prepare the details the operator needs.",
    metaDescription:
      "Broken down without breakdown cover? A step-by-step plan: get safe, check for hidden cover, choose roadside help or recovery, and what to tell the operator.",
    publishedDate: "2026-11-21",
    updatedDate: "2026-11-23",
    heroImage: "/images/broken-down-no-breakdown-cover-featured.webp",
    heroImageAlt:
      "Driver standing safely on a verge beside a broken-down car with hazard lights on, calling for help",
    readTime: "9 min read",
  },
  {
    slug: "car-stuck-in-mud-or-a-ditch",
    title: "Car Stuck in Mud or a Ditch? A Calm Guide to Safe Winch-Out Recovery",
    excerpt:
      "A calm guide to staying safe, describing the ground and access, and understanding what a professional winch-out may involve.",
    metaDescription:
      "What to do if your car is stuck in mud, a ditch or on a soft verge: stay safe, what to tell the operator, and how winch-out recovery usually works.",
    publishedDate: "2026-11-20",
    updatedDate: "2026-11-20",
    heroImage: "/images/car-stuck-mud-ditch-featured.webp",
    heroImageAlt: "A car stuck in soft mud beside a UK rural lane with a recovery truck on firm ground",
    readTime: "10 min read",
  },
  {
    slug: "moving-a-non-running-vehicle-uk",
    title: "Moving a Non-Running Vehicle Across the UK: A Planning Checklist",
    excerpt:
      "Plan non-running vehicle transport with checks for vehicle condition, access, keys, paperwork, collection and delivery.",
    metaDescription:
      "A planning checklist for transporting a non-running vehicle across the UK: what to tell the operator, access, keys, paperwork, and how collection and delivery usually work.",
    publishedDate: "2026-11-20",
    updatedDate: "2026-11-20",
    heroImage: "/images/non-running-vehicle-uk-featured.webp",
    heroImageAlt:
      "A recovery transporter carrying a car on a quiet UK road",
    readTime: "11 min read",
  },
  {
    slug: "what-to-do-if-your-car-breaks-down-on-a-motorway",
    title: "What to Do If Your Car Breaks Down on a Motorway in the UK",
    excerpt:
      "A motorway breakdown puts you beside fast-moving traffic with little warning. Clear steps for hard shoulders, smart motorways and live lanes, plus who to call.",
    metaDescription:
      "What to do if your car breaks down on a motorway in the UK: go left, get safe, then call for help. Clear steps for hard shoulders and smart motorways.",
    publishedDate: "2026-10-29",
    updatedDate: "2026-10-29",
    heroImage: "/images/motorway-breakdown-emergency-area-sos-phone.webp",
    heroImageAlt:
      "A driver uses a motorway SOS emergency telephone beside a car stopped in an emergency area with orange surfacing",
    readTime: "9 min read",
  },
]

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
