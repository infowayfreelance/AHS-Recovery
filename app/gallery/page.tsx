import Link from "next/link"
import { Phone } from "lucide-react"
import GalleryGrid from "@/components/GalleryGrid"
import { siteConfig } from "@/lib/site-config"
import { galleryImages } from "@/lib/gallery"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Vehicle Recovery Gallery | AHS Recovery",
  description:
    "View AHS Recovery's gallery of towing, breakdown assistance, accident recovery, luxury car transport and specialist vehicle recovery across the UK.",
  path: "/gallery",
  ogDescription:
    "Explore AHS Recovery's gallery of towing, breakdown recovery, accident recovery, luxury vehicle transport and specialist vehicle recovery jobs across the UK.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/ahs-recovery-gallery-og.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery flatbed truck transporting a car on a UK motorway",
  },
})

const categoryLinks = [
  {
    heading: "Breakdown & Motorway Recovery",
    description:
      "Vans and cars loaded onto our flatbeds after a breakdown on the motorway, hard shoulder or roadside.",
    href: "/services/breakdown-assistance",
    linkText: "Breakdown Assistance",
  },
  {
    heading: "Accident & RTC Recovery",
    description: "Careful recovery of crash-damaged vehicles following road traffic collisions.",
    href: "/services/accident-recovery",
    linkText: "Accident Recovery",
  },
  {
    heading: "Luxury & Supercar Transport",
    description: "Secure transportation for high-value vehicles, from supercars to classic cars.",
    href: "/services/vehicle-transportation-delivery",
    linkText: "Vehicle Transportation",
  },
  {
    heading: "4x4 & Off-Road Recovery",
    description: "Recovery of 4x4s and vehicles stuck or stranded in off-road and rural locations.",
    href: "/services/4x4-off-road-recovery",
    linkText: "4x4 & Off-Road Recovery",
  },
  {
    heading: "Plant & Large Vehicle Transport",
    description: "Transportation of plant machinery, large vehicles and commercial vehicles on our flatbed fleet.",
    href: "/services/plant-haulage",
    linkText: "Plant Haulage",
  },
]

export default function GalleryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${siteConfig.siteUrl}/gallery` },
    ],
  }

  const gallerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.siteUrl}/gallery#webpage`,
        name: "Recovery Gallery | AHS Recovery",
        url: `${siteConfig.siteUrl}/gallery`,
        description:
          "Explore AHS Recovery's gallery featuring towing, breakdown recovery, accident recovery, luxury vehicle transportation, 4x4 recovery and plant haulage.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": `${siteConfig.siteUrl}/#business` },
        mainEntity: { "@id": `${siteConfig.siteUrl}/gallery#imagegallery` },
      },
      {
        "@type": "ImageGallery",
        "@id": `${siteConfig.siteUrl}/gallery#imagegallery`,
        name: "AHS Recovery Photo Gallery",
        url: `${siteConfig.siteUrl}/gallery`,
        isPartOf: { "@id": `${siteConfig.siteUrl}/gallery#webpage` },
        about: { "@id": `${siteConfig.siteUrl}/#business` },
        image: galleryImages.map((image) => ({
          "@type": "ImageObject",
          contentUrl: `${siteConfig.siteUrl}${image.src}`,
          description: image.alt,
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <main>
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden border-b border-white/5 bg-navy-accent">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(219,165,3,0.12), transparent 45%), radial-gradient(circle at 80% 60%, rgba(219,165,3,0.08), transparent 50%)",
            }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Real Jobs, Real Photos
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Vehicle Recovery Gallery
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
              A look at real{" "}
              <Link href="/services/vehicle-recovery" className="text-primary font-semibold hover:underline">
                vehicle recovery
              </Link>
              , breakdown, accident and transportation jobs carried out by AHS Recovery — from everyday vans to
              high-value supercars.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark">
          <div className="max-w-[1400px] mx-auto">
            <GalleryGrid />
          </div>
        </section>

        <section className="px-6 md:px-20 lg:px-40 py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Our Recovery Work</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">What You&apos;ll Find in Our Gallery</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryLinks.map((category) => (
                <div key={category.heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{category.heading}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{category.description}</p>
                  <Link
                    href={category.href}
                    className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    {category.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 md:py-20 text-center px-4 md:px-6">
          <h2 className="text-background-dark text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 px-2">
            Need Recovery Like This?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="inline-flex items-center justify-center gap-3 bg-background-dark text-white px-8 md:px-12 py-4 md:py-6 rounded-xl font-black text-xl md:text-3xl hover:scale-105 transition-transform border-4 border-white/10 shadow-2xl"
              href={`tel:${siteConfig.phoneTel}`}
            >
              <Phone className="w-6 h-6 md:w-8 md:h-8" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-background-dark/10 hover:bg-background-dark/20 text-background-dark border-2 border-background-dark/20 px-8 py-4 rounded-xl font-black text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
