import Link from "next/link"
import { ChevronDown, Phone, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import type { ReactNode } from "react"

export interface AboutFaq {
  question: string
  answer: string
}

export const aboutFaqs: AboutFaq[] = [
  {
    question: "Where is AHS Recovery based?",
    answer: `AHS Recovery is based in ${siteConfig.location}, at ${siteConfig.fullAddress}.`,
  },
  {
    question: "What areas does AHS Recovery cover?",
    answer:
      "We provide local vehicle recovery within approximately 60 miles of Ilford, Essex. We also offer nationwide breakdown recovery and vehicle transportation throughout the UK.",
  },
  {
    question: "What types of vehicles can AHS Recovery recover?",
    answer:
      "Our fleet includes equipment ranging from 4x4 recovery trailers to 18-tonne recovery lorries. Contact us with your vehicle details so we can confirm suitable recovery arrangements.",
  },
  {
    question: "Can you recover vehicles from motorways?",
    answer:
      "Yes, we offer motorway breakdown recovery services. If you break down on a motorway, follow official safety guidance and contact us once you are in a safe location. If you are in immediate danger, call 999.",
  },
  {
    question: "Do you provide accident recovery?",
    answer:
      "Yes, we provide accident recovery for vehicles involved in road traffic incidents. We can assess the situation and discuss suitable recovery arrangements.",
  },
  {
    question: "Do you offer nationwide vehicle transportation?",
    answer:
      "Yes, AHS Recovery provides nationwide vehicle transportation and delivery across the UK. Contact us with your collection and delivery locations to discuss your requirements.",
  },
  {
    question: "How can I request vehicle recovery?",
    answer: `Call us on ${siteConfig.phoneDisplay}. Tell us your location, vehicle type, the problem you are experiencing, and where you need the vehicle taken.`,
  },
  {
    question: "What information should I provide when calling?",
    answer:
      "Please provide your exact location, vehicle make and model, the nature of the breakdown or accident, and your preferred recovery destination. This helps us assess the job and arrange suitable equipment.",
  },
]

const linkedAnswers: Record<string, ReactNode> = {
  "What types of vehicles can AHS Recovery recover?": (
    <>
      Our fleet includes equipment ranging from 4x4 recovery trailers to 18-tonne recovery lorries.{" "}
      <Link href="/contact" className="text-primary font-medium hover:underline">
        Contact us
      </Link>{" "}
      with your vehicle details so we can confirm suitable recovery arrangements.
    </>
  ),
  "Can you recover vehicles from motorways?": (
    <>
      Yes, we offer{" "}
      <Link href="/services/motorway-breakdown-recovery" className="text-primary font-medium hover:underline">
        motorway breakdown recovery
      </Link>{" "}
      services. If you break down on a motorway, follow official safety guidance and contact us once you are in a
      safe location. If you are in immediate danger, call 999.
    </>
  ),
  "Do you provide accident recovery?": (
    <>
      Yes, we provide{" "}
      <Link href="/services/accident-recovery" className="text-primary font-medium hover:underline">
        accident recovery
      </Link>{" "}
      for vehicles involved in road traffic incidents. We can assess the situation and discuss suitable recovery
      arrangements.
    </>
  ),
  "Do you offer nationwide vehicle transportation?": (
    <>
      Yes, AHS Recovery provides nationwide{" "}
      <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
        vehicle transportation and delivery
      </Link>{" "}
      across the UK. Contact us with your collection and delivery locations to discuss your requirements.
    </>
  ),
  "How can I request vehicle recovery?": (
    <>
      Call us on {siteConfig.phoneDisplay}, or use our{" "}
      <Link href="/contact" className="text-primary font-medium hover:underline">
        contact page
      </Link>
      . Tell us your location, vehicle type, the problem you are experiencing, and where you need the vehicle
      taken.
    </>
  ),
}

export default function AboutFAQ() {
  return (
    <section className="bg-white py-24">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {aboutFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-primary/40 open:bg-primary/5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-slate-900 text-base md:text-lg">
                {faq.question}
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                {linkedAnswers[faq.question] ?? faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            Need Vehicle Recovery Assistance?
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Whether you need local breakdown recovery in Ilford or nationwide vehicle transportation,{" "}
            <Link href="/services" className="text-primary font-medium hover:underline">
              AHS Recovery
            </Link>{" "}
            is ready to discuss your requirements. Call us to explain your situation and arrange suitable recovery
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
