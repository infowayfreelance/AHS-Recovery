import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Droplet,
  Trees,
  TrendingDown,
  Mountain,
  Route,
  TriangleAlert,
  Truck,
  ShieldCheck,
  Layers,
  MessageSquare,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { siteConfig, services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "4x4 & Off-Road Recovery Ilford | AHS Recovery",
  description:
    "Need 4x4 or off-road recovery in Ilford, Essex? AHS Recovery helps with vehicles stuck in mud, fields, ditches and difficult terrain. Call us today.",
  path: "/services/4x4-off-road-recovery",
  ogTitle: "4x4 & Off-Road Recovery Ilford | AHS Recovery",
  ogDescription:
    "Need 4x4 or off-road recovery in Ilford and Essex? AHS Recovery helps with vehicles stuck in mud, fields, ditches and difficult terrain.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/4x4-off-road-recovery-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery 4x4 recovery truck winching a Land Rover Defender down a muddy hillside track",
  },
})

const trustPoints = ["4x4s, SUVs and Cars", "Mud and Field Recovery", "Difficult Vehicle Positions", "Careful Vehicle Extraction"]

const situations = [
  {
    icon: Droplet,
    title: "Mud Recovery",
    description:
      "Deep mud and soft ground can leave vehicles without enough traction to move. We assess the conditions and arrange suitable equipment to help recover your vehicle without unnecessary damage.",
  },
  {
    icon: Trees,
    title: "Field Recovery",
    description:
      "Wet fields, uneven surfaces and hidden ruts can leave cars, SUVs and 4x4s stranded. We assess the ground and access route to determine a suitable recovery method.",
  },
  {
    icon: TrendingDown,
    title: "Ditch Recovery",
    description:
      "Vehicles stuck in roadside ditches may be difficult to move safely. We assess the vehicle's position, surrounding space and any visible damage before attempting recovery.",
  },
  {
    icon: Mountain,
    title: "Sloped Ground Recovery",
    description:
      "Steep or slippery ground can make vehicle extraction more difficult. Our approach considers the slope, surface stability and vehicle position to reduce unwanted movement.",
  },
  {
    icon: Route,
    title: "Rural Track Recovery",
    description:
      "Narrow country lanes, farm tracks and uneven paths can restrict access for standard recovery trucks. We assess the location and arrange equipment suited to the available access.",
  },
  {
    icon: TriangleAlert,
    title: "Difficult Vehicle Positions",
    description:
      "Vehicles stuck near trees, walls, fences or other obstacles may require careful extraction. We assess the surrounding area before deciding how to move the vehicle.",
  },
]

