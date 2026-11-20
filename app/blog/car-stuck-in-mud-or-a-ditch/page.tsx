import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("car-stuck-in-mud-or-a-ditch")!

export const metadata = buildMetadata({
  title: "Car Stuck in Mud or a Ditch? Winch-Out Guide",
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
    "question": "What should I do first if my car is stuck in mud or a ditch?",
    "answer": "Stop spinning the wheels, move people to a safe place, warn other traffic if you are beside a live road, and call a professional recovery operator if you cannot drive out safely. Do not improvise a pull with unrated equipment."
  },
  {
    "question": "Is it safe to try to tow a stuck car out with a rope from another car?",
    "answer": "It is often unsafe. A rope or unrated strap attached to a bumper hook can fail or tear the fitting out. Leave the extraction to a professional using approved recovery points, not a makeshift tow."
  },
  {
    "question": "What is winch-out recovery?",
    "answer": "Winch-out recovery is a controlled pull that moves a stuck vehicle towards stable, accessible ground, usually with the recovery vehicle standing on a firm surface. The method depends on assessment, not on a standard routine for every site."
  },
  {
    "question": "Will a 4x4 always be able to drive itself out of mud?",
    "answer": "No. A 4x4 stuck in mud can lose all useful grip once the tyres have dug in or the underbody is resting on the ground. Stop and call for help rather than digging the vehicle in further."
  },
  {
    "question": "What information does a recovery operator need before they set off?",
    "answer": "They need the exact location, the type of ground, how the vehicle is sitting, whether a truck can get close on firm ground, whether it is 2WD or a 4x4, whether it rolls, steers and brakes, whether the keys are available, and any visible damage."
  },
  {
    "question": "What if the recovery truck cannot get close to the vehicle?",
    "answer": "Then a simple roadside winch-out may not be the right method. The operator may need a different approach, including 4x4 recovery where the access itself is difficult. Access and ground conditions decide what is possible."
  },
  {
    "question": "Can AHS Recovery help if I am stuck in or around Ilford and Essex?",
    "answer": "AHS Recovery is based in Ilford, Essex, at 203 Tiptree Cres, IG5 0ST, and can discuss recovery requests in and around that area. Call 07883 546955 with the location and a clear description. Whether a particular job can be undertaken depends on access, ground conditions and the vehicle."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function MudAndDitchRecoveryBlogPost() {
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
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.siteUrl}${post.heroImage}`,
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Winch-Out Recovery</span>
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
              <p className="text-lg text-slate-700 leading-relaxed">A car can leave the carriageway and stop on a soft verge, drop a wheel into a ditch, or lose traction in a muddy field or car park. Once the tyres can no longer find grip, further driving often makes the situation worse rather than better.</p>
              <p>The immediate priority is safety: people first, then a clear description of the ground, the access and the vehicle, so a recovery operator can judge what is possible. This guide is a planning checklist for car stuck in mud recovery and for similar situations in a ditch or on a verge. It is not a do-it-yourself winching tutorial.</p>
              <p>Winch out recovery in the UK usually starts with an assessment of the ground, the vehicle&#x27;s recovery points and whether a recovery truck can stand on firm ground. Access and conditions decide the method.</p>
              <h2>Short answer: what to do first if the car is stuck</h2>
              <p>If the wheels are spinning and the vehicle is not moving, stop. Continuing to accelerate only digs the tyres deeper.</p>
              <p>Then, in this order:</p>
              <ul>
                <li>Switch off the engine if the vehicle feels unstable or is tilting.</li>
                <li>Get yourself and any passengers to a safe place, well away from traffic, slopes and soft ground.</li>
                <li>Switch on the hazard warning lights if the vehicle is close enough to a live road to obstruct or distract other traffic.</li>
                <li>Do not stand between the vehicle and moving traffic, and do not stand downhill of a vehicle that could roll.</li>
                <li>If you cannot drive out safely, call a professional recovery operator rather than improvising a pull.</li>
              </ul>
              <p>If the vehicle is beside a live road, follow the official breakdown advice in <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold hover:underline">The Highway Code</a>. Rule 276 says to think first of all other road users, use hazard warning lights if the vehicle is causing an obstruction, and not to stand between the vehicle and oncoming traffic. A warning triangle may be placed at least 45 metres behind the vehicle on ordinary roads, but never on a motorway. This is a summary of official guidance, not legal advice; read the current wording on GOV.UK.</p>
              <p>If the stop is on or beside a motorway or other high-speed road, people and traffic safety come before any discussion of winching. See our guide on <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link>.</p>
              <h2>Why spinning the wheels usually makes it worse</h2>
              <p>When a tyre spins on mud, wet grass or a soft verge, it often cuts a smooth, deeper rut rather than climbing out. The vehicle settles, the sills or underbody may start to rest on the ground, and the tyres then have even less chance of biting.</p>
              <p>A 4x4 stuck in mud can face the same problem. Four-wheel drive can help on loose ground, but it does not guarantee an exit. If all four tyres are polishing the same wet surface, the vehicle can dig itself in just as firmly as a two-wheel-drive car.</p>
              <p>Spinning wheels can dig the vehicle deeper, pack mud into wheel arches, damage tyres, throw debris, and leave the operator working from a less stable position. The practical rule is simple: if there is no progress, stop. Do not rock the vehicle repeatedly if it is already tilting, close to a ditch, or near a drop. Call for recovery once it is clear that a safe, controlled drive-out is not possible.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/soft-verge-stuck-car.webp"
                  alt="A hatchback resting on a wet grass verge beside a UK country road"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>Safety around a stuck vehicle</h2>
              <p>Soft ground, a cambered verge, a ditch and nearby traffic all change the risks around a stuck vehicle.</p>
              <p>Keep people well away from any cable, strap or recovery line, and out of the likely path of the vehicle. If a line fails under load, or if the vehicle moves suddenly, the danger is along that line and in the direction of the pull. Never stand between the stuck vehicle and the recovery vehicle, and do not ask passengers to guide the car from close range while a pull is under way.</p>
              <p>This is not a do-it-yourself winch guide. Do not improvise with unrated ropes, straps of unknown condition, or bumper-mounted hooks that were not designed as recovery points. Professional operators use rated equipment on approved recovery points, not decorative loops or ordinary fittings meant only for a light, on-road tow of a rolling vehicle.</p>
              <p>There is an important difference between recovery points and simply towing a stuck car. A conventional tow assumes the vehicle can roll and follow on a firm surface. A vehicle in mud, a ditch or on a soft verge may not roll cleanly, and a snatch from another car can overload fittings that were never meant for that force.</p>
              <p>If the vehicle is beside a live road, treat moving traffic as the first hazard. The Highway Code (Rule 275) advises trying to stop in a place of relative safety and, where possible, keeping well away from the vehicle and moving traffic, because a collision could force the vehicle into anyone standing next to it. Do not step into the carriageway to inspect the wheels or to attach anything.</p>
              <h2>What to tell the operator</h2>
              <p>Accurate information helps the operator judge whether a controlled winch-out is suitable, or whether <Link href="/services/4x4-off-road-recovery" className="font-semibold hover:underline">4x4 recovery</Link> or another method is more realistic. You do not need to put yourself at risk to gather every detail. Share what you can see from a safe position.</p>
              <p>Use this checklist when you call.</p>
              <h3>Location</h3>
              <ul>
                <li>The exact place: a what3words address, a postcode, a road name and a nearby landmark, or a map pin.</li>
                <li>Whether the vehicle is on a verge, in a ditch, in a field or a soft car park.</li>
                <li>How far it is from a firm road or hardstanding.</li>
              </ul>
              <h3>Access and ground</h3>
              <ul>
                <li>Whether a recovery truck can reach a stable position nearby, or whether the approach is a narrow lane, a locked gate, a farm track or soft ground.</li>
                <li>The type of surface: mud, wet grass, gravel, a bank or standing water.</li>
                <li>Nearby obstacles: trees, fences, walls, ditches, street furniture or water.</li>
                <li>Any slope or camber, and the approximate angle of the vehicle.</li>
              </ul>
              <h3>The vehicle</h3>
              <ul>
                <li>Make, model and whether it is 2WD or a 4x4.</li>
                <li>Whether the engine starts, and whether it rolls, steers and brakes.</li>
                <li>Whether the keys are available, and whether the vehicle is unlocked.</li>
                <li>Visible damage already present, including tyres, wheels, bodywork or underbody.</li>
                <li>How it became stuck, in brief.</li>
              </ul>
              <p>Photographs of the vehicle, the ground and the access route are useful if they can be taken from firm, safe ground. Do not climb onto a bank, stand in the carriageway or walk into deep mud to take a picture.</p>
              <p>AHS Recovery&#x27;s <Link href="/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery</Link> page explains when a controlled pull from firm ground may be considered. If the vehicle is farther from a firm surface, or the approach itself is difficult, 4x4 and off-road recovery is the better starting point. Some jobs need specialist winching once access and recovery points have been assessed.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/winch-cable-recovery-point.webp"
                  alt="A recovery cable attached to a vehicle recovery point"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>How a professional winch-out usually works</h2>
              <p>The operator first assesses the vehicle&#x27;s position, the stability of the ground, nearby obstacles and whether the recovery vehicle can stand on firm ground. If the truck cannot get close enough, or the ground will not support it, a different approach may be needed — or a decision that a winch from the roadside is the wrong tool.</p>
              <p>Where a winch-out is appropriate, the usual sequence is:</p>
              <ol>
                <li>Secure the area so that people stay clear of the equipment and the planned path of the vehicle.</li>
                <li>Attach rated equipment to approved recovery points on the stuck vehicle, not to unrated bumper fittings.</li>
                <li>Plan the direction of the pull so the vehicle is drawn towards stable, accessible ground rather than further into a ditch or across a hidden drop.</li>
                <li>Carry out a controlled pull, adjusting as the vehicle begins to move.</li>
                <li>Recheck the vehicle once it is on firmer ground.</li>
              </ol>
              <p>The vehicle may still need a tow afterwards. A car that has been in a ditch or on a soft verge may have damaged tyres, steering or underbody components, or it may simply be unsafe to drive. In that case, <Link href="/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link> or <Link href="/services/towing" className="font-semibold hover:underline">towing</Link> can be discussed as the next step.</p>
              <p>If the vehicle cannot be driven and needs a planned move to a garage or another address, rather than an immediate roadside tow, our guide to <Link href="/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">moving a non-running vehicle in the UK</Link> covers the information to prepare for that journey. It is a different job from the extraction itself.</p>
              <p>Access, ground conditions and the vehicle&#x27;s recovery points decide what is possible. No operator can usefully promise to recover a vehicle from every field, bank or ditch before seeing the site.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/recovery-truck-firm-ground.webp"
                  alt="A recovery truck positioned on firm ground beside a UK rural road"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>After the vehicle is free</h2>
              <p>Once the vehicle is on stable ground, do not drive away automatically. Walk around it, still keeping clear of any remaining equipment, and look for obvious problems:</p>
              <ul>
                <li>Tyre damage, including cuts, punctures or a wheel that is no longer seated correctly.</li>
                <li>Leaking fluids.</li>
                <li>Bodywork, bumper or sill damage from the ditch, verge or the extraction.</li>
                <li>Underbody contact, loose exhaust parts, or a wheel that does not turn freely.</li>
                <li>Steering or brake behaviour that feels abnormal as soon as you move a short distance on firm ground.</li>
              </ul>
              <p>If anything suggests the vehicle is not safe to drive, arrange a tow rather than continuing the journey. If you are now at the roadside with a fault that leaves you unable to proceed, <Link href="/services/roadside-assistance" className="font-semibold hover:underline">roadside assistance</Link> may be the more relevant next conversation.</p>
              <p>If the vehicle left a live road, or will rejoin one, check that lights, tyres and steering are in a fit state before you move off, and do not pull out in a way that endangers other traffic. The Highway Code&#x27;s breakdown advice still applies until you are safely under way.</p>
              <h2>Stuck near Ilford or elsewhere in Essex</h2>
              <p>AHS Recovery is based at 203 Tiptree Cres, Ilford IG5 0ST, and can discuss car stuck in mud recovery, verge and ditch extractions, and related off-road recovery in Essex and around Ilford when the location, access and vehicle condition make a recovery appropriate.</p>
              <p>Availability depends on the details you provide, not on a blanket claim that every site can be reached in the same way. If you are unsure whether the job is a winch-out from a nearby firm surface or a more involved off-road recovery, call with the location and a description of the ground.</p>
              <p>To make an enquiry, use the <Link href="/contact" className="font-semibold hover:underline">contact page</Link> or review the <Link href="/services" className="font-semibold hover:underline">services</Link> AHS Recovery offers. Do not assume a particular arrival time until the operator has the facts.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Stuck in Mud or a Ditch?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Share your location, ground conditions and vehicle details with AHS Recovery.
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
                    <Link href="/services/4x4-off-road-recovery" className="text-primary font-medium hover:underline">
                      4x4 and Off-Road Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                      Nationwide Breakdown Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/winch-out-recovery" className="text-primary font-medium hover:underline">
                      Winch-Out Recovery
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
          src="/images/recovery-truck-firm-ground.webp"
          alt="A recovery truck standing on firm ground beside a UK rural road"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Calling AHS Recovery</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
            <p>If your vehicle is stuck in mud, a ditch or on a soft verge, and you cannot drive out safely, contact AHS Recovery on 07883 546955. Have the location, ground conditions and vehicle details ready so the operator can assess what may be possible. Stay with your passengers in a safe place and follow the operator&#x27;s instructions once help arrives.</p>
              <p><strong>AHS Recovery</strong><br />203 Tiptree Cres, Ilford IG5 0ST<br />Telephone: 07883 546955</p>
              <p>You can also use the <Link href="/contact" className="font-semibold hover:underline">contact page</Link>, read more <Link href="/about" className="font-semibold hover:underline">about AHS Recovery</Link>, or browse further guides on the <Link href="/blog" className="font-semibold hover:underline">blog</Link>.</p>
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
