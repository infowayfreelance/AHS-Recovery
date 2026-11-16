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

const homeTitle = "Car Recovery & Towing Ilford, Essex | AHS Recovery"
const homeDescription =
  "Car and vehicle recovery in Ilford, Essex: towing, breakdown and accident recovery within ~60 miles, plus nationwide transport. Call 07883 546955."

const homeMetadata = buildMetadata({
  title: homeTitle,
  description: homeDescription,
  ogImage: {
    url: `${siteConfig.siteUrl}/images/homepage-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery flatbed truck transporting an SUV on the motorway at sunset",
  },
})

export const metadata = {
  ...homeMetadata,
  twitter: {
    ...homeMetadata.twitter,
    title: "AHS Recovery | Vehicle Recovery & Breakdown Assistance",
    description:
      "AHS Recovery provides towing, vehicle recovery and breakdown assistance in Ilford, Essex, with nationwide breakdown recovery and vehicle transportation.",
  },
}

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