const whyChooseUs = [
  {
    icon: Truck,
    title: "Suitable Recovery Equipment",
    description:
      "Our recovery fleet includes 4x4 recovery trailers and recovery lorries up to 18 tonnes. We assess your vehicle and location before selecting suitable equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Vehicle Extraction",
    description:
      "We consider ground stability, vehicle position and nearby obstacles before recovery begins. Our aim is to move your vehicle safely while reducing the risk of further damage.",
  },
  {
    icon: Layers,
    title: "Recovery for Different Situations",
    description:
      "From muddy fields and rural tracks to roadside ditches and difficult vehicle positions, we assess a range of off-road recovery situations.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain the recovery arrangements and discuss any access restrictions or vehicle concerns before work begins.",
  },
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain where your vehicle is stuck. Tell us whether it is in mud, a ditch, a field or another difficult location.`,
  },
  {
    number: "2",
    title: "Share Your Location and Vehicle Details",
    description:
      "Provide your exact location, vehicle make and model, and a description of the ground conditions. Send photographs of the vehicle and access route if it is safe to do so.",
  },
  {
    number: "3",
    title: "Recovery Assessment",
    description:
      "We review the available information, including vehicle weight, ground stability, access restrictions and surrounding obstacles, to determine a suitable recovery approach.",
  },
  {
    number: "4",
    title: "Vehicle Extraction",
    description:
      "Once the recovery method has been assessed, the vehicle can be carefully extracted and moved to stable ground. If it cannot be driven safely afterwards, further transportation may be arranged.",
  },
]

const relatedServices = [
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    description: "For vehicles stuck in verges, shallow ditches or mud where controlled winching equipment can safely reach the vehicle.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "For broken-down, damaged or non-running vehicles that need transporting to a garage, home or another agreed destination.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "For damaged vehicles and complex accident recovery situations requiring additional assessment and suitable recovery equipment.",
  },
]

const faqs = [
  {
    question: "Can you recover a 4x4 stuck in deep mud?",
    answer:
      "Yes, mud recovery may be possible depending on the ground conditions, vehicle position and access available. We assess the situation before arranging suitable recovery equipment.",
  },
  {
    question: "Do you recover SUVs and cars from fields?",
    answer:
      "We can assess recovery requests involving SUVs, 4x4s, cars and suitable vans stuck in fields or on soft ground. Recovery depends on the vehicle's size, condition and accessibility.",
  },
  {
    question: "Can you recover a vehicle from a ditch?",
    answer:
      "Ditch recovery may be possible after assessing the vehicle's position, any visible damage and the surrounding terrain. Some situations require specialist equipment.",
  },
  {
    question: "What is the difference between 4x4 recovery and winch-out recovery?",
    answer:
      "4x4 and off-road recovery focuses on vehicles stranded on difficult terrain where access may be restricted. Winch-out recovery normally involves pulling a stuck vehicle from a position accessible to suitable winching equipment.",
  },
  {
    question: "What should I do if my vehicle gets stuck off-road?",
    answer:
      "Stop accelerating if your wheels are spinning without progress. Keep yourself and passengers in a safe position, avoid unsafe recovery attempts and contact a professional recovery service.",
  },
  {
    question: "What information do you need to arrange recovery?",
    answer:
      "Please provide your location, vehicle make and model, the type of ground, and details of how the vehicle is stuck. Photographs of the vehicle and surrounding area can help if taken from a safe position.",
  },
]

export default function FourByFourOffRoadRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "4x4 & Off-Road Recovery",
    serviceType: "4x4 Recovery, Off-Road Vehicle Recovery",
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    url: `${siteConfig.siteUrl}/services/4x4-off-road-recovery`,
    description:
      "Professional 4x4 and off-road vehicle recovery for vehicles stuck in mud, fields, ditches, rural tracks and difficult terrain.",
    areaServed: "Ilford, Essex, East London and surrounding areas within approximately 60 miles.",
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
        name: "4x4 & Off-Road Recovery",
        item: `${siteConfig.siteUrl}/services/4x4-off-road-recovery`,
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
          src="/images/4x4-recovery-winch-hillside-valley.webp"
          alt="AHS Recovery 4x4 recovery vehicle winching a stuck Land Rover down a hillside"
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
              Recovery Beyond the Road
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              4x4 &amp; Off-Road Recovery Services
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Is your vehicle stuck in mud, a ditch, a field or difficult terrain? AHS Recovery provides professional
              4x4 recovery and off-road vehicle recovery in {siteConfig.location} and surrounding areas. We help
              drivers recover stranded 4x4s, SUVs, cars and suitable vans using equipment selected for the vehicle
              and ground conditions.
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
                Request 4x4 Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Off-Road Vehicle Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Professional Recovery for Vehicles Stuck Off-Road
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Off-road recovery is different from standard{" "}
                  <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                    roadside assistance
                  </Link>
                  . Soft ground, slopes, limited access and hidden obstacles can make a vehicle difficult to reach and
                  move safely. Whether your vehicle is stuck on a rural track or cannot reach a normal road surface,
                  we can assess the safest recovery approach.
                </p>
                <p>
                  Before arranging recovery, AHS Recovery assesses the type of vehicle, ground conditions,
                  surrounding space and the position in which the vehicle is stuck. This information helps determine
                  the suitable recovery method and equipment from our{" "}
                  <Link href="/about" className="text-primary font-medium hover:underline">
                    recovery fleet
                  </Link>
                  .
                </p>
                <p>
                  Do not continue spinning the wheels or repeatedly attempt to drive out. This can cause the vehicle
                  to sink deeper, damage the ground and make recovery more difficult.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request 4x4 Recovery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/4x4-recovery-winch-roadside-ditch.webp"
                alt="AHS Recovery winching a Land Rover Defender out of a roadside ditch"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immediate assistance CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Is Your Vehicle Stuck Off-Road?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay}. Provide your exact location, vehicle details, ground
              conditions and clear photographs of the surrounding area where it is safe to do so.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Where we can help */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Where We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Off-Road Recovery for Difficult Ground and Vehicle Positions
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Off-road recovery requires the right approach for each situation. Our team assesses the ground, vehicle
              position and access before arranging recovery.
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

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Why Choose AHS Recovery?</h2>
            <p className="text-slate-500 text-base md:text-lg">
              When your vehicle becomes stuck off-road, choosing a recovery team that understands difficult ground
              conditions matters. AHS Recovery focuses on careful assessment, suitable equipment and clear
              communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
            {whyChooseUs.map((benefit) => (
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

          <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="relative h-56 md:h-full min-h-[260px]">
              <Image
                src="/images/4x4-recovery-winch-forest-track.webp"
                alt="AHS Recovery winching a 4x4 along a muddy forest track"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Equipped for Rural and Off-Road Access</h3>
              <p className="text-slate-600 leading-relaxed">
                Narrow lanes, farm tracks and soft verges call for the right recovery vehicle. Our{" "}
                <Link href="/about" className="text-primary font-medium hover:underline">
                  4x4 recovery trailers and recovery lorries
                </Link>{" "}
                are selected to suit the access available, so we can reach vehicles that standard recovery trucks
                cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process + safety advice */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">How Our Off-Road Recovery Works</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Getting your vehicle recovered starts with a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[240px]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/4x4-recovery-winch-muddy-farm-lane.webp"
                alt="AHS Recovery winching a 4x4 stuck in mud on a farm lane"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8 md:p-10">
              <div className="flex items-start gap-3 mb-5">
                <TriangleAlert className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-white">Important Safety Advice</h3>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  If your wheels are spinning without progress, stop trying to drive out. Repeated attempts can cause
                  the vehicle to sink deeper or become damaged.
                </p>
                <p>
                  Keep people away from unstable ground, slopes and moving recovery equipment. Never attempt to
                  attach recovery straps to unsuitable vehicle parts.
                </p>
                <p>
                  If your vehicle is in an unsafe position, move to a safe location where possible and{" "}
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    contact a recovery professional
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Request Off-Road Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Coverage and related services */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Local &amp; Nationwide Coverage</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
                Off-Road Recovery Coverage &amp; Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                AHS Recovery is based in {siteConfig.location}, providing local recovery services across surrounding
                areas within approximately 60 miles. We assess off-road recovery requests in Ilford, Essex, East
                London and nearby locations. Availability depends on the vehicle&apos;s position, ground conditions
                and access for recovery equipment. If your vehicle is stuck beyond our normal local coverage,{" "}
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  contact us
                </Link>{" "}
                with the location and recovery details so we can advise on available options.
              </p>
            </div>
            <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/4x4-recovery-flatbed-loading-country-lane.webp"
                alt="AHS Recovery flatbed loading a recovered 4x4 on a country lane"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-xl font-bold text-slate-900">Related Vehicle Recovery Services</h3>
            <p className="text-slate-500 mt-2">
              Depending on your situation, one of our other{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                recovery services
              </Link>{" "}
              may be more suitable.
            </p>
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
              View All Recovery Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-accent py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-background-dark open:border-primary/40"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-white text-base md:text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Specialist Recovery</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Need 4x4 or Off-Road Recovery?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether your vehicle is stuck in mud, a field, a ditch or another difficult location, AHS Recovery can
          assess your situation and help arrange suitable recovery assistance. Contact our team with your location
          and vehicle details.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now: {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
          >
            Request Off-Road Recovery
          </Link>
        </div>
      </section>
    </main>
  )
}
