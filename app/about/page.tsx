import AboutHero from "@/components/AboutHero"
import AboutIntro from "@/components/AboutIntro"
import AboutValues from "@/components/AboutValues"
import AboutServices from "@/components/AboutServices"
import AboutProcess from "@/components/AboutProcess"
import AboutFAQ, { aboutFaqs } from "@/components/AboutFAQ"
import AboutCTA from "@/components/AboutCTA"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About AHS Recovery | Vehicle Recovery Ilford",
  description:
    "Learn about AHS Recovery, based in Ilford, Essex. Local vehicle recovery within 60 miles, plus nationwide breakdown recovery and vehicle transportation.",
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.siteUrl}/about` },
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About AHS Recovery",
    url: `${siteConfig.siteUrl}/about`,
    description:
      "Learn about AHS Recovery, based in Ilford, Essex. Local vehicle recovery within 60 miles, plus nationwide breakdown recovery and vehicle transportation.",
    mainEntity: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addressStreet,
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        postalCode: siteConfig.addressPostcode,
        addressCountry: siteConfig.addressCountryCode,
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutValues />
        <AboutServices />
        <AboutProcess />
        <AboutFAQ />
        <AboutCTA />
      </main>
    </>
  )
}
