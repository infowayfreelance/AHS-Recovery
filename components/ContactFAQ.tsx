import Link from "next/link"
import { ChevronDown, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export const faqs = [
  {
    question: "How can I contact AHS Recovery?",
    answer: `You can call AHS Recovery on ${siteConfig.phoneDisplay} or ${siteConfig.phoneAltDisplay}. You can also contact us through WhatsApp or complete the recovery request form on this page.`,
  },
  {
    question: "What information do I need to request vehicle recovery?",
    answer:
      "Please provide your current location, vehicle make and model, vehicle registration if available, a description of the problem and your preferred recovery destination.",
  },
  {
    question: "Where is AHS Recovery based?",
    answer: `AHS Recovery is based at ${siteConfig.fullAddress}.`,
  },
  {
    question: "Do you offer nationwide breakdown recovery?",
    answer:
      "Yes. We provide nationwide breakdown recovery and vehicle transportation across the UK, subject to vehicle condition, location and recovery requirements.",
  },
  {
    question: "Can I book vehicle recovery through WhatsApp?",
    answer:
      "Yes. Complete our recovery request form or send us a WhatsApp message with your vehicle details and location. Our team can then discuss availability and recovery arrangements.",
  },
]

export default function ContactFAQ() {
  return (
    <section className="bg-white py-24">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Contact &amp; Recovery FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-primary/40 open:bg-primary/5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-slate-900 text-base md:text-lg min-h-[44px]">
                {faq.question}
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                {faq.question === "What information do I need to request vehicle recovery?" ? (
                  <>
                    Please provide your current location, vehicle make and model, vehicle registration if available,
                    a description of the problem and your preferred{" "}
                    <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                      recovery
                    </Link>{" "}
                    destination.
                  </>
                ) : (
                  faq.answer
                )}
              </p>
            </details>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-slate-900 text-2xl md:text-3xl font-black mb-3">Need Vehicle Recovery? Contact Us Today</h3>
          <p className="text-slate-500 leading-relaxed mb-8">
            Whether you need breakdown recovery in {siteConfig.addressLocality}, car recovery across{" "}
            {siteConfig.addressRegion} or nationwide vehicle transportation, AHS Recovery is here to discuss your
            requirements.{" "}
            <Link href="/about" className="text-primary font-medium hover:underline">
              Learn more about us
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#1a9c4b] border border-[#25D366]/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#25D366]/15 transition-colors w-full sm:w-auto min-h-[44px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp AHS Recovery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
