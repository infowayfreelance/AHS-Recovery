import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import ContactMapLazy from "@/components/ContactMapLazy"

export default function ContactServiceArea() {
  return (
    <section className="relative bg-navy-accent/30 py-24 overflow-hidden border-y border-white/5">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 items-center">
          <div className="max-w-xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Service Areas</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4 leading-tight">
              Where We Provide Recovery
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Based in {siteConfig.location}, we cover local{" "}
              <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                roadside assistance
              </Link>{" "}
              and recovery within around 60 miles, plus{" "}
              <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                nationwide breakdown recovery
              </Link>{" "}
              and{" "}
              <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
                vehicle transportation
              </Link>
              . See our full range of{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                recovery services
              </Link>
              .
            </p>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline min-h-[44px]"
            >
              Find AHS Recovery on Google Maps <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-full h-[320px] lg:h-[380px] rounded-2xl overflow-hidden border border-white/10">
            <ContactMapLazy src={siteConfig.googleMapsEmbedUrl} title="AHS Recovery location map" />
          </div>
        </div>
      </div>
    </section>
  )
}
