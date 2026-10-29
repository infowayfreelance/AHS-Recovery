import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("what-to-do-if-your-car-breaks-down-on-a-motorway")!

export const metadata = buildMetadata({
  title: "What to Do If Your Car Breaks Down on a Motorway in the UK",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}/images/motorway-breakdown-og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "A driver uses a motorway SOS emergency telephone beside a car stopped in an emergency area",
  },
})

const sixSteps = [
  "Leave at the next exit, or pull into a service area, if your car still moves.",
  "If you cannot leave, indicate left and stop in an emergency area or on the hard shoulder, as far left as possible, with your wheels turned left.",
  "Switch on your hazard lights, plus your sidelights in the dark or in poor visibility.",
  "Get out through the doors away from traffic, take your passengers with you and wait behind the safety barrier.",
  "Call National Highways on 0300 123 5000, or use the emergency telephone, then call your recovery company.",
  "If you cannot reach a safe place or cannot get out, stay in the car with your seat belt and hazard lights on, and call 999.",
]

const whereToStop = [
  {
    where: "Service area or exit",
    what: "Leave the motorway. The Highway Code calls a service area the safest place to stop.",
  },
  {
    where: "Hard shoulder",
    what: "Stop as far left as you can, wheels turned left, ideally by an emergency telephone. Leave by the left-hand doors and wait behind the barrier.",
  },
  {
    where: "Emergency area",
    what: "Stop inside it, switch on your hazards and call National Highways. Do not leave without speaking to them.",
  },
  {
    where: "Live lane, or you cannot get out",
    what: "Keep your seat belt and hazard lights on, and call 999.",
  },
]

const whoToCall = [
  {
    where: "England: hard shoulder or emergency area",
    who: "The emergency telephone, or National Highways on 0300 123 5000. Then call your recovery company.",
  },
  {
    where: "Scotland",
    who: "The emergency roadside telephone, which connects you directly to Traffic Scotland. For urgent reports, call Police Scotland on 999.",
  },
  {
    where: "Wales",
    who: "The emergency telephone, or 999 if you are in danger.",
  },
  {
    where: "Live lane, or you cannot get out",
    who: "999. Ask for the police, or press your SOS button.",
  },
  {
    where: "Motorway roadworks",
    who: "999. Press your SOS button if your car has one.",
  },
]

const whatNotToDo = [
  "Do not attempt repairs, not even a wheel change.",
  "Do not place a warning triangle on the carriageway.",
  "Do not go back to your car, even in bad weather.",
  "Do not stop to help another broken-down vehicle. Call National Highways or 999 instead.",
  "Do not leave an emergency area without speaking to National Highways.",
  "Do not stop on the hard shoulder to rest, make a call or swap drivers.",
]

const whatToKeep = [
  {
    item: "Hi-vis jacket",
    why: "You can wear it while you wait, so reach for it before you step out.",
  },
  {
    item: "Warm layers, waterproofs, sturdy footwear",
    why: "RAC advises these for a wait in cold or wet weather.",
  },
  {
    item: "Charged phone with numbers saved",
    why: "It lets you call National Highways and your recovery company.",
  },
  {
    item: "Torch",
    why: "It helps you see in the dark while you wait.",
  },
]

const recoveryDetails = [
  "The road name, your direction of travel and the nearest junction",
  "The marker post or emergency area number, if you can see it",
  "Your vehicle's make, model, registration, size and approximate weight",
  "What the fault is, and whether the car starts, rolls, steers and brakes",
  "How many passengers you have, and where you want the car to go",
]

