import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export default function AboutIntro() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-background-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Our Identity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Your Local Vehicle Recovery Team in Ilford
          </h2>
          <div className="text-slate-400 text-xl leading-relaxed space-y-8 font-light">
            <p>
              AHS Recovery is a vehicle recovery company based in {siteConfig.location}. We help drivers who need
              reliable assistance following a breakdown, accident, or unexpected vehicle problem.
            </p>
            <p>
              We understand how stressful it can be when your vehicle stops working. Our aim is to make the
              recovery process straightforward, from your first phone call to the safe delivery of your vehicle.
            </p>
            <p>
              Our team handles different{" "}
              <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                recovery situations
              </Link>
              , from cars stranded on residential roads to larger vehicles requiring specialist equipment. We also
              provide{" "}
              <Link
                href="/services/vehicle-transportation-delivery"
                className="text-primary font-medium hover:underline"
              >
                nationwide vehicle transportation
              </Link>{" "}
              for customers who need their vehicles moved over longer distances.
            </p>
            <p>
              With recovery equipment ranging from 4x4 trailers to 18-tonne recovery lorries, we can assess
              different vehicle types and arrange suitable recovery equipment for each job. Take a look at our{" "}
              <Link href="/gallery" className="text-primary font-medium hover:underline">
                recovery photo gallery
              </Link>{" "}
              to see our fleet in action.
            </p>
          </div>
        </div>
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/recovery-driver-customer-london.webp"
            alt="AHS Recovery driver talking with a customer beside their vehicle"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
