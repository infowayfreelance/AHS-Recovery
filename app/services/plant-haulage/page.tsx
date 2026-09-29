import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Forklift,
  Tractor,
  Truck,
  Warehouse,
  MapPinned,
  Home,
  Construction,
  Container,
  Search,
  ClipboardList,
  MessageSquare,
  HeartHandshake,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { siteConfig, services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Plant Haulage Services | Machinery Transport | AHS Recovery",
  description:
    "AHS Recovery provides plant haulage for mini diggers, excavators, rollers, forklifts, tractors and construction machinery. Call 07576 614651 for a quote.",
  path: "/services/plant-haulage",
})

const trustPoints = [
  "Mini Diggers to Heavy Plant",
  "Secure Loading & Strapping",
  "Local & Longer-Distance Haulage",
  "Careful, Planned Delivery",
]

const situations = [
  {
    icon: Construction,
    title: "Mini Digger & Excavator Transport",
    description: "Tracked and wheeled excavators moved between sites, depots or hire yards using suitable trailer equipment.",
  },
  {
    icon: Truck,
    title: "Roller & Compactor Transport",
    description: "Rollers and compactors collected and delivered for groundwork and resurfacing projects.",
  },
  {
    icon: Forklift,
    title: "Forklift Transport",
    description: "Forklifts moved between warehouses, yards and construction sites, subject to size and weight.",
  },
  {
    icon: Tractor,
    title: "Tractor & Agricultural Machinery Transport",
    description: "Tractors and other agricultural machinery transported between farms, dealers and workshops.",
  },
  {
    icon: Warehouse,
    title: "Plant Hire Collection & Return",
    description: "Hired machinery collected from a supplier and returned once work is complete.",
  },
  {
    icon: MapPinned,
    title: "Construction Site Deliveries",
    description: "Plant delivered to and collected from active construction and groundwork sites, subject to access.",
  },
  {
    icon: Home,
    title: "Site-to-Site Machinery Moves",
    description: "Machinery relocated between different sites as a project progresses.",
  },
  {
    icon: Container,
    title: "Non-Running Plant Transport",
    description: "Machinery that will not start or cannot be driven onto a trailer under its own power, subject to assessment.",
  },
]

const machineryTypes = [
  "Mini diggers",
  "Tracked and wheeled excavators",
  "Rollers and compactors",
  "Forklifts",
  "Tractors and agricultural machinery",
  "Dumpers",
  "Telehandlers",
  "Site generators and compressors",
  "Other construction and groundwork machinery",
]

const infoChecklist = [
  "Collection postcode",
  "Full collection address",
  "Delivery postcode",
  "Full delivery address",
  "Machine make and model",
  "Approximate weight",
  "Approximate dimensions",
  "Whether the machine starts and can be driven onto a trailer",
  "Ground conditions at collection and delivery",
  "Gate widths and overhead restrictions",
  "Whether a banksman or extra access is required",
  "Preferred collection or delivery timing",
  "Contact details for both locations",
]

const processSteps = [
  {
    number: "1",
    title: "Request Plant Haulage",
    description: `Call ${siteConfig.phoneDisplay} or use the contact page to provide the initial job details.`,
  },
  {
    number: "2",
    title: "Share Machine & Site Details",
    description: "Provide the machine type, approximate weight and dimensions, plus site access information.",
  },
  {
    number: "3",
    title: "We Assess the Load",
    description: "We review the machinery, ground conditions and access before confirming suitable equipment.",
  },
  {
    number: "4",
    title: "Machine Collection & Loading",
    description: "The machine is loaded and secured at the agreed collection point.",
  },
  {
    number: "5",
    title: "Careful Transport",
    description: "The machine is transported to the confirmed delivery site.",
  },
  {
    number: "6",
    title: "Delivery & Unloading",
    description: "The machine is unloaded at an accessible and suitable location.",
  },
]

const haulageChoices = [
  "A machine needs planned transport between sites",
  "Newly purchased or sold plant needs delivery",
  "Hired machinery needs collecting or returning",
  "A machine is being relocated between depots",
  "Multiple machines need scheduling for a project",
]

const winchChoices = [
  "Plant or a vehicle is stuck or bogged down on site",
  "Machinery needs freeing from mud, a ditch or soft ground",
  "The situation needs resolving before the machine can move at all",
]

const benefits = [
  {
    icon: Search,
    title: "Wide Range of Plant Covered",
    description: "From mini diggers to tractors and other construction machinery, subject to assessment.",
  },
  {
    icon: ClipboardList,
    title: "Site Access Reviewed First",
    description: "Ground conditions, gate widths and site restrictions are checked before collection.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We confirm the machine, route and access details before the job is booked.",
  },
  {
    icon: HeartHandshake,
    title: "Careful Loading & Delivery",
    description: "Machinery is loaded, secured, transported and unloaded according to the assessed requirements.",
  },
]

const relatedServices = [
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    description: "Specialist winching for vehicles and plant stuck in mud, ditches or off-road terrain.",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Vehicle Transportation & Delivery",
    description: "Nationwide transportation and delivery for cars, vans and larger vehicles.",
  },
  {
    slug: "4x4-off-road-recovery",
    title: "4x4 & Off-Road Recovery",
    description: "Recovery for 4x4s and vehicles stuck off-road, using suitable trailers and equipment.",
  },
]

