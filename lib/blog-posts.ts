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
