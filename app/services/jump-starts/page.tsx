import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Car, Truck, Search, ClipboardList, Wrench } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "12V & 24V Jump Start Service | AHS Recovery",
  description:
    "Professional jump starts for suitable 12V and 24V vehicles with flat batteries. Call AHS Recovery on 07883 546955 for assistance.",
  path: "/services/jump-starts",
  ogTitle: "12V & 24V Jump Start Services | AHS Recovery",
  ogDescription:
    "Flat battery or car won't start? AHS Recovery provides professional 12V and 24V jump start assistance for suitable cars, vans and commercial vehicles.",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/jump-starts-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "AHS Recovery technician jump-starting a car roadside beside the branded recovery van",
  },
})

const scenarios = [
  {
    title: "Flat or Dead Battery",
    description:
      "If your battery has lost its charge, your vehicle may struggle to start or fail to respond when you turn the key. Our flat battery assistance service can help assess whether a jump start is suitable.",
  },
  {
    title: "Car Clicking but Not Starting",
    description:
      "A rapid clicking sound when starting your car can indicate a weak battery or an electrical problem. If your car won't start but makes a clicking noise, a battery boost may help, depending on the cause.",
  },
  {
    title: "Lights or Accessories Left On",
    description:
      "Leaving headlights, interior lights or other electrical accessories running while the engine is switched off can drain the battery. Our emergency jump start service can assist when the battery no longer has enough charge to start the engine.",
  },
  {
    title: "Vehicle Not Used for a Long Time",
    description:
      "Cars and vans left parked for several days or weeks may develop a discharged battery. If your car won't start after being parked, our roadside battery assistance service can help assess the problem.",
  },
]