const faqs = [
  {
    question: "What is plant haulage?",
    answer: "Plant haulage is the planned transport of construction and groundwork machinery, such as diggers, excavators and rollers, between sites, depots or hire yards using suitable trailer equipment.",
  },
  {
    question: "What machinery can you transport?",
    answer: "We can transport many mini diggers, excavators, rollers, forklifts, tractors and other construction and plant machinery, subject to size, weight and condition.",
  },
  {
    question: "Can you transport machinery that does not start?",
    answer: "We can transport many non-running machines. Tell us whether the machine can be driven onto a trailer or will need winching on, so we can assess the right equipment.",
  },
  {
    question: "Do you provide plant haulage outside Ilford and Essex?",
    answer: `We are based in ${siteConfig.location} and cover local plant haulage within approximately 60 miles. Longer-distance haulage can be discussed and arranged on request.`,
  },
  {
    question: "What information do you need for a plant haulage quote?",
    answer: "Provide the collection and delivery postcodes, machine make and model, approximate weight and dimensions, and any access restrictions at either site.",
  },
  {
    question: "Can you collect plant from a hire company?",
    answer: "Yes, subject to the hire company authorising collection. Confirm the collection details and any paperwork required before booking.",
  },
  {
    question: "Do you deliver machinery directly to construction sites?",
    answer: "Yes, subject to site access being confirmed beforehand. Tell us about gate widths, ground conditions and any overhead restrictions.",
  },
  {
    question: "What is the difference between plant haulage and winch-out recovery?",
    answer: "Plant haulage is planned transport of machinery between locations. Winch-out recovery is used when plant or a vehicle is already stuck and needs freeing before it can be moved at all.",
  },
]

const plantHaulageService = services.find((s) => s.slug === "plant-haulage")!

export default function PlantHaulagePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plant Haulage Services",
    serviceType: "Plant Haulage",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/plant-haulage`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Plant Haulage",
        item: `${siteConfig.siteUrl}/services/plant-haulage`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[75vh] flex items-center">
        <Image
          src={plantHaulageService.image ?? "/images/plant-machinery-transport-excavators.webp"}
          alt="AHS Recovery flatbed lorry transporting an excavator for plant haulage"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/85 to-background-dark" />

        <div className="relative z-10 w-full px-6 md:px-20 lg:px-40 py-16 md:py-20">
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Construction & Groundwork Machinery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Plant Haulage Services
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Need machinery moved between sites? AHS Recovery provides plant haulage and machinery transport for
              mini diggers, excavators, rollers, forklifts, tractors and other construction machinery. We arrange
              safe loading, secure transport and careful delivery to an agreed site, depot or hire yard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex-1 whitespace-nowrap bg-primary text-background-dark px-6 py-4 rounded-lg font-black text-base flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex-1 whitespace-nowrap bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-lg font-bold text-base transition-colors text-center flex items-center justify-center"
              >
                Request a Plant Haulage Quote
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
              {trustPoints.map((label) => (
                <div key={label} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Professional Machinery Transport</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Safe, Secure Plant & Machinery Transport
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Moving construction machinery isn&apos;t as simple as moving a car. Plant is heavier, less
                  manoeuvrable and often needs to reach sites with limited access.
                </p>
                <p>
                  AHS Recovery provides plant haulage for mini diggers, excavators, rollers, forklifts, tractors
                  and other construction and groundwork machinery. Every job starts with a review of the machine,
                  its weight and dimensions, and the access available at both the collection and delivery points.
                </p>
                <p>
                  Machinery is loaded and strapped using suitable equipment for its size and weight, transported
                  carefully to its destination, then unloaded and positioned at an accessible location.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Plant Transport <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/tractor-plant-transport.webp"
                alt="Tractor secured for transport by AHS Recovery"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plant haulage enquiry CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">
              Need Machinery Moved Between Sites?
            </h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay} with the collection postcode, delivery postcode and
              machine details.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Discuss Your Plant Haulage
          </a>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Machinery Transport for Construction & Groundwork Projects
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Our plant transport service can assist with many planned machinery movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {situations.map((situation) => (
              <div key={situation.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{situation.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{situation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery types */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Machinery Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Digger, Excavator & Construction Machinery Transport
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              The correct haulage method depends on the type, size, weight and condition of the machine.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-5">We may be able to transport:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {machineryTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
              Provide accurate weight and dimensions before booking. Unusually large or heavy machinery may
              require additional assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Plan Your Haulage</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Information Needed for a Plant Haulage Quote
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate machine and site information helps us assess the load and access requirements.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-5">Provide:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {infoChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Photographs may be requested for unusual, modified or non-running machinery. Do not hide known
              access or ground condition issues when requesting haulage.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              How Plant Haulage Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-navy-accent border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm max-w-[220px]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Arrange Plant Haulage
            </a>
          </div>
        </div>
      </section>

      {/* Plant haulage vs winch-out */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choose the Right Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Plant Haulage or Winch-Out Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Plant haulage is intended for planned machinery transport between sites, depots or hire yards.
              Winch-out recovery is generally more suitable when a machine or vehicle is already stuck on site and
              needs freeing before it can be moved at all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose plant haulage when:</h3>
              <ul className="space-y-3">
                {haulageChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose winch-out recovery when:</h3>
              <ul className="space-y-3">
                {winchChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services/winch-out-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore Our Winch-Out Recovery Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Careful, Planned Plant Transport
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Plant haulage requires clear planning before collection. The machine&apos;s condition, access at both
              locations and journey details must all be understood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Other Recovery Options</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Related Recovery & Transport Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                description={related.description}
                href={`/services/${related.slug}`}
                image={services.find((s) => s.slug === related.slug)?.image}
                icon={serviceIcons[related.slug]}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:scale-[1.02] transition-transform"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Frequently Asked Questions About Plant Haulage
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-primary/40 open:bg-primary/5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-slate-900 text-base md:text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Plan Your Machinery Move</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Arrange Plant Haulage & Machinery Transport
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery with your collection postcode, delivery postcode and machine details. We will assess
          the load, access and ground conditions before arranging haulage.
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
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
          >
            Request Plant Haulage
          </Link>
        </div>
      </section>
    </main>
  )
}