const faqs = [
  {
    question: "Can you stay in your car on the hard shoulder?",
    answer:
      "No, get out through the left-hand doors and wait behind the barrier. The only exception is when you cannot get out safely, and then you stay belted in with your hazard lights on and call 999.",
  },
  {
    question: "Can you stop on the hard shoulder?",
    answer:
      "Only in a breakdown, an emergency or when police direct you. A phone call, a rest or a toilet break do not count.",
  },
  {
    question: "Do you need breakdown cover to get help on a motorway?",
    answer:
      "No, you can still call a recovery company without cover. Do not buy cover after you break down, because Ageas says online cover usually takes about 24 hours to start. AHS Recovery offers nationwide breakdown assistance.",
  },
  {
    question: "Should you call National Highways or your recovery company first?",
    answer:
      "Call National Highways first on 0300 123 5000, or use the emergency telephone, then call your recovery company. Call 999 first instead if you sit in a live lane or feel in danger.",
  },
  {
    question: "What if you have no mobile signal?",
    answer:
      "Walk to the nearest emergency telephone on your side of the carriageway, and stay behind the barrier. Follow the arrows on the marker posts to find it. National Highways says the telephones sit about a mile apart.",
  },
  {
    question: "Can you choose where your car goes after a motorway recovery?",
    answer:
      "Yes, with a private recovery company you can choose an agreed garage, your home or a storage facility. AHS Recovery confirms the destination before it collects your car.",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function MotorwayBreakdownBlogPost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.siteUrl}/blog/${post.slug}` },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.siteUrl}/images/motorway-breakdown-og-image.jpg`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { "@id": `${siteConfig.siteUrl}/#business` },
    publisher: { "@id": `${siteConfig.siteUrl}/#business` },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[70vh] flex items-end">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          fetchPriority="high"
          quality={60}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/80 to-background-dark" />

        <div className="relative z-10 w-full px-6 md:px-20 lg:px-40 py-16 md:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Motorway Safety</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.15] tracking-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                Last updated{" "}
                <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 md:py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            <article className="blog-content max-w-3xl">
              <p className="text-lg text-slate-700 leading-relaxed">
                A motorway breakdown puts you beside fast-moving traffic with little warning. Your phone signal may
                drop, and every minute on the carriageway raises the risk.
              </p>
              <p>
                This guide shows what to do if your car breaks down on a motorway in the UK. You get clear steps for
                hard shoulders, smart motorways and live lanes, plus who to call.
              </p>

              <h2 id="six-steps">What to do if your car breaks down on a motorway in the UK: the 6 steps</h2>
              <p>
                Leave the motorway if you can, and if you cannot, go left, get behind the barrier and call for help.
              </p>
              <div className="rounded-2xl border-2 border-primary/30 bg-slate-50 p-6 md:p-8 mb-8">
                <ol className="space-y-5 list-none pl-0">
                  {sixSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-slate-700 leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <h2 id="leave-the-motorway">Step 1: Leave the motorway if you can</h2>
              <p>
                Leaving the motorway is the safest choice, so head for the next exit or a service area while your
                car still drives.
              </p>
              <p>
                The Highway Code (rules 275 to 278) names a service area as the safest place to stop on a motorway.
                Lay-bys, emergency areas and hard shoulders also count, but the hard shoulder gives less protection
                because it sits so close to fast traffic.
              </p>
              <p>
                Act on the first warning. National Highways tells drivers to leave at the next exit or enter a
                service area when a red or amber warning light appears.
              </p>

              <h2 id="go-left">Step 2: Go left to an emergency area or the hard shoulder</h2>
              <p>
                If you cannot leave the motorway, go left: indicate, move into the left-hand lane and stop in an
                emergency area, lay-by or on the hard shoulder.
              </p>
              <p>
                Stop as far left as you can, leave room to open the doors and turn your wheels to the left. Try to
                stop just past an emergency telephone. Switch on your hazard lights, plus sidelights in the dark or
                poor visibility.
              </p>

              <div className="blog-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Where you stop</th>
                      <th scope="col">What to do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whereToStop.map((row) => (
                      <tr key={row.where}>
                        <td>{row.where}</td>
                        <td>{row.what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Choose an emergency area over the hard shoulder when you can. National Highways states that about
                one in 20 motorway deaths happen on the hard shoulder, and its latest data shows no deaths in
                emergency areas.
              </p>
              <p>
                Emergency areas sit away from live lanes, have orange surfacing and include an emergency telephone
                linked to a regional control room. Blue signs with an orange SOS telephone symbol mark them.
              </p>

              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/motorway-breakdown-hard-shoulder-m6.webp"
                  alt="A driver on the phone to an emergency telephone beside a car stopped on the M6 hard shoulder"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>

              <h3 id="smart-motorways">
                What if your car breaks down on a smart motorway with no hard shoulder?
              </h3>
              <p>
                On a smart motorway with no hard shoulder, aim for an emergency area or the next exit, because the
                left-hand lane carries live traffic.
              </p>
              <p>
                Move into the left-hand lane, switch on your hazard lights and follow the orange SOS signs to the
                next{" "}
                <Link href="/services/motorway-breakdown-recovery" className="font-semibold hover:underline">
                  emergency area
                </Link>
                . If you cannot reach one, stop as far left as you can, towards the verge or slip road.
              </p>
              <p>
                If you stop in a live lane or cannot get out safely, stay in the car with your seat belt and hazard
                lights on, and call 999. Ask for the police, or press your SOS button if your car has one.
              </p>
              <p>
                A red X above a lane means National Highways has closed it, so never drive in it. After your call,
                the control room can set signs and close the lane around you.
              </p>

              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/motorway-breakdown-dusk-warning-triangle.webp"
                  alt="A red X closes a lane above a motorway at dusk while a driver on the hard shoulder calls for help"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>

              <p>
                Radar stopped vehicle detection helps control rooms spot a stranded car on smart motorways. The
                regulator ORR said in March 2026 that this technology continues to meet national performance
                requirements, after its December 2022 report found it falling short.
              </p>
              <p>
                Treat the technology as a backup, not a plan. Your best protection is still to get out of the live
                lane and call for help.
              </p>

              <h2 id="where-to-stand">Step 3: Where should you stand once you are out?</h2>
              <p>
                Stand behind the safety barrier, well away from your car and the carriageway, and never between your
                car and oncoming traffic.
              </p>
              <p>
                Leave by the doors away from traffic and take your passengers with you. Wear hi-vis clothing if you
                have it within easy reach, and watch for hazards such as drops or debris behind the barrier.
              </p>
              <p>
                Keep children under control and away from the carriageway. Keep dogs and other pets in the car,
                unless an emergency forces you to take them out, and then hold them on the verge.
              </p>
              <p>
                <strong>Do not go back to the car, even in rain, cold or the dark.</strong>
              </p>
              <p>
                Most drivers get this wrong. An RAC survey of 1,900 drivers in October 2023 found that 78% would put
                themselves at risk after stopping on a hard shoulder, and only 22% would stand correctly.
              </p>
              <p>
                In a separate poll of 189 patrols in October 2023, RAC found that 78% of drivers were still inside
                their cars when patrols arrived. RAC advises packing warm layers, waterproofs and sturdy footwear, so
                you can wait outside in cold weather.
              </p>
              <p>
                If a disability stops you getting out, stay in the car with your seat belt and hazard lights on, and
                call 999. Tell the operator about your needs. Deaf, hard of hearing or speech-impaired drivers can
                register for the 999 text service before they travel.
              </p>

              <h2 id="who-to-call">Who should you call first, and what number do you use?</h2>
              <p>
                Call National Highways on 0300 123 5000, or use the emergency telephone, then call your recovery
                company.
              </p>
              <p>
                Use the free emergency telephone if one is close. It connects you directly to a National Highways
                control centre and identifies your location. Face the traffic while you speak, and tell the operator
                if you are alone, older or disabled.
              </p>
              <p>
                Unsure whether to walk to the telephone or use your mobile? Use the telephone if it is close and you
                can reach it behind the barrier. Otherwise, use your mobile and read out the number on the nearest
                marker post or driver location sign.
              </p>

              <div className="blog-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Where you are</th>
                      <th scope="col">Who to call</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whoToCall.map((row) => (
                      <tr key={row.where}>
                        <td>{row.where}</td>
                        <td>{row.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>Northern Ireland publishes its own Highway Code, so check its rules before you drive there.</p>
              <p>
                Save 0300 123 5000 and your{" "}
                <Link href="/contact" className="font-semibold hover:underline">
                  recovery company&apos;s number
                </Link>{" "}
                in your phone before you set off. National Highways advises drivers to store both numbers in
                advance.
              </p>

              <h2 id="recovery-truck">What happens when your recovery truck arrives?</h2>
              <p>
                Your recovery truck can only help once the scene is safe, because National Highways says recovery
                operators should never have to work in a live lane.
              </p>
              <p>
                If you stop in a live lane, expect National Highways to make the scene safe first. It sets signs and
                signals, sends traffic officers or calls the police to protect recovery crews before anyone works
                near your car.
              </p>
              <p>
                Recovery from an emergency area follows the same rule. National Highways encourages operators to
                contact its control room before they pull back onto the carriageway, and you must not leave the area
                without speaking to National Highways.
              </p>
              <p>When you reach a safe spot, give the operator the details that decide which truck to send.</p>
              <ul>
                {recoveryDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p>
                AHS Recovery asks for exactly these details when you call. The team provides{" "}
                <Link href="/services/motorway-breakdown-recovery" className="font-semibold hover:underline">
                  motorway breakdown recovery
                </Link>{" "}
                for cars, small and medium vans, 4x4s, SUVs and non-running vehicles, and it recovers electric and
                automatic cars.
              </p>
              <p>
                Large, modified or heavily loaded vehicles may need an extra assessment. If your car needs towing
                from the safe spot, AHS Recovery tows it to your chosen destination.
              </p>
              <p>
                You choose that destination: an agreed garage, your home or a storage facility. For longer journeys,
                AHS Recovery also offers{" "}
                <Link href="/services/vehicle-transportation-delivery" className="font-semibold hover:underline">
                  nationwide vehicle transportation and delivery
                </Link>
                .
              </p>

              <h2 id="what-not-to-do">What not to do on a motorway</h2>
              <p>
                Do not repair your car, put out a warning triangle or stand between your car and the traffic.
              </p>
              <ul>
                {whatNotToDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/motorway-breakdown-rain-warning-triangle.webp"
                  alt="A warning triangle placed on a wet motorway carriageway in front of a broken-down car — official guidance advises against this"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
                <p className="absolute bottom-0 inset-x-0 bg-background-dark/80 text-slate-300 text-xs px-4 py-2">
                  Official guidance advises against placing a warning triangle on the carriageway — leave the vehicle
                  and wait behind the barrier instead.
                </p>
              </div>

              <h2 id="roadworks">What if you break down in motorway roadworks?</h2>
              <p>
                Call 999 if you break down in motorway roadworks, and press your SOS button if your car has one.
              </p>
              <p>
                National Highways monitors traffic in roadworks closely, but it still tells drivers who break down
                there to call 999 and ask for the police.
              </p>
              <p>
                Some roadworks show free recovery signs. A crew then moves you to a safe place at no charge, but
                that move only takes you out of danger, so you still need a recovery company to take the car on.
              </p>
              <p>
                If a collision caused your breakdown, call 999 if anyone is hurt and wait for the emergency services.
                Then arrange{" "}
                <Link href="/services/accident-recovery" className="font-semibold hover:underline">
                  accident recovery
                </Link>{" "}
                when the scene is clear.
              </p>

              <h2 id="rejoin">How do you rejoin the motorway safely?</h2>
              <p>To rejoin the motorway from a hard shoulder, build up speed, signal and wait for a safe gap.</p>
              <p>Watch for other stopped vehicles, obstructions and debris ahead of you.</p>
              <p>
                From an emergency area, use the emergency telephone and follow the operator&apos;s instructions.
                National Highways may need to close a lane so you can rejoin safely.
              </p>

              <h2 id="what-to-keep">What should you keep in the car?</h2>
              <p>Keep a few simple items in the car so a wait on the verge stays safe and comfortable.</p>
              <div className="blog-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Why it helps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whatToKeep.map((row) => (
                      <tr key={row.item}>
                        <td>{row.item}</td>
                        <td>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Check your tyres, fuel and battery before a long trip. Insurer Ageas lists tyre blowouts, lack of
                fuel and battery faults among the common causes of motorway breakdowns.
              </p>
              <p>
                AHS Recovery offers{" "}
                <Link href="/services/roadside-assistance" className="font-semibold hover:underline">
                  roadside assistance
                </Link>{" "}
                and{" "}
                <Link href="/services/jump-starts" className="font-semibold hover:underline">
                  jump starts for 12V and 24V vehicles
                </Link>{" "}
                if a problem starts before you reach the motorway.
              </p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Broken Down on a Motorway?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Get to a safe place first, then call AHS Recovery for nationwide breakdown recovery.
                </p>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center justify-center gap-2 bg-primary text-background-dark px-5 py-3.5 rounded-lg font-black text-sm hover:scale-[1.02] transition-transform mb-3"
                >
                  <Phone className="w-4 h-4" />
                  Call: {siteConfig.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-3.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Request Recovery
                </Link>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7">
                <h2 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-3">Related Reading</h2>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/services/motorway-breakdown-recovery" className="text-primary font-medium hover:underline">
                      Motorway Breakdown Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                      Nationwide Breakdown Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                      Roadside Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vehicle-recovery" className="text-primary font-medium hover:underline">
                      Vehicle Recovery
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-accent py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">FAQs</h2>
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
                  {faq.question === "Do you need breakdown cover to get help on a motorway?" ? (
                    <>
                      No, you can still call a recovery company without cover. Do not buy cover after you break
                      down, because Ageas says online cover usually takes about 24 hours to start. AHS Recovery
                      offers{" "}
                      <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                        nationwide breakdown assistance
                      </Link>
                      .
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
      <section className="relative overflow-hidden py-20 md:py-28 text-center px-6">
        <Image
          src="/images/motorway-breakdown-sunset-sos-phone-call.webp"
          alt="A driver calls for help from a motorway SOS telephone at sunset while a passenger waits behind the barrier"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Need Motorway Recovery?</span>
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Call AHS Recovery</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Give your road, direction of travel and nearest junction, and the team will assess the recovery. AHS
            Recovery works from {siteConfig.location}, and recovers suitable cars and vans across the UK, 24/7.
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
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
            >
              Request Recovery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
