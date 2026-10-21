import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  ChevronDown,
  AlertTriangle,
  TriangleAlert,
  PowerOff,
  CircleAlert,
  Car,
  CarFront,
  Warehouse,
  Search,
  ClipboardList,
  MessageSquare,
  Truck,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Professional Accident Recovery Service | AHS Recovery",
  description:
    "Accident recovery for damaged cars and vans. Call AHS Recovery on 07576 614651 for careful vehicle collection and transportation.",
  path: "/services/accident-recovery",
  ogTitle: "Accident Recovery Ilford & Essex | AHS Recovery",
  ogDescription:
    "Need accident recovery in Ilford or Essex? AHS Recovery provides careful collection and transportation for accident-damaged cars and vans.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/accident-recovery-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery flatbed loading an accident-damaged van outside the workshop in Ilford",
  },
})

const safetySteps = [
  {
    title: "Stop Safely",
    description: "Stop your vehicle as soon as it is safe and switch off the engine. Use hazard warning lights when appropriate.",
  },
  {
    title: "Check for Injuries",
    description: "Check yourself and your passengers for injuries. Call 999 if anyone is injured or there is immediate danger.",
  },
  {
    title: "Move to Safety",
    description: "If it is safe, move away from traffic and damaged vehicles. Do not stand between vehicles or near unstable debris.",
  },
  {
    title: "Follow Official Instructions",
    description: "Follow instructions from police, emergency services or road authorities. Do not move the vehicle if its removal has not been authorised.",
  },
  {
    title: "Arrange Accident Recovery",
    description: "Once the scene is safe and vehicle removal is permitted, contact AHS Recovery and provide your location and vehicle details.",
  },
]

const situations = [
  {
    icon: TriangleAlert,
    title: "Minor Collision Damage",
    description: "Even a minor accident can cause hidden mechanical or structural problems. We can recover vehicles that may be unsafe to drive following a collision.",
  },
  {
    icon: PowerOff,
    title: "Non-Running Vehicle Recovery",
    description: "If your engine will not start after an accident, we can assess the vehicle and arrange suitable transportation to a garage or another agreed destination.",
  },
  {
    icon: CircleAlert,
    title: "Damaged Wheels or Suspension",
    description: "Accidents can damage tyres, wheels, steering and suspension components. These vehicles may need additional preparation or equipment for careful loading.",
  },
  {
    icon: Car,
    title: "Bodywork Damage",
    description: "Broken bumpers, loose panels and damaged bodywork can make driving unsafe. We assess visible damage and consider any loose components before collection.",
  },
  {
    icon: CarFront,
    title: "Single-Vehicle Accident Recovery",
    description: "We assist with suitable cars and vans involved in single-vehicle accidents, once the scene is safe, accessible and cleared for recovery.",
  },
  {
    icon: Warehouse,
    title: "Post-Accident Garage Transportation",
    description: "We transport accident-damaged vehicles to an agreed garage, repair centre, storage facility, home or another suitable destination.",
  },
]

