import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import ServicesHero from "@/components/ServicesHero"
import ServicesGrid from "@/components/ServicesGrid"
import ServicesIntro from "@/components/ServicesIntro"
import ServicesCTA from "@/components/ServicesCTA"
import { services, siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Vehicle Recovery Services Ilford & Essex | AHS Recovery",
  description:
    "Towing, breakdown, accident, winch-out, 4x4 and motorway recovery from Ilford, Essex, plus UK-wide vehicle transport and plant haulage. Call 07883 546955.",
  path: "/services",
})

const serviceFaqs = [
  {
    "question": "What recovery services does AHS Recovery offer?",
    "answer": "Towing, breakdown and roadside assistance, jump starts (12V and 24V), vehicle recovery, accident and RTC recovery, specialist accident recovery, winch-out, 4x4 and off-road recovery, motorway breakdown recovery, nationwide vehicle transportation and plant haulage."
  },
  {
    "question": "Where are you based and which areas do you cover?",
    "answer": "We're based at 203 Tiptree Cres, Ilford IG5 0ST. We cover Ilford, Essex and the surrounding areas within approximately 60 miles, and provide breakdown recovery and vehicle transport nationwide."
  },
  {
    "question": "Can you take my vehicle to a garage of my choice?",
    "answer": "Yes. Tell us the destination when you call, whether that's your home, a garage or another agreed address."
  },
  {
    "question": "What vehicles can you recover?",
    "answer": "Cars, vans and light commercial vehicles, plus 4x4s and plant machinery through our 4x4 recovery and plant haulage services. Tell us the vehicle when you call so we can confirm."
  },
  {
    "question": "What information should I have ready when I call?",
    "answer": "Your exact location (postcode, road name or a shared map pin), the vehicle make, model and registration, what has happened, and where you want the vehicle taken."
  }
]

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.siteUrl}/services`,
      },
    ],
  }

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/services#service-list`,
    name: "AHS Recovery services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <section className="bg-white py-24">
          <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
            <div className="blog-content max-w-3xl">
              <h2>Which Recovery Service Do You Need?</h2>
              <ul>
                <li>
                  <strong>Your car has broken down and won&apos;t restart:</strong> start with{" "}
                  <Link href="/services/breakdown-assistance">breakdown assistance</Link> or{" "}
                  <Link href="/services/roadside-assistance">roadside assistance</Link>. If it can&apos;t be fixed where
                  it is, we move to <Link href="/services/vehicle-recovery">vehicle recovery</Link> or{" "}
                  <Link href="/services/towing">towing</Link>.
                </li>
                <li>
                  <strong>Flat battery:</strong> <Link href="/services/jump-starts">jump starts</Link> for 12V and 24V
                  vehicles.
                </li>
                <li>
                  <strong>After a collision:</strong> <Link href="/services/accident-recovery">accident recovery</Link>{" "}
                  or <Link href="/services/rtc-recovery">RTC recovery</Link>. For complex scenes or larger vehicles,{" "}
                  <Link href="/services/specialist-accident-recovery">specialist accident recovery</Link>.
                </li>
                <li>
                  <strong>Stuck in mud, a ditch or a verge:</strong>{" "}
                  <Link href="/services/winch-out-recovery">winch-out recovery</Link>; for 4x4s and off-road ground,{" "}
                  <Link href="/services/4x4-off-road-recovery">4x4 &amp; off-road recovery</Link>.
                </li>
                <li>
                  <strong>Broken down on a motorway:</strong>{" "}
                  <Link href="/services/motorway-breakdown-recovery">motorway breakdown recovery</Link>. Get to safety
                  first. Read <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway">what to do if you break down on a motorway</Link>.
                </li>
                <li>
                  <strong>Planned move, no breakdown:</strong>{" "}
                  <Link href="/services/vehicle-transportation-delivery">vehicle transportation &amp; delivery</Link>{" "}
                  for cars and vans, or <Link href="/services/plant-haulage">plant haulage</Link> for machinery.
                  For a vehicle that cannot be driven, use our{" "}
                  <Link href="/blog/moving-a-non-running-vehicle-uk">planning checklist for moving a non-running vehicle across the UK</Link>.
                </li>
              </ul>
              <p>
                If you are unsure which service applies, explain whether the vehicle starts, rolls and steers, and
                mention any damage or access restrictions. A vehicle on a narrow driveway may need different loading
                arrangements from one in an open parking area. You can also{" "}
                <Link href="/contact">contact AHS Recovery</Link> to discuss the collection and destination.
              </p>
              <h2>How a Recovery Job Works</h2>
              <ol>
                <li>
                  <strong>Call or WhatsApp</strong>{" "}
                  <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a> with your location, the vehicle
                  make and model, and what has happened. You can{" "}
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">send the details on WhatsApp</a>.
                </li>
                <li>
                  <strong>We confirm the right service</strong> and talk you through the next step before anything
                  is arranged.
                </li>
                <li>
                  <strong>We attend</strong> and either help at the roadside or load the vehicle for recovery.
                </li>
                <li>
                  <strong>We deliver the vehicle</strong> to the address you choose, such as your home, a garage or
                  another agreed location.
                </li>
              </ol>
              <p>
                Keep your phone available so collection details can be confirmed. If a garage or another person is
                receiving the vehicle, check that they can provide access and have space for unloading. Tell us about
                any changes to the vehicle&apos;s position or condition before the job is arranged.
              </p>
              <h2>Recovery Around Ilford, Essex and East London</h2>
              <p>
                We&apos;re based in Ilford and cover local recovery across Ilford, Essex and the surrounding areas within
                approximately 60 miles, including Gants Hill, Barkingside, Clayhall, Seven Kings, Goodmayes, Newbury
                Park, Woodford, Romford, Barking, Dagenham and Chigwell. Main routes include the A12, the A406 North
                Circular and the M11. For breakdowns and vehicle transport further afield, we work nationwide.
                Tell us where you are and we&apos;ll confirm.
              </p>
            </div>
          </div>
        </section>
        <ServicesIntro />
        <FAQSection faqs={serviceFaqs} />
        <ServicesCTA />
      </main>
    </>
  )
}
