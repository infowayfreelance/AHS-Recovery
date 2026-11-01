import HeroSection from "@/components/HeroSection"
import ServicesOverview from "@/components/ServicesOverview"
import RecoveryFeatures from "@/components/RecoveryFeatures"
import PhotoMarquee from "@/components/PhotoMarquee"
// import TestimonialsSection from "@/components/TestimonialsSection" // reviews temporarily hidden
import LocationSection from "@/components/LocationSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const homeTitle = "Vehicle Recovery Ilford, Essex | Nationwide Breakdown & Transport | AHS Recovery"
const homeDescription =
  "AHS Recovery is based in Ilford, Essex, offering towing, breakdown assistance, accident recovery and roadside assistance locally within 60 miles, plus nationwide breakdown recovery and vehicle transportation. Call 07883 546955."

export const metadata = buildMetadata({
  title: homeTitle,
  description: homeDescription,
  ogTitle: "AHS Recovery | Vehicle Recovery & Breakdown Assistance",
  ogDescription:
    "AHS Recovery provides towing, vehicle recovery and breakdown assistance in Ilford, Essex, with nationwide breakdown recovery and vehicle transportation.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/homepage-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery flatbed truck transporting an SUV on the motorway at sunset",
  },
})

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/#webpage`,
    url: siteConfig.siteUrl,
    name: homeTitle,
    description: homeDescription,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: { "@id": `${siteConfig.siteUrl}/#business` },
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HeroSection />
      <ServicesOverview />
      <RecoveryFeatures />
      <PhotoMarquee />
      {/* Reviews temporarily hidden — re-enable by restoring <TestimonialsSection /> here */}
      <LocationSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
