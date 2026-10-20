import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { coverageHighlights, siteConfig } from "@/lib/site-config"

export default function AboutProcess() {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full overflow-hidden bg-background-dark">
        <div className="w-full lg:w-1/2 min-h-[350px] relative bg-navy-accent overflow-hidden">
          <Image
            src="/images/large-vehicle-recovery-hookloader.webp"
            alt="AHS Recovery flatbed truck loaded with a large commercial vehicle"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:px-24 py-24">
          <div className="space-y-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-white">Handling Roadside Incidents Safely</h2>
            <div className="h-1.5 w-20 bg-primary"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Recovery work isn&apos;t always straightforward. Our team is used to working around busy junctions,
              tight residential streets, motorways and off-road situations, taking a calm, methodical approach to
              each one.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don&apos;t just move vehicles — we manage the situation around them safely, so your vehicle reaches
              its destination without further complication.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-black text-white">Ilford</div>
                <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Base Location</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">4x4 &ndash; 18t</div>
                <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Fleet Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent">
        <div className="max-w-[1280px] mx-auto text-center space-y-8">
          <MapPin className="w-14 h-14 text-primary mx-auto" strokeWidth={1.5} />
          <h2 className="text-3xl font-black text-white">Vehicle Recovery Across Ilford, Essex and the UK</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            AHS Recovery operates from {siteConfig.location}, providing local vehicle recovery and nationwide
            recovery and transportation services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-left">
            {coverageHighlights.map((item) => (
              <div key={item.title} className="px-4 py-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-white font-bold">{item.title}</div>
                <div className="text-slate-400 text-sm mt-1">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-left space-y-6 pt-6">
            <div>
              <h3 className="text-white font-bold mb-2">Local Recovery in Ilford and Surrounding Areas</h3>
              <p className="text-slate-400 leading-relaxed">
                Our local recovery coverage extends approximately 60 miles from Ilford. We assist drivers across
                Essex, East London, and surrounding areas, subject to availability and the recovery requirements.
                Whether your vehicle has broken down near home, on a busy road, or away from your usual route, you
                can{" "}
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  contact us
                </Link>{" "}
                to discuss your location and the assistance needed.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Nationwide Breakdown Recovery</h3>
              <p className="text-slate-400 leading-relaxed">
                For drivers travelling further afield, we also provide{" "}
                <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                  breakdown recovery
                </Link>{" "}
                across the UK. Contact us with your location, vehicle details, and preferred destination so we can
                assess the recovery requirements.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Nationwide Vehicle Transportation</h3>
              <p className="text-slate-400 leading-relaxed">
                We arrange{" "}
                <Link
                  href="/services/vehicle-transportation-delivery"
                  className="text-primary font-medium hover:underline"
                >
                  vehicle transportation and delivery
                </Link>{" "}
                across the country. Whether you need a vehicle moved between towns or transported over a longer
                distance, our team can discuss the available options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
