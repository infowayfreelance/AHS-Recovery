import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import ConsentGatedMap from "@/components/cookies/ConsentGatedMap"

export default function ContactServiceArea() {
  return (
    <section className="relative bg-navy-accent/30 py-24 overflow-hidden border-y border-white/5">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="max-w-3xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Service Areas</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Where We Provide Recovery
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              AHS Recovery is based in {siteConfig.location}. We provide local vehicle recovery, breakdown assistance
              and nationwide vehicle transportation for customers who need help moving their vehicles.
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="text-white font-bold mb-1.5">Vehicle Recovery in Ilford</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our local services cover Ilford and nearby areas. If your car or van has broken down, contact us
                  with your location and vehicle details to discuss recovery, or explore our{" "}
                  <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                    roadside assistance
                  </Link>{" "}
                  options for quicker fixes.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5">Car Recovery Across Essex and East London</h3>
                <p className="text-slate-400 leading-relaxed">
                  We provide car recovery in Essex, East London and surrounding areas within approximately 60 miles
                  of our {siteConfig.location} base. Contact our team to confirm recovery arrangements for your
                  location.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5">Nationwide Breakdown Recovery</h3>
                <p className="text-slate-400 leading-relaxed">
                  Need assistance further away? Our{" "}
                  <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                    nationwide breakdown recovery service
                  </Link>{" "}
                  helps arrange collection and transportation of broken-down vehicles across the UK.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5">Nationwide Vehicle Transportation</h3>
                <p className="text-slate-400 leading-relaxed">
                  We also provide{" "}
                  <Link
                    href="/services/vehicle-transportation-delivery"
                    className="text-primary font-medium hover:underline"
                  >
                    vehicle transportation and delivery
                  </Link>{" "}
                  for suitable cars, vans and other vehicles travelling between UK locations. Contact us with the
                  collection address, delivery destination and vehicle details to discuss your transportation
                  enquiry. See our full range of{" "}
                  <Link href="/services" className="text-primary font-medium hover:underline">
                    recovery services
                  </Link>{" "}
                  for more options.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline mt-8 min-h-[44px]"
            >
              Find AHS Recovery on Google Maps <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-full h-[320px] lg:h-[380px] rounded-2xl overflow-hidden border border-white/10">
            <ConsentGatedMap src={siteConfig.googleMapsEmbedUrl} title="AHS Recovery location map" />
          </div>
        </div>
      </div>
    </section>
  )
}
