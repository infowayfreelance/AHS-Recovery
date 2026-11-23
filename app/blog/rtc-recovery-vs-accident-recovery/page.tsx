import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("rtc-recovery-vs-accident-recovery")!

export const metadata = buildMetadata({
  title: "RTC Recovery vs Accident Recovery: What's the Difference?",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}${post.heroImage}`,
    width: 1600,
    height: 900,
    alt: post.heroImageAlt,
  },
})

const faqs = [
  {
    "question": "What does RTC mean when booking recovery?",
    "answer": "RTC means road traffic collision. Tell the operator whether the vehicle is still at the incident location, whether anyone is managing the scene and whether removal has been permitted. Those details help explain the collection."
  },
  {
    "question": "How is RTC recovery different from accident recovery?",
    "answer": "RTC recovery focuses on removal following a collision at the scene. Accident recovery also covers planned collection of a damaged vehicle from another location. The vehicle may need a specialist loading method in either situation."
  },
  {
    "question": "Does a damaged car always need specialist recovery?",
    "answer": "No. The operator needs to assess its condition and access. Locked or broken wheels, unstable positioning and restricted loading space are reasons to discuss a specialist approach, rather than assuming a standard collection will work."
  },
  {
    "question": "Can I book collection directly after a collision?",
    "answer": "You can discuss recovery once people are safe and removal is permitted. Follow any scene instructions and check your insurer's arrangements. Confirm who is authorising the job, the destination and the quote before booking."
  },
  {
    "question": "What if the car cannot roll or steer?",
    "answer": "Tell the operator before arranging collection. Describe the damaged or locked wheels, available space and whether the keys are present. A different loading approach may be possible, but the job needs assessment before it can be confirmed."
  },
  {
    "question": "Which photographs help with a recovery request?",
    "answer": "Where safe, send a view of the whole vehicle, the damaged areas, the wheels and the approach to it. Stay out of traffic and unsafe areas. Do not put yourself at risk to obtain a photograph."
  },
  {
    "question": "Can the vehicle be delivered to my chosen garage?",
    "answer": "Discuss the garage when booking and confirm it can receive the vehicle. Provide the address, receiving contact and any unloading restrictions. Check relevant insurer instructions before agreeing where the car should go."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function RtcRecoveryComparisonBlogPost() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "RTC Recovery, Accident Recovery or Specialist Recovery? A Clear Comparison",
  "description": "RTC recovery, accident recovery and specialist accident recovery compared: what each covers, when you need it, what to tell the operator and what happens next.",
  "image": "https://ahsrecovery.co.uk/images/rtc-vs-accident-recovery-featured.webp",
  "datePublished": "2026-11-22",
  "dateModified": "2026-11-23",
  "author": {
    "@type": "Organization",
    "name": "AHS Recovery",
    "url": "https://ahsrecovery.co.uk/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AHS Recovery",
    "url": "https://ahsrecovery.co.uk/"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ahsrecovery.co.uk/blog/rtc-recovery-vs-accident-recovery"
  },
  "url": "https://ahsrecovery.co.uk/blog/rtc-recovery-vs-accident-recovery",
  "inLanguage": "en-GB"
}
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ahsrecovery.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://ahsrecovery.co.uk/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "RTC Recovery, Accident Recovery or Specialist Recovery? A Clear Comparison",
      "item": "https://ahsrecovery.co.uk/blog/rtc-recovery-vs-accident-recovery"
    }
  ]
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Collision Recovery</span>
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
              <p>A damaged car may need collecting from a collision scene, a repairer&#x27;s yard or an awkward position off the road. Calling each job accident recovery does not explain the access, the damage or whether the vehicle can be loaded normally.</p>
              <p>This guide compares RTC recovery vs accident recovery and explains where specialist recovery fits. Use the decision questions, collection checklist and handover plan to describe your situation clearly. Safety comes before arranging transport, and the operator must assess the particular job.</p>
              <h2>Summary: three terms, two things to describe</h2>
              <p>The distinction depends on the scene and the vehicle&#x27;s condition. RTC recovery focuses on removal following a road traffic collision; accident recovery describes moving a damaged vehicle; specialist accident recovery addresses loading or access difficulties that require additional planning.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Question</th><th>RTC recovery</th><th>Accident recovery</th><th>Specialist accident recovery</th></tr></thead><tbody><tr><td>What starts the request?</td><td>A vehicle needs removing following a collision on or near a road</td><td>An accident-damaged vehicle needs collecting or moving on</td><td>Damage, position or access makes ordinary loading unsuitable</td></tr><tr><td>What needs confirming first?</td><td>Whether the scene is safe and removal is permitted</td><td>The collection arrangements and receiving address</td><td>How the vehicle can be reached, supported and loaded</td></tr><tr><td>Where might it be?</td><td>At the incident location</td><td>At a garage, car park, home or other agreed collection point</td><td>At a scene or a later collection point</td></tr><tr><td>What should you describe?</td><td>Traffic, scene management and vehicle position</td><td>Condition, keys, access and destination</td><td>Non-rolling wheels, instability and restricted space</td></tr></tbody></table></div>
              <p>These descriptions can overlap. A car at an RTC scene may also need a specialist loading method. Tell the operator both where it is and what condition it is in, rather than choosing a label and leaving out the details.</p>
              <h2>Definitions: what each service involves</h2>
              <p>The service name gives a starting point for the call, but it does not replace an assessment. The information below helps you explain what needs doing without guessing which equipment should attend.</p>
              <h3>What is RTC recovery?</h3>
              <p>RTC means road traffic collision. An RTC recovery request concerns a vehicle that needs removing after a collision on or near a road, where traffic, other vehicles or the people managing the scene may affect the work.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/rtc-scene-cones-recovery-waiting.webp" alt="Recovery truck waiting at a coned-off road traffic collision scene" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>The immediate question is whether recovery can begin. A vehicle might be blocking access, sitting beside moving traffic or waiting for instructions from emergency services. Describe those circumstances before discussing the delivery address.</p>
              <p>If someone is managing the scene, follow their directions and establish whether removal has been permitted. Do not ask a recovery operator to start work in an area that remains unsafe or restricted.</p>
              <p>The <Link href="/services/rtc-recovery" className="font-semibold hover:underline">RTC recovery service</Link> is the relevant starting point for discussing a collision-scene collection. Explain whether the vehicle remains where the impact occurred or has already been moved elsewhere.</p>
              <h3>What is accident recovery?</h3>
              <p>Accident recovery is the collection of a vehicle damaged in an incident. For a planned collection after the scene has been dealt with, the main task is arranging safe loading and transport to a confirmed destination.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/accident-damaged-car-car-park-collection.webp" alt="Accident-damaged car in a car park being prepared for collection" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>The car could be waiting in a car park, at home, at a repair centre or in storage. It may need its first journey away from the incident, or a further move after an initial assessment.</p>
              <p>Being parked somewhere quieter does not mean the vehicle is ready for standard loading. Mention wheel damage, a missing key or a steering problem even if traffic is no longer a concern.</p>
              <p>See <Link href="/services/accident-recovery" className="font-semibold hover:underline">accident recovery</Link> when planning the collection of a damaged car or van. Ask the collection site to confirm access and release arrangements before booking a move from its premises.</p>
              <h3>What is specialist accident recovery?</h3>
              <p>Specialist accident recovery concerns a vehicle whose condition or position calls for a different approach to loading. The problem might be severe damage, a wheel that cannot turn, instability or an awkward approach to the vehicle.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/specialist-recovery-non-rolling-vehicle.webp" alt="Non-rolling damaged car being winched onto a flatbed using wheel skates" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>For example, a car with damaged suspension may need planning beyond a simple drive-on collection. A vehicle partly off the road may need repositioning before transport can be considered. These are details to report, rather than reasons to attempt moving it yourself.</p>
              <p>Send photographs only when you can take them safely. Include the surrounding space as well as the damage, so the operator can understand the route to the vehicle and where loading might take place.</p>
              <p>Ask about <Link href="/services/specialist-accident-recovery" className="font-semibold hover:underline">specialist accident recovery</Link> and explain the difficulty. If the vehicle needs freeing from soft ground or a ditch first, <Link href="/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery</Link> may also be relevant, subject to assessment.</p>
              <h2>How to decide which service you need</h2>
              <p>Use the scene to describe the urgency and the vehicle&#x27;s condition to describe the loading problem. You can give both answers in the same call; you do not need to decide the recovery method yourself.</p>
              <ol><li><strong>Is the incident location still being managed?</strong> Say whether emergency services or road authorities are present, whether traffic is nearby and whether anyone has authorised removal.</li><li><strong>Has the vehicle reached a safe collection point?</strong> Give that address and explain who controls access or holds the keys.</li><li><strong>Can the wheels turn and can it steer?</strong> Report what you know. Do not test a damaged vehicle just to complete the checklist.</li><li><strong>Is anything making access difficult?</strong> Mention slopes, low entrances, gates, narrow approaches or the position of the car.</li></ol>
              <p>If you are unsure, say so. Describe visible facts, such as a wheel sitting at an unusual angle, instead of giving a mechanical diagnosis. The operator can ask follow-up questions before confirming the proposed job.</p>
              <h2>First priorities at the scene</h2>
              <p>Arrange recovery after dealing with immediate danger. Call 999 if anyone is injured or there is an immediate threat to safety, and follow emergency-service instructions.</p>
              <p>Switch off the engine and use hazard lights where appropriate. Keep people away from traffic when safe to do so. Do not move a badly damaged vehicle if the attempt could create another danger.</p>
              <p>On a motorway, if you cannot reach relative safety and cannot leave safely, remain belted in with hazards on and call 999 for police. Never place a warning triangle on a motorway or attempt roadside repairs there.</p>
              <p>The <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold hover:underline">Highway Code</a> provides the detailed scene and motorway guidance. For an accident involving damage or injury, <a href="https://www.gov.uk/vehicle-insurance/if-youre-in-an-accident" className="font-semibold hover:underline">GOV.UK</a> explains the duty to exchange details, report to police where required and notify your insurer. Recovery does not replace those responsibilities.</p>
              <h2>Details to provide when requesting recovery</h2>
              <p>Give the operator a collection brief that covers the location, vehicle and intended journey. Missing details can change the loading plan, so explain uncertainties before the booking is confirmed.</p>
              <h3>Location and access</h3>
              <ul><li>Supply the road name, direction of travel, junction, postcode or a map pin.</li><li>Describe whether the car is in a lane, on a verge, behind gates or inside a car park.</li><li>Identify any site entrance, height restriction, steep approach or limited loading space.</li><li>Give the collection contact and say whether the scene or site has permitted removal.</li></ul>
              <h3>Vehicle and condition</h3>
              <ul><li>Provide the make, model, registration and whether it is a car, van or another vehicle.</li><li>State the fuel type, including hybrid or electric, without assuming the recovery method.</li><li>Describe visible bodywork, wheel or suspension damage.</li><li>Explain whether it starts, rolls, steers and brakes, where known.</li><li>Mention missing keys, locked wheels, leaking fluids or loose debris.</li></ul>
              <h3>Destination and receiving arrangements</h3>
              <ul><li>Give the full receiving address and a contact there.</li><li>Confirm that the garage, storage site or other recipient expects the vehicle.</li><li>Ask about access and unloading space at the receiving end.</li><li>Explain any instructions you have received from your insurer or repairer.</li></ul>
              <h3>Photographs</h3>
              <p>Useful photographs show the whole vehicle, damaged areas, wheel positions and surrounding access. Avoid close-ups alone when a wider view would explain the collection problem. Never enter a live lane or return to an unsafe area to take a picture.</p>
              <p>Keep the information in one note or message so you can update it easily. If the car is moved, the keys change hands or the delivery address changes, tell the operator before collection.</p>
              <h2>The recovery process: step by step</h2>
              <p>A recovery plan links a permitted collection to a destination that can receive the vehicle. The precise equipment and sequence depend on the assessment; a phone conversation cannot settle every detail of a damaged vehicle.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Stage</th><th>What to establish</th><th>Why it matters</th></tr></thead><tbody><tr><td>Make the area safe</td><td>Who is managing the scene and whether recovery may begin</td><td>Transport must not interfere with an unsafe or restricted scene</td></tr><tr><td>Share the details</td><td>Vehicle condition, access, keys and destination</td><td>The operator needs the actual job, not just a service label</td></tr><tr><td>Confirm the plan</td><td>Collection point, proposed method and agreed scope</td><td>Everyone should understand what has been arranged</td></tr><tr><td>Prepare for loading</td><td>Access to the car and any necessary repositioning</td><td>Damage or restricted space may need further assessment</td></tr><tr><td>Load and secure</td><td>The method appropriate to the vehicle&#x27;s condition</td><td>A non-rolling or unstable vehicle needs careful planning</td></tr><tr><td>Transport and hand over</td><td>Receiving contact, unloading position and keys</td><td>The move finishes with a workable handover</td></tr></tbody></table></div>
              <p>Before booking, ask what the quote covers and what still needs checking at collection. Report any known obstacle, even if you think it is minor. A locked wheel or a low entrance is part of the job description.</p>
              <p>If conditions differ from the original description, discuss the next step with the operator. Do not assume that extra movements, a different destination or an additional collection are included in the arrangement already agreed.</p>
              <h2>Where can the vehicle go?</h2>
              <p>Agree the destination before loading whenever possible. A repair garage, your home, a storage location or another suitable address may be an option, but permission and access need confirming for the particular move.</p>
              <p>For a garage delivery, ask who will receive the car and whether it can accept a vehicle that cannot roll. If the premises are closed, arrange a specific handover with the garage rather than assuming the keys can simply be left there.</p>
              <p>If an insurer is arranging repairs, check its instructions before choosing the receiving address. Ask who is authorising recovery and where the vehicle should be taken. Do not assume that choosing an operator confirms an insurer will meet the cost.</p>
              <p>For a further journey after the immediate collection, discuss <Link href="/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link>. Keep the initial removal and any later move clear in the booking, especially if the car is changing hands between sites.</p>
              <h2>Related situations</h2>
              <p>A breakdown without collision damage needs a different starting conversation. Our guide to <Link href="/blog/broken-down-no-breakdown-cover" className="font-semibold hover:underline">broken down with no breakdown cover</Link> explains how to check assistance options and arrange a job directly.</p>
              <p>For a motorway stop, read <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link> for the safety sequence. For soft ground, our <Link href="/blog/car-stuck-in-mud-or-a-ditch" className="font-semibold hover:underline">car stuck in mud or a ditch guide</Link> explains the access details to report.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Need Collision Recovery?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Once the scene is safe and removal is permitted, describe the vehicle, access and intended destination to AHS Recovery.
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
                    <Link href="/services/rtc-recovery" className="text-primary font-medium hover:underline">
                      RTC Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/accident-recovery" className="text-primary font-medium hover:underline">
                      Accident Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/specialist-accident-recovery" className="text-primary font-medium hover:underline">
                      Specialist Accident Recovery
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
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Frequently asked questions</h2>
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
      <section className="relative overflow-hidden py-20 md:py-28 text-center px-6">
        <Image
          src="/images/accident-damaged-car-car-park-collection.webp"
          alt="Accident-damaged car in a car park being prepared for collection"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Request collision recovery</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
            <p>AHS Recovery is based at 203 Tiptree Cres, Ilford IG5 0ST. We assess collision recovery within around 60 miles of Ilford, with nationwide recovery and vehicle transportation on request.</p>
            <p>When everyone is safe and removal is permitted, call <strong>07883 546955</strong> or send a WhatsApp message to the same number. Provide the location, visible damage, whether the vehicle rolls and the receiving address.</p>
            <p>Use the <Link href="/contact" className="font-semibold hover:underline">contact page</Link> for an enquiry, or browse the <Link href="/blog" className="font-semibold hover:underline">AHS Recovery blog</Link> for more recovery planning guides.</p>
          </div>
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