const twelveVItems = [
  "Petrol and diesel cars",
  "Family hatchbacks and saloons",
  "SUVs and 4x4 vehicles",
  "Small vans and light commercial vehicles",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} or send us a WhatsApp message to request vehicle jump start assistance. Tell us whether your car, van or commercial vehicle is unable to start.`,
  },
  {
    number: "2",
    title: "Share Your Vehicle Details",
    description:
      "Provide your exact location, vehicle make and model, and a brief description of the problem. If known, tell us whether your vehicle uses a 12V or 24V battery system.",
  },
  {
    number: "3",
    title: "Battery and Starting Assessment",
    description:
      "We assess the information provided and check whether jump-starting is appropriate for your vehicle. The battery condition, electrical system and any visible safety concerns are considered before an attempt is made.",
  },
  {
    number: "4",
    title: "Jump Start or Recovery",
    description:
      "If suitable, we attempt to restart your vehicle using compatible jump start equipment.",
  },
]

const whyChoose = [
  {
    icon: Car,
    title: "12V and 24V Battery Assistance",
    description:
      "We assess suitable cars, vans and commercial vehicles with 12V and 24V electrical systems, helping customers find the right battery starting assistance.",
  },
  {
    icon: Truck,
    title: "Mobile Roadside Support",
    description:
      "Our mobile car jump start service helps drivers request assistance at an accessible location, without needing to arrange transportation first when a jump start is suitable.",
  },
  {
    icon: Wrench,
    title: "Suitable Jump Start Equipment",
    description:
      "Different batteries and electrical systems require compatible equipment. We consider your vehicle's requirements before attempting a portable battery jump start.",
  },
]

const relatedServices = [
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "For common roadside vehicle problems that may require more than battery starting assistance.",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description:
      "For mechanical breakdowns, electrical faults and other problems that prevent your vehicle from continuing its journey.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description:
      "For non-running or damaged vehicles that need to be transported to a garage, home or another agreed destination.",
  },
]

const faqs = [
  {
    question: "Can you jump-start a car with a completely flat battery?",
    answer:
      "A car with a discharged battery may start with suitable jump start equipment. However, if the battery is damaged, severely deteriorated or has an internal fault, a jump start may not work or may be unsafe.",
  },
  {
    question: "Do you provide both 12V and 24V jump start services?",
    answer:
      "Yes. AHS Recovery provides 12V and 24V vehicle battery jump start assistance for suitable vehicles. The correct equipment depends on the vehicle's electrical system and battery condition.",
  },
  {
    question: "Can you jump-start cars and vans?",
    answer:
      "Yes. Our car and van jump start service covers suitable petrol and diesel vehicles, including many cars, SUVs and light commercial vehicles. Larger commercial vehicles are assessed according to their electrical requirements.",
  },
  {
    question: "What if my car still won't start after a jump start?",
    answer:
      "If your car battery boost does not resolve the problem, the fault may involve the battery, alternator, starter motor or another electrical component. Further diagnosis may be needed. If the vehicle cannot be driven safely, we can discuss breakdown recovery.",
  },
  {
    question: "Is jump-starting safe for modern vehicles?",
    answer:
      "Jump-starting can be safe when the correct equipment and manufacturer-approved procedure are used. Incorrect connections or unsuitable voltage can damage sensitive electronics. Some hybrid and electric vehicles have specific restrictions, so their manufacturer's instructions must be followed.",
  },
  {
    question: "Do you offer emergency mobile jump start assistance?",
    answer:
      "You can contact AHS Recovery to request emergency battery assistance when your vehicle won't start. Availability and recovery arrangements depend on your location, vehicle and circumstances.",
  },
]

export default function JumpStartsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "12V & 24V Jump Start Services",
    serviceType: "Vehicle Battery Jump Start Assistance",
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    url: `${siteConfig.siteUrl}/services/jump-starts`,
    description:
      "Professional 12V and 24V jump start assistance for suitable cars, vans and commercial vehicles with flat or discharged batteries.",
    areaServed: siteConfig.localCoverageArea,
    telephone: siteConfig.phoneTel,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Jump Starts", item: `${siteConfig.siteUrl}/services/jump-starts` },
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

      {/* H1: Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[75vh] flex items-center">
        <Image
          src="/images/jump-start-ahs-branded-van-roadside.webp"
          alt="AHS Recovery technician jump-starting a car roadside beside the branded recovery van"
          fill
          priority
          fetchPriority="high"
          quality={60}
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
              Flat Battery Assistance
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              12V &amp; 24V Jump Start Services
            </h1>

            <div className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed space-y-4">
              <p>
                Car or van won&apos;t start because of a flat battery? AHS Recovery provides professional 12V &amp;
                24V Jump Start assistance for suitable cars, vans and commercial vehicles.
              </p>
              <p>
                Whether your battery has gone flat overnight, your vehicle has been parked for a long time, or
                you&apos;re dealing with an unexpected starting problem, our mobile jump start service can help you
                get moving again.
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
                Request Jump Start Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* H2: When Do You Need a Jump Start? */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Starting Problems</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                When Do You Need a Jump Start?
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A flat or discharged battery is a common reason a vehicle won&apos;t start. However, starting
                  problems can also be caused by electrical or mechanical faults.
                </p>
                <p>Our car battery jump start service can help in several situations.</p>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jump-start-broken-down-car-sunset.webp"
                alt="A driver waiting beside a broken-down car at sunset next to the AHS Recovery van with jump start equipment"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{scenario.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {scenario.title === "Vehicle Not Used for a Long Time" ? (
                    <>
                      Cars and vans left parked for several days or weeks may develop a discharged battery. If your
                      car won&apos;t start after being parked, our{" "}
                      <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                        roadside battery assistance service
                      </Link>{" "}
                      can help assess the problem.
                    </>
                  ) : (
                    scenario.description
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto text-center text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-8">
            Not every starting problem is caused by a flat battery. If your vehicle has a faulty starter motor,
            alternator or another electrical issue, further inspection or recovery may be required.
          </p>
        </div>
      </section>

      {/* H2: Professional 12V & 24V Jump Start Assistance */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Different Battery Systems</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Professional 12V &amp; 24V Jump Start Assistance
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Different vehicles use different electrical systems. AHS Recovery provides 12V battery jump start and
              24V jump start assistance for suitable vehicles, using equipment appropriate to their requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden order-last lg:order-first">
              <Image
                src="/images/jump-start-leads-battery-closeup.webp"
                alt="Jump start leads connected to a car battery on the hard shoulder with a broken-down car in the background"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">12V Car Battery Jump Starts</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Most standard petrol and diesel cars use a 12V electrical system. Our 12V jump start service can
                  assist with suitable:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                  {twelveVItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 leading-relaxed">
                  Whether you need a car jump start after leaving the lights on or help with a discharged battery,
                  we assess the vehicle before connecting jump start equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-lg font-bold text-white mb-3">24V Van and Commercial Vehicle Jump Starts</h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Some larger commercial vehicles use 24V electrical systems and require compatible equipment.
              </p>
              <p className="text-slate-400 leading-relaxed mb-3">
                Our 24V battery jump start service can assist with suitable commercial vehicles, depending on their
                electrical systems and battery condition. This may include certain larger vans and commercial
                vehicles.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Contact us with your vehicle make, model and battery system details so we can confirm whether
                assistance is suitable.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-lg font-bold text-white mb-3">Safe and Suitable Battery Assistance</h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Jump-starting a vehicle incorrectly can damage electrical components or create safety risks. Our
                professional jump start service focuses on checking the vehicle&apos;s requirements, using
                compatible equipment and following suitable safety procedures.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Modern vehicles, including some hybrid and electric models, may have special jump-starting
                instructions. Assistance is subject to the manufacturer&apos;s requirements and the vehicle&apos;s
                condition. If a jump start is not appropriate, we can discuss other options, including{" "}
                <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                  breakdown recovery
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2: How Our Jump Start Service Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              How Our Jump Start Service Works
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Requesting mobile battery jump start assistance is straightforward. We collect the necessary
              information and assess the starting problem before arranging help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-navy-accent border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm max-w-[240px]">
                  {step.number === "4" ? (
                    <>
                      If suitable, we attempt to restart your vehicle using compatible jump start equipment. If the
                      battery boost service does not resolve the problem, we can discuss{" "}
                      <Link href="/services/vehicle-recovery" className="text-primary font-semibold hover:underline">
                        vehicle recovery
                      </Link>{" "}
                      or further mechanical assistance.
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Request Jump Start Assistance
            </a>
          </div>
        </div>
      </section>

      {/* H2: Why Choose AHS Recovery? */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
                Why Choose AHS Recovery?
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                When your vehicle won&apos;t start, you need clear advice and suitable assistance. AHS Recovery
                provides practical roadside jump start support for drivers experiencing battery-related starting
                problems.
              </p>
            </div>
            <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jump-start-technician-customer-consultation.webp"
                alt="AHS Recovery technician discussing jump start assistance with a customer beside the recovery van"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-background-dark p-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10 mb-16">
            <h3 className="text-lg font-bold text-white mb-3">Recovery Options if Your Vehicle Won&apos;t Start</h3>
            <p className="text-slate-400 leading-relaxed mb-3">
              A jump start cannot fix every battery, alternator or starter motor problem.
            </p>
            <p className="text-slate-400 leading-relaxed">
              If your vehicle still cannot start, our team can discuss appropriate recovery arrangements and{" "}
              <Link
                href="/services/vehicle-transportation-delivery"
                className="text-primary font-medium hover:underline"
              >
                transportation
              </Link>{" "}
              to an agreed destination.
            </p>
          </div>

          <div>
            <h3 className="text-center text-lg font-bold text-white mb-8">Related Recovery Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group rounded-2xl border border-white/10 bg-background-dark p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {related.slug === "roadside-assistance" && <Search className="w-5 h-5 text-primary" />}
                    {related.slug === "breakdown-assistance" && <ClipboardList className="w-5 h-5 text-primary" />}
                    {related.slug === "vehicle-recovery" && <Truck className="w-5 h-5 text-primary" />}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2: Jump Start Service FAQs */}
      <section className="bg-white py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Jump Start Service FAQs</h2>
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

          <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-slate-900 text-2xl md:text-3xl font-black mb-3">
              Need 12V or 24V Jump Start Assistance?
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              If your car or van has a flat battery or won&apos;t start,{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                contact AHS Recovery
              </Link>{" "}
              to discuss suitable roadside battery jump start assistance. Tell us your location, vehicle details and
              the symptoms you&apos;re experiencing. We&apos;ll help you understand the available options.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 hover:bg-[#25D366]/15 text-[#1a9c4b] border border-[#25D366]/30 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
              >
                Request Jump Start via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