const situationLinkedDescriptions: Record<string, ReactNode> = {
  "Minor Collision Damage": (
    <>
      Even a minor accident can cause hidden mechanical or structural problems. We can{" "}
      <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
        recover vehicles
      </Link>{" "}
      that may be unsafe to drive following a collision.
    </>
  ),
  "Non-Running Vehicle Recovery": (
    <>
      If your engine will not start after an accident, we can assess the vehicle and arrange{" "}
      <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
        suitable transportation
      </Link>{" "}
      to a garage or another agreed destination.
    </>
  ),
  "Damaged Wheels or Suspension": (
    <>
      Accidents can damage tyres, wheels, steering and suspension components. These vehicles may need additional
      preparation or{" "}
      <Link href="/about" className="text-primary font-medium hover:underline">
        equipment
      </Link>{" "}
      for careful loading.
    </>
  ),
  "Bodywork Damage": (
    <>
      Broken bumpers, loose panels and damaged bodywork can make driving unsafe. We assess visible damage and
      consider any loose components before{" "}
      <Link href="/contact" className="text-primary font-medium hover:underline">
        collection
      </Link>
      .
    </>
  ),
  "Single-Vehicle Accident Recovery": (
    <>
      We assist with suitable{" "}
      <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
        cars and vans
      </Link>{" "}
      involved in single-vehicle accidents, once the scene is safe, accessible and cleared for recovery.
    </>
  ),
  "Post-Accident Garage Transportation": (
    <>
      We transport accident-damaged vehicles to an agreed garage, repair centre,{" "}
      <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
        storage facility, home
      </Link>{" "}
      or another suitable destination.
    </>
  ),
}

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Once the accident scene is safe, call ${siteConfig.phoneDisplay} to request accident recovery assistance.`,
  },
  {
    number: "2",
    title: "Share Vehicle Details",
    description: "Provide your exact location, vehicle make and model, visible damage and intended destination. Photographs can help, but only take them when it is safe.",
  },
  {
    number: "3",
    title: "Recovery Assessment",
    description: "We assess the vehicle's condition, weight, access restrictions and loading requirements to select suitable recovery equipment.",
  },
  {
    number: "4",
    title: "Collection and Transportation",
    description: "Once vehicle removal is permitted, we arrange careful loading, secure the vehicle and transport it to your agreed destination.",
  },
]

const benefits = [
  {
    icon: Search,
    title: "Vehicle Condition Assessment",
    description: "We review visible damage and check whether the vehicle can roll, steer and brake before deciding how it should be recovered.",
  },
  {
    icon: Truck,
    title: "Suitable Recovery Equipment",
    description: "Our recovery fleet includes equipment ranging from 4x4 recovery trailers to 18-tonne recovery lorries. We select a suitable recovery method based on the vehicle and circumstances.",
  },
  {
    icon: ClipboardList,
    title: "Careful Loading and Transport",
    description: "We consider damaged components, vehicle stability and access restrictions before loading. The vehicle is then secured for transportation.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We discuss collection arrangements, recovery requirements and the intended destination before transportation begins.",
  },
]

const processLinkedDescriptions: Record<string, ReactNode> = {
  "Share Vehicle Details": (
    <>
      Provide your exact location, vehicle make and model, visible damage and{" "}
      <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
        intended destination
      </Link>
      . Photographs can help, but only take them when it is safe.
    </>
  ),
  "Recovery Assessment": (
    <>
      We assess the vehicle&apos;s condition, weight, access restrictions and loading requirements to select
      suitable{" "}
      <Link href="/about" className="text-primary font-medium hover:underline">
        recovery equipment
      </Link>
      .
    </>
  ),
}

const benefitLinkedDescriptions: Record<string, ReactNode> = {
  "Suitable Recovery Equipment": (
    <>
      Our recovery fleet includes equipment ranging from{" "}
      <Link href="/services/4x4-off-road-recovery" className="text-primary font-medium hover:underline">
        4x4 recovery trailers
      </Link>{" "}
      to 18-tonne recovery lorries. We select a suitable recovery method based on the vehicle and circumstances.
    </>
  ),
}

const relatedServices = [
  {
    slug: "rtc-recovery",
    title: "RTC Recovery",
    description: "Recovery support for road traffic collisions involving active accident scenes, multiple vehicles or more complex incident requirements.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "For severely damaged, overturned, difficult-to-access or heavily damaged vehicles requiring specialist lifting, extraction or loading equipment.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "General vehicle recovery for broken-down, damaged and non-running vehicles that need transportation.",
  },
]

const faqs = [
  {
    question: "When should an accident-damaged vehicle be recovered?",
    answer: "A vehicle should be recovered if damage to its wheels, steering, suspension, brakes, bodywork or mechanical systems makes it unsafe to drive.",
  },
  {
    question: "Can you recover a car that will not start after an accident?",
    answer: "Yes. We can assist with many non-running accident-damaged vehicles once the scene is safe and suitable recovery access is available.",
  },
  {
    question: "Can you recover a vehicle with damaged or locked wheels?",
    answer: "Many vehicles with damaged or locked wheels can be recovered using suitable equipment. The recovery method depends on the vehicle's condition and accessibility.",
  },
  {
    question: "Can you move a vehicle before the police finish at the accident scene?",
    answer: "No. Vehicle removal must wait until police, emergency services or relevant authorities have permitted it, where their clearance is required.",
  },
  {
    question: "Where can you transport my accident-damaged vehicle?",
    answer: "We can arrange transportation to an agreed garage, repair centre, storage facility, home or another suitable destination.",
  },
  {
    question: "What is the difference between accident recovery and specialist accident recovery?",
    answer: "Standard accident recovery covers suitable damaged cars and vans that can be collected using normal recovery procedures. Specialist accident recovery is intended for more complex situations involving severe damage, overturned vehicles or difficult extraction.",
  },
]

export default function AccidentRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accident Recovery",
    serviceType: "Accident Vehicle Recovery",
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    url: `${siteConfig.siteUrl}/services/accident-recovery`,
    description:
      "Accident recovery and transportation for damaged, non-running cars and vans in Ilford, Essex and surrounding areas.",
    areaServed: "Ilford, Essex and surrounding areas within approximately 60 miles.",
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
        name: "Accident Recovery",
        item: `${siteConfig.siteUrl}/services/accident-recovery`,
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

      {/* 1. Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[75vh] flex items-center">
        <Image
          src="/images/ahs-accident-recovery-hero-ilford.webp"
          alt="AHS Recovery flatbed loading an accident-damaged van outside the workshop in Ilford"
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
              Careful Post-Accident Vehicle Recovery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Accident Recovery
            </h1>

            <div className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed space-y-4">
              <p>
                If your car or van has been damaged in a road accident and cannot be driven safely, AHS Recovery can
                help. Our professional accident recovery service provides careful collection and transportation of
                accident-damaged vehicles to an agreed garage, repair centre, storage facility or home.
              </p>
              <p>
                We provide car accident recovery and post-accident vehicle recovery for suitable cars and vans.
                Whether your vehicle has minor collision damage, broken wheels or mechanical problems, we assess its
                condition before arranging safe recovery.
              </p>
              <p>
                Based in {siteConfig.location}, we provide local vehicle recovery within approximately 60 miles,
                alongside{" "}
                <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                  nationwide breakdown recovery
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/vehicle-transportation-delivery"
                  className="text-primary font-medium hover:underline"
                >
                  vehicle transportation
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
                Request Accident Recovery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What to Do After an Accident */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Recovery Begins</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">What to Do After an Accident</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Your safety comes first after a road traffic accident. Before arranging accident vehicle recovery,
              follow these important steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/accident-recovery-night-rainy-dolly.webp"
                alt="AHS Recovery technician using a dolly to recover a crash-damaged car at night"
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
                            Once the scene is safe and vehicle removal is permitted,{" "}
                            <Link href="/contact" className="text-primary font-medium hover:underline">
                              contact AHS Recovery
                            </Link>{" "}
                            and provide your location and vehicle details.
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
                  <strong className="text-slate-300">Important:</strong> Do not attempt to drive an accident-damaged
                  vehicle if its steering, brakes, wheels or suspension may be affected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accident Recovery Services We Provide */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Accident Recovery Services We Provide
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              AHS Recovery provides damaged vehicle recovery for different accident situations. We assess vehicle
              damage, accessibility and loading requirements before arranging collection.
            </p>
          </div>

          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto">
            <Image
              src="/images/accident-recovery-residential-street-collection.webp"
              alt="AHS Recovery collecting an accident-damaged car from a residential street"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {situations.map((situation) => (
              <div key={situation.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{situation.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {situationLinkedDescriptions[situation.title] ?? situation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How Our Accident Recovery Works */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">How Our Accident Recovery Works</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Our accident recovery process is designed to make vehicle collection and transportation
              straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[240px]">
                  {processLinkedDescriptions[step.title] ?? step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto">
            <Image
              src="/images/accident-recovery-countryside-sunset-suv.webp"
              alt="AHS Recovery flatbed transporting an accident-damaged SUV at sunset"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Request Accident Recovery
            </a>
          </div>
        </div>
      </section>

      {/* 5. Safe and Reliable Accident Recovery */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Safe and Reliable Accident Recovery
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Accident-damaged vehicles require careful handling. AHS Recovery focuses on safe collection, suitable
              equipment and clear communication throughout the recovery process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {benefitLinkedDescriptions[benefit.title] ?? benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="relative h-56 md:h-full min-h-[260px]">
              <Image
                src="/images/accident-recovery-countryside-winch-misty.webp"
                alt="AHS Recovery winching an accident-damaged car from a roadside ditch"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Prepared for Every Accident Scene</h3>
              <p className="text-slate-600 leading-relaxed">
                From residential streets to rural roadsides, our recovery vehicles are equipped to collect
                accident-damaged cars and vans safely and transport them to your agreed destination.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border-t border-slate-200 pt-10">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Related Recovery Services</h3>
            <p className="text-slate-500 mb-6">
              Depending on the type of accident, another{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                recovery service
              </Link>{" "}
              may be more suitable.
            </p>
            <div className="space-y-5">
              {relatedServices.map((related) => (
                <div key={related.slug}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="text-primary font-bold hover:underline"
                  >
                    {related.title}
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1">{related.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Accident Recovery FAQs */}
      <section className="bg-navy-accent py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Accident Recovery FAQs</h2>
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
                  {faq.question === "What is the difference between accident recovery and specialist accident recovery?" ? (
                    <>
                      Standard accident recovery covers suitable damaged cars and vans that can be collected using
                      normal recovery procedures.{" "}
                      <Link
                        href="/services/specialist-accident-recovery"
                        className="text-primary font-medium hover:underline"
                      >
                        Specialist accident recovery
                      </Link>{" "}
                      is intended for more complex situations involving severe damage, overturned vehicles or
                      difficult extraction.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-white/10">
            <h3 className="text-white text-2xl md:text-3xl font-black mb-3">Need Accident Recovery Assistance?</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              If your vehicle has been involved in an accident and cannot be driven safely,{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                contact AHS Recovery
              </Link>{" "}
              once the scene is secure. Tell us your vehicle&apos;s location, visible damage and preferred
              destination so we can assess the recovery requirements.
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
                Request Accident Recovery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
