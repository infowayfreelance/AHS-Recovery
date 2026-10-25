import Image from "next/image"
import Link from "next/link"
import ContactHero from "@/components/ContactHero"
import ContactInfo from "@/components/ContactInfo"
import ContactRecoveryForm from "@/components/ContactRecoveryForm"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactFAQ, { faqs } from "@/components/ContactFAQ"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact AHS Recovery | Vehicle Recovery Ilford",
  description:
    "Contact AHS Recovery in Ilford, Essex for vehicle recovery, breakdown assistance and nationwide transport. Call or request recovery via WhatsApp.",
  path: "/contact",
  ogDescription:
    "Contact AHS Recovery in Ilford, Essex for breakdown assistance, vehicle recovery and nationwide transportation. Call or send your recovery request via WhatsApp.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/contact-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery tow truck transporting a vehicle in the UK",
  },
})

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.siteUrl}/contact` },
    ],
  }

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AHS Recovery",
    url: `${siteConfig.siteUrl}/contact`,
    inLanguage: "en-GB",
    description:
      "Contact AHS Recovery in Ilford, Essex for vehicle recovery, breakdown assistance, accident recovery and nationwide vehicle transportation.",
    about: { "@id": `${siteConfig.siteUrl}/#business` },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phoneTel,
        areaServed: "GB",
        availableLanguage: "en-GB",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phoneAltTel,
        areaServed: "GB",
        availableLanguage: "en-GB",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ContactHero />
      <ContactInfo />

      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Book Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Request Vehicle Recovery
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                Need to book{" "}
                <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                  vehicle recovery
                </Link>{" "}
                or arrange breakdown assistance? Complete the form and our team will call or message you back to
                confirm the details.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Submitting the form sends your enquiry through WhatsApp. Please provide accurate vehicle and location
                details so we can understand your situation and discuss suitable recovery arrangements.
              </p>
              <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/images/ahs-contact-team-member.webp"
                  alt="AHS Recovery team member taking a customer call"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <ContactRecoveryForm
                submitLabel="Request Recovery via WhatsApp"
                footnote={
                  <>
                    Submitting this form opens WhatsApp with your enquiry details. You will need to send the message
                    to complete your request. For urgent recovery assistance, please call {siteConfig.phoneDisplay}{" "}
                    directly.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <ContactServiceArea />
      <ContactFAQ />
    </main>
  )
}
