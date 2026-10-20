import Link from "next/link"
import { ArrowRight, Car, Wrench, TriangleAlert, LifeBuoy, Route, PackageCheck } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Vehicle Recovery",
    href: "/services/vehicle-recovery",
    description:
      "Helps drivers whose vehicles cannot be driven safely. We arrange suitable recovery equipment and transport vehicles to an agreed location.",
  },
  {
    icon: Wrench,
    title: "Breakdown Assistance",
    href: "/services/breakdown-assistance",
    description:
      "If your vehicle stops working unexpectedly, this service can help you arrange roadside support or recovery when required.",
  },
  {
    icon: TriangleAlert,
    title: "Accident Recovery",
    href: "/services/accident-recovery",
    description:
      "Assists with vehicles involved in road traffic accidents, including those that cannot be driven after a collision.",
  },
  {
    icon: LifeBuoy,
    title: "Roadside Assistance",
    href: "/services/roadside-assistance",
    description:
      "For drivers experiencing unexpected vehicle problems. Depending on the situation, we can assist at the roadside or arrange recovery.",
  },
  {
    icon: Route,
    title: "Motorway Breakdown Recovery",
    href: "/services/motorway-breakdown-recovery",
    description:
      "Breaking down on a motorway can be dangerous. This service helps arrange vehicle recovery once you are in a safe position.",
  },
  {
    icon: PackageCheck,
    title: "Nationwide Vehicle Transportation",
    href: "/services/vehicle-transportation-delivery",
    description:
      "Helps customers move vehicles between locations across the UK, including longer-distance journeys.",
  },
]

export default function AboutServices() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            Our Recovery Services and Fleet
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            AHS Recovery offers a range of recovery and roadside services for different situations. Whether your
            vehicle has stopped working or needs transporting, we can help you find a suitable solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
          {services.map((service) => (
            <div key={service.href} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  Our{" "}
                  <Link href={service.href} className="text-primary font-medium hover:underline">
                    {service.title.toLowerCase()} service
                  </Link>{" "}
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Our Recovery Fleet</h3>
          <p className="text-slate-600 leading-relaxed">
            Our fleet ranges from 4x4 recovery trailers to 18-tonne recovery lorries. Having different recovery
            vehicles allows us to handle a wider range of transport and recovery requirements. We assess each job
            before arranging equipment, considering the vehicle&apos;s condition, weight, location, and
            accessibility.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:scale-[1.02] transition-transform"
          >
            Explore All Our Recovery Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
