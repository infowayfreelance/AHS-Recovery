import Link from "next/link"
import ContactHero from "@/components/ContactHero"
import ContactInfo from "@/components/ContactInfo"
import EmergencyRequestForm from "@/components/EmergencyRequestForm"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactFAQ, { faqs } from "@/components/ContactFAQ"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact AHS Recovery | Vehicle Recovery Ilford",
  description:
    "Contact AHS Recovery in Ilford, Essex for vehicle recovery, breakdown assistance and nationwide transport. Call or request recovery via WhatsApp.",
  path: "/contact",
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
    description:
      "Contact AHS Recovery in Ilford, Essex for vehicle recovery, breakdown assistance and nationwide transport. Call or request recovery via WhatsApp.",
    mainEntity: { "@id": `${siteConfig.siteUrl}/#business` },
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
        <div className="max-w-[900px] mx-auto px-6 md:px-20 lg:px-0">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Book Recovery</span>
            <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
              Need to book{" "}
              <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                vehicle recovery
              </Link>{" "}
              or arrange breakdown assistance? Complete the short form below to send your recovery enquiry through
              WhatsApp. Please provide accurate vehicle and location details so we can understand your situation and
              discuss suitable recovery arrangements.
            </p>
          </div>

          <div>
            <EmergencyRequestForm
              submitLabel="Request Recovery via WhatsApp"
              footnote={
                <>
                  Submitting this form opens WhatsApp with your enquiry details. You will need to send the message to
                  complete your request. For urgent recovery assistance, please call {siteConfig.phoneDisplay}{" "}
                  directly.
                </>
              }
            />
          </div>
        </div>
      </section>

      <ContactServiceArea />
      <ContactFAQ />
    </main>
  )
}
