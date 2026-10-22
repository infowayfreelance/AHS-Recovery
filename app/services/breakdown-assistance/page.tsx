import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Wrench,
  Zap,
  BatteryCharging,
  Thermometer,
  AlertTriangle,
  CircleAlert,
  Search,
  ClipboardList,
  MessageSquare,
  Truck,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { siteConfig, services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Nationwide Breakdown Recovery | AHS Recovery",
  description:
    "Nationwide breakdown recovery for cars and vans unable to continue their journey. Call AHS Recovery on 07576 614651 for assistance.",
  path: "/services/breakdown-assistance",
  ogTitle: "Nationwide Breakdown Recovery | AHS Recovery",
  ogDescription:
    "Broken down anywhere in the UK? AHS Recovery provides nationwide breakdown recovery for cars and vans, with safe vehicle transportation to your chosen destination.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/breakdown-assistance-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery flatbed collecting a broken-down car on a UK motorway hard shoulder",
  },
})

const trustPoints = ["Nationwide UK Coverage", "Cars and Vans", "Motorway Breakdown Recovery", "Long-Distance Vehicle Transport"]

const situations = [
  {
    icon: Wrench,
    title: "Mechanical Failure",
    description:
      "Engine, gearbox and clutch problems can leave your vehicle unable to move. Our mechanical breakdown recovery service can arrange transport to a garage or another suitable destination.",
  },
  {
    icon: Zap,
    title: "Electrical Faults",
    description:
      "Starter motor, alternator and other electrical problems may prevent your vehicle from starting or continuing its journey. We can arrange vehicle breakdown recovery when further repairs are needed.",
  },
  {
    icon: BatteryCharging,
    title: "Flat or Failed Battery",
    description:
      "A flat battery may only need a jump start. However, if the battery or charging system has failed, full breakdown recovery may be required.",
    linkHref: "/services/jump-starts",
    linkText: "Jump Start Service",
  },
  {
    icon: Thermometer,
    title: "Engine Overheating",
    description:
      "An overheating engine can suffer serious damage if you continue driving. Stop safely, switch off the engine and arrange assistance if the vehicle cannot continue.",
  },
  {
    icon: AlertTriangle,
    title: "Warning Lights or Loss of Power",
    description:
      "Unexpected warning lights, unusual engine noises or a sudden loss of power may indicate a serious fault. Our breakdown recovery service can transport your vehicle for inspection.",
  },
  {
    icon: CircleAlert,
    title: "Wheel or Suspension Damage",
    description:
      "Damaged wheels, tyres, steering or suspension components can make driving unsafe. We assess the vehicle's condition before arranging suitable recovery equipment.",
  },
]

const safetySteps = [
  {
    title: "Stop in a Safe Location",
    description: "If possible and safe, move your vehicle away from moving traffic. Do not continue driving if you suspect serious mechanical damage.",
  },
  {
    title: "Use Hazard Warning Lights",
    description: "Switch on your hazard warning lights to alert other drivers. Use sidelights when visibility is poor, where appropriate.",
  },
  {
    title: "Move Away from Traffic",
    description: "Leave the vehicle from the side furthest from traffic when it is safe. Keep passengers away from moving vehicles and behind a safety barrier where available.",
  },
  {
    title: "Avoid Unsafe Repairs",
    description: "Do not attempt roadside repairs in dangerous locations, particularly beside fast-moving traffic. If there is immediate danger, contact the emergency services.",
  },
  {
    title: "Request Breakdown Recovery",
    description: "Once you are safe, call AHS Recovery and provide your location, vehicle details and a description of the fault.",
  },
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain what happened. Let us know whether your vehicle has stopped completely or cannot be driven safely.`,
  },
  {
    number: "2",
    title: "Share Your Location and Details",
    description:
      "Provide your postcode, road name or nearby junction, your vehicle make and model, the nature of the fault, and whether it can roll, steer and brake.",
  },
  {
    number: "3",
    title: "Recovery Assessment",
    description:
      "We assess the vehicle's size, condition, accessibility and recovery requirements, then determine suitable recovery equipment and confirm your destination.",
  },
  {
    number: "4",
    title: "Vehicle Collection and Transportation",
    description:
      "We arrange collection, secure your vehicle for transportation and take it to the agreed garage, home, storage facility or another suitable destination.",
  },
]

const vehicleTypes = [
  "Cars and family vehicles",
  "Small and medium-sized vans",
  "SUVs and 4x4 vehicles",
  "Non-running vehicles",
  "Vehicles with mechanical or electrical faults",
  "Vehicles with wheel or suspension damage",
]

const benefits = [
  {
    icon: Search,
    title: "Nationwide Coverage",
    description: "We provide breakdown recovery and vehicle transportation for suitable vehicles across the UK.",
  },
  {
    icon: Truck,
    title: "Suitable Recovery Equipment",
    description: "Our fleet ranges from 4x4 recovery trailers to 18-tonne recovery lorries, allowing us to assess different vehicle recovery requirements.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We discuss your location, vehicle condition, collection arrangements and destination before arranging recovery.",
  },
  {
    icon: ClipboardList,
    title: "Careful Vehicle Transportation",
    description: "We assess loading requirements and arrange suitable equipment to help transport your vehicle safely.",
  },
]

const relatedServices = [
  {
    slug: "motorway-breakdown-recovery",
    title: "Motorway Breakdown Recovery",
    description: "Dedicated recovery assistance for vehicles unable to continue on motorways and major roads.",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "Practical support for common roadside problems that may not require full vehicle transportation.",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Vehicle Transportation & Delivery",
    description: "Planned nationwide collection and transportation for suitable roadworthy and non-running vehicles.",
  },
]

const faqs = [
  {
    question: "Do you provide nationwide breakdown recovery?",
    answer:
      "Yes. AHS Recovery provides nationwide breakdown recovery for suitable cars, vans and other vehicles across the UK, subject to vehicle condition, accessibility and recovery requirements.",
  },
  {
    question: "Can you recover a car that will not start?",
    answer:
      "Yes. We can arrange non-running vehicle recovery when your car cannot start or roadside repairs are not possible. Contact us with the vehicle details and location.",
  },
  {
    question: "Do you provide breakdown recovery for vans?",
    answer:
      "Yes. Our van breakdown recovery service can assist with many small and medium-sized vans. Please provide the vehicle's approximate weight, dimensions and condition when calling.",
  },
  {
    question: "Can you recover my vehicle after a motorway breakdown?",
    answer:
      "Yes. We offer motorway breakdown recovery for suitable vehicles. Follow official motorway safety guidance and contact us once you are in a safe position.",
  },
  {
    question: "Where can you take my broken-down vehicle?",
    answer: "We can transport your vehicle to an agreed garage, home, storage facility or another accessible destination in the UK.",
  },
  {
    question: "What information do I need when requesting breakdown recovery?",
    answer:
      "Please provide your exact location, vehicle make and model, the problem you are experiencing, and your preferred recovery destination. Also mention damaged wheels or access restrictions that may affect loading.",
  },
]

export default function BreakdownAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Breakdown Recovery",
    serviceType: "Breakdown Recovery and Vehicle Transportation",
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    url: `${siteConfig.siteUrl}/services/breakdown-assistance`,
    description:
      "Nationwide breakdown recovery for cars, vans and suitable vehicles, including mechanical failures, electrical faults and non-running vehicle transportation.",
    areaServed: "United Kingdom",
    telephone: siteConfig.phoneTel,
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
        name: "Breakdown Assistance",
        item: `${siteConfig.siteUrl}/services/breakdown-assistance`,
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
          src="/images/breakdown-recovery-flatbed-workshop-collection.webp"
          alt="AHS Recovery flatbed delivering a broken-down vehicle to the workshop"
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
              Breakdown Help Across the UK
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Nationwide Breakdown Recovery Service
            </h1>

            <div className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed space-y-4">
              <p>
                Broken down and unable to continue your journey? AHS Recovery provides nationwide breakdown recovery
                for cars, vans and other suitable vehicles across the UK.
              </p>
              <p>
                Whether your vehicle has suffered an engine failure, electrical fault or unexpected mechanical
                problem, we can arrange suitable recovery equipment and transport your vehicle to an agreed garage,
                home or another accessible destination.
              </p>
              <p>
                Based in {siteConfig.location}, we provide local breakdown recovery within approximately 60 miles,
                alongside nationwide car recovery and{" "}
                <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
                  long-distance vehicle transportation
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex-1 whitespace-nowrap bg-primary text-background-dark px-6 py-4 rounded-lg font-black text-base flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Call Now: {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex-1 whitespace-nowrap bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-lg font-bold text-base transition-colors text-center flex items-center justify-center"
              >
                Request Breakdown Recovery
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

      {/* Common breakdown problems */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Common Vehicle Breakdown Problems
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle breakdown can happen without warning. Our car breakdown recovery service helps when your
                  vehicle cannot be repaired at the roadside or is unsafe to drive.
                </p>
                <p>
                  Before arranging recovery, we ask for your exact location, vehicle details, the symptoms of the
                  breakdown and your preferred destination. This helps us select the suitable{" "}
                  <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                    vehicle recovery
                  </Link>{" "}
                  equipment before dispatch.
                </p>
              </div>
              <Link
                href="/services/vehicle-recovery"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Explore Our Vehicle Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/breakdown-recovery-night-city-dolly.webp"
                alt="AHS Recovery technician using a dolly to recover a broken-down vehicle at night"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {situations.map((situation) => (
              <div key={situation.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{situation.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {situation.description}
                    {situation.linkHref && (
                      <>
                        {" "}
                        For battery-related problems, explore our{" "}
                        <Link href={situation.linkHref} className="text-primary font-semibold hover:underline">
                          {situation.linkText}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate assistance CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Broken Down and Need Recovery?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Move to a safe place where possible and call AHS Recovery on {siteConfig.phoneDisplay}. Tell us your
              location, vehicle type, direction of travel and what happened before the vehicle stopped.
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

      {/* What to do if you break down */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Your Safety Comes First</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">What to Do If You Break Down</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Your safety should always come first. If your vehicle breaks down, follow these five steps before
              arranging breakdown assistance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/breakdown-recovery-motorway-hard-shoulder.webp"
                alt="AHS Recovery flatbed collecting a broken-down vehicle from a motorway hard shoulder"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl border-2 border-primary/30 bg-background-dark p-8 md:p-10 order-2 lg:order-1">
              <ol className="space-y-6">
                {safetySteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-bold mb-1">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {index === safetySteps.length - 1 ? (
                          <>
                            Once you are safe,{" "}
                            <Link href="/contact" className="text-primary font-medium hover:underline">
                              call AHS Recovery
                            </Link>{" "}
                            and provide your location, vehicle details and a description of the fault.
                          </>
                        ) : (
                          step.description
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong className="text-slate-300">Important Safety Advice:</strong> If your vehicle breaks down on
                  a{" "}
                  <Link href="/services/motorway-breakdown-recovery" className="text-primary font-medium hover:underline">
                    motorway
                  </Link>
                  , follow official motorway safety instructions. Never place yourself or your passengers at risk
                  while waiting for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              How Our Breakdown Recovery Works
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Our nationwide vehicle recovery process is straightforward. We collect the details needed to assess
              your situation and arrange suitable transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-navy-accent border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm max-w-[240px]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Request Breakdown Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Nationwide coverage */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">UK-Wide Assistance</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Nationwide Breakdown Recovery Across the UK
            </h2>
            <p className="text-slate-400 leading-relaxed">
              AHS Recovery provides nationwide breakdown assistance and vehicle transportation for suitable cars,
              vans, SUVs and 4x4s. Our base is in {siteConfig.location}, where we also provide local vehicle recovery
              across East London and surrounding areas within approximately 60 miles.
            </p>
          </div>

          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto">
            <Image
              src="/images/breakdown-recovery-countryside-misty-flatbed.webp"
              alt="AHS Recovery flatbed transporting a car on a misty countryside road"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 mb-10">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-lg font-bold text-white mb-3">Local Breakdown Recovery</h3>
              <p className="text-slate-400 leading-relaxed">
                We assist with vehicle breakdown recovery in {siteConfig.location}, East London and nearby areas.
                Whether your vehicle breaks down near home, at work or during a local journey,{" "}
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  contact us
                </Link>{" "}
                with your location and recovery requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-lg font-bold text-white mb-3">Long-Distance Breakdown Recovery</h3>
              <p className="text-slate-400 leading-relaxed">
                If your vehicle breaks down away from home, our nationwide car recovery service can arrange{" "}
                <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
                  transportation
                </Link>{" "}
                to an agreed destination elsewhere in the UK. Long-distance car recovery can be useful when roadside
                repairs are not possible, a nearby garage cannot complete the repair, or you need your vehicle
                returned closer to home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle types */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Cars, Vans and Other Suitable Vehicles
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Our recovery service can assist with the following vehicle types, subject to their dimensions, weight,
              condition and accessibility.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/breakdown-recovery-jump-start-sunrise.webp"
                alt="AHS Recovery technician giving a customer's van a jump start at sunrise"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
              <ul className="space-y-3 mb-6">
                {vehicleTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
                Recovery depends on the vehicle&apos;s dimensions, weight, condition and accessibility. Provide the
                vehicle make, model and approximate size when calling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Why Choose AHS Recovery?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Other Recovery Options</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Related Recovery Services</h2>
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
      <section className="bg-navy-accent py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Breakdown Recovery FAQs</h2>
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
                  {faq.question === "Can you recover my vehicle after a motorway breakdown?" ? (
                    <>
                      Yes. We offer{" "}
                      <Link href="/services/motorway-breakdown-recovery" className="text-primary font-medium hover:underline">
                        motorway breakdown recovery
                      </Link>{" "}
                      for suitable vehicles. Follow official motorway safety guidance and contact us once you are in
                      a safe position.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Nationwide Assistance</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Need Nationwide Breakdown Recovery?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          If your car or van has broken down and cannot continue safely, AHS Recovery can help arrange suitable
          breakdown recovery and vehicle transportation. Whether you need local recovery around{" "}
          {siteConfig.location} or long-distance vehicle recovery across the UK, contact our team with your location
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
            Request Breakdown Recovery
          </Link>
        </div>
      </section>
    </main>
  )
}
