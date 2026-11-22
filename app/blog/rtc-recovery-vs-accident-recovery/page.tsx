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
    "question": "What does RTC stand for in vehicle recovery?",
    "answer": "RTC stands for road traffic collision. RTC recovery means removing a vehicle from the scene of a collision on or near a public road, once the scene is safe and removal is permitted."
  },
  {
    "question": "What is the difference between RTC recovery and accident recovery?",
    "answer": "RTC recovery deals with the collision scene itself, which may involve emergency services, other vehicles and road obstructions. Accident recovery is the collection and transport of an accident-damaged vehicle after the incident has been managed and the scene cleared."
  },
  {
    "question": "When is specialist accident recovery needed?",
    "answer": "When a vehicle is severely damaged, does not roll, is unstable, is in an awkward position or is difficult to reach, and standard loading is not suitable. Additional planning and equipment may be required."
  },
  {
    "question": "Can I arrange recovery myself after an accident?",
    "answer": "Once everyone is safe and removal is permitted, you can contact a recovery operator directly. It is also sensible to contact your insurer, as they may have their own recovery and repair arrangements."
  },
  {
    "question": "What information does the recovery operator need?",
    "answer": "The exact location, vehicle details, visible damage, whether it rolls, steers and brakes, whether the engine starts, whether the keys are available, any leaking fluids and where the vehicle needs to go. Safe photographs help."
  },
  {
    "question": "Can a vehicle that does not roll be recovered?",
    "answer": "Yes. Vehicles with broken or locked wheels or damaged suspension can be recovered, but they may need a different loading method. Tell the operator in advance so the right equipment is sent."
  },
  {
    "question": "Should I take photographs before recovery?",
    "answer": "Where it is safe, photographs of the vehicle, damage and surrounding area are useful for both the recovery operator and your insurer. Never stand in a live lane to take them."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function RtcRecoveryComparisonBlogPost() {
  const [articleSchema, faqSchema, breadcrumbSchema] = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "RTC Recovery, Accident Recovery or Specialist Recovery? A Clear Comparison",
    "description": "RTC recovery, accident recovery and specialist accident recovery compared: what each covers, when you need it, what to tell the operator and what happens next.",
    "image": "https://ahsrecovery.co.uk/images/rtc-vs-accident-recovery-featured.webp",
    "datePublished": "2026-11-22",
    "dateModified": "2026-11-22",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does RTC stand for in vehicle recovery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RTC stands for road traffic collision. RTC recovery means removing a vehicle from the scene of a collision on or near a public road, once the scene is safe and removal is permitted."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between RTC recovery and accident recovery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RTC recovery deals with the collision scene itself, which may involve emergency services, other vehicles and road obstructions. Accident recovery is the collection and transport of an accident-damaged vehicle after the incident has been managed and the scene cleared."
        }
      },
      {
        "@type": "Question",
        "name": "When is specialist accident recovery needed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a vehicle is severely damaged, does not roll, is unstable, is in an awkward position or is difficult to reach, and standard loading is not suitable. Additional planning and equipment may be required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I arrange recovery myself after an accident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once everyone is safe and removal is permitted, you can contact a recovery operator directly. It is also sensible to contact your insurer, as they may have their own recovery and repair arrangements."
        }
      },
      {
        "@type": "Question",
        "name": "What information does the recovery operator need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The exact location, vehicle details, visible damage, whether it rolls, steers and brakes, whether the engine starts, whether the keys are available, any leaking fluids and where the vehicle needs to go. Safe photographs help."
        }
      },
      {
        "@type": "Question",
        "name": "Can a vehicle that does not roll be recovered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vehicles with broken or locked wheels or damaged suspension can be recovered, but they may need a different loading method. Tell the operator in advance so the right equipment is sent."
        }
      },
      {
        "@type": "Question",
        "name": "Should I take photographs before recovery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Where it is safe, photographs of the vehicle, damage and surrounding area are useful for both the recovery operator and your insurer. Never stand in a live lane to take them."
        }
      }
    ]
  },
  {
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
]

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
              <p>After a collision, the terms used for getting a damaged vehicle off the road can be confusing. You may hear &quot;RTC recovery&quot;, &quot;accident recovery&quot; and &quot;specialist recovery&quot; used as if they mean the same thing. In practice, they describe different situations, and knowing which one applies helps you give the right information and get the right equipment sent first time.</p>
              <p>This guide sets out clear definitions, a side-by-side comparison, the details a recovery operator needs, and the usual sequence from the scene to the destination. It is general guidance, not legal or insurance advice.</p>
              <h2>Summary</h2>
              <div className="overflow-x-auto"><table><thead><tr><th></th><th>RTC recovery</th><th>Accident recovery</th><th>Specialist accident recovery</th></tr></thead><tbody><tr><td>Typical situation</td><td>At or near a road traffic collision scene</td><td>A damaged vehicle that needs collecting after the incident has been managed</td><td>A severely damaged, non-rolling, unstable or hard-to-load vehicle</td></tr><tr><td>Where the vehicle is</td><td>Often on the road where the collision happened</td><td>At the roadside, a car park, a driveway, a garage or a storage yard</td><td>Anywhere, often in an awkward position or location</td></tr><tr><td>Scene coordination</td><td>May involve emergency services, road authorities and other vehicles</td><td>Usually no live scene</td><td>May need extra planning and space</td></tr><tr><td>Main question</td><td>Is removal permitted and safe?</td><td>Where is the vehicle going?</td><td>How can the vehicle be moved without further damage or risk?</td></tr><tr><td>Typical next step</td><td>Remove from the scene to an agreed destination</td><td>Transport to a garage, repairer or storage</td><td>Assess, plan the method, load and transport</td></tr></tbody></table></div>
              <p>In short: <strong>RTC recovery</strong> is about the collision scene itself; <strong>accident recovery</strong> is the planned collection of an accident-damaged vehicle once the scene has been dealt with; <strong>specialist accident recovery</strong> is for vehicles whose condition or position makes standard loading unsuitable.</p>
              <h2>Definitions</h2>
              <h3>What is RTC recovery?</h3>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/rtc-scene-cones-recovery-waiting.webp" alt="Recovery truck waiting at a coned-off road traffic collision scene" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>RTC stands for <strong>road traffic collision</strong>. RTC recovery means removing a vehicle from the scene of a collision on or near a public road. The situation may involve:</p>
              <ul><li>more than one vehicle;</li><li>a vehicle blocking a lane or junction;</li><li>debris or leaking fluids on the road;</li><li>emergency services or road authorities managing the scene.</li></ul>
              <p>The defining feature of RTC recovery is that <strong>the scene comes first</strong>. Recovery begins only after the scene is safe and the vehicle has been cleared for removal by whoever is in charge, where that applies.</p>
              <p>AHS Recovery&#x27;s <Link href="https://ahsrecovery.co.uk/services/rtc-recovery" className="font-semibold hover:underline">RTC recovery</Link> service covers single-vehicle and multi-vehicle collisions, front, rear and side impact damage, wheel and suspension damage and vehicles that will not start after a collision.</p>
              <h3>What is accident recovery?</h3>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/accident-damaged-car-car-park-collection.webp" alt="Accident-damaged car in a car park being prepared for collection" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p><strong>Accident recovery</strong> is the collection and transportation of an accident-damaged car or van <strong>after the immediate incident has been managed</strong>. The vehicle might have been moved to the roadside, a car park or a driveway, or it may be waiting at a garage or storage yard and need moving on.</p>
              <p>The defining feature is that <strong>there is no longer a live scene</strong>. The main questions are practical: what condition is the vehicle in, how will it be loaded, and where is it going?</p>
              <p>See AHS Recovery&#x27;s <Link href="https://ahsrecovery.co.uk/services/accident-recovery" className="font-semibold hover:underline">accident recovery</Link> page for how this works.</p>
              <h3>What is specialist accident recovery?</h3>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/specialist-recovery-non-rolling-vehicle.webp" alt="Non-rolling damaged car being winched onto a flatbed using wheel skates" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p><strong>Specialist accident recovery</strong> is for vehicles that cannot be loaded in the standard way. Examples include a vehicle that:</p>
              <ul><li>is severely damaged;</li><li>does not roll, because of broken or locked wheels or damaged suspension;</li><li>is unstable or in an awkward position, such as partly off the road or on a slope;</li><li>has limited access around it;</li><li>needs to be repositioned before it can be loaded.</li></ul>
              <p>The defining feature is that <strong>the method has to be planned</strong>. Safe photographs and detailed information help the operator assess the equipment and loading method in advance. Where a vehicle has left the road entirely, <Link href="https://ahsrecovery.co.uk/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery</Link> may also be relevant.</p>
              <p>More detail is on AHS Recovery&#x27;s <Link href="https://ahsrecovery.co.uk/services/specialist-accident-recovery" className="font-semibold hover:underline">specialist accident recovery</Link> page.</p>
              <h2>How to decide which service you need</h2>
              <p>Work through these questions in order:</p>
              <ol><li><strong>Is there still a live collision scene?</strong> If the vehicle is still where the collision happened, and emergency services or road authorities may be involved, you are looking at <strong>RTC recovery</strong>.</li><li><strong>Has the scene been cleared and the vehicle moved to a safe place?</strong> If so, and the vehicle rolls and steers, <strong>accident recovery</strong> is likely to be the right description.</li><li><strong>Is the vehicle severely damaged, not rolling, unstable or hard to reach?</strong> If yes, at any stage, <strong>specialist accident recovery</strong> may be needed.</li></ol>
              <p>If you are unsure, describe the situation clearly when you call. The operator can identify the appropriate recovery approach from the details you give.</p>
              <h2>First priorities at the scene</h2>
              <p>Recovery always comes after safety. Following a collision:</p>
              <ol><li><strong>Stop in a safe position where possible</strong>, switch off the engine and turn on hazard warning lights.</li><li><strong>Check for injuries.</strong> If anyone is injured, or the road is blocked or dangerous, <strong>call 999</strong>.</li><li><strong>Get yourself and any passengers to a safe place</strong>, away from traffic, where it is safe to do so.</li><li><strong>Do not try to move a badly damaged vehicle</strong> if doing so could create further danger.</li><li><strong>Follow instructions</strong> from the police, other emergency services or road authorities.</li><li><strong>Exchange details</strong> with other drivers involved, as the law requires. If you cannot, GOV.UK and the Highway Code explain when and how you must report the collision to the police.</li><li><strong>Contact your insurer</strong> as soon as practical. They may have their own arrangements for recovery and repair.</li></ol>
              <p>Only when it is safe, and removal is permitted, should you arrange recovery.</p>
              <h2>Details to provide when requesting recovery</h2>
              <p>Accurate details help the operator choose the right vehicle, equipment and loading method. Prepare the following:</p>
              <h3>Location and access</h3>
              <ul><li>Exact location: road name, junction, postcode or what3words;</li><li>Position of the vehicle: in a lane, on the verge, in a car park, on a driveway;</li><li>Access: space around the vehicle, height limits, gates, slopes or soft ground.</li></ul>
              <h3>Vehicle</h3>
              <ul><li>Make, model and registration;</li><li>Approximate size and weight, especially for vans and larger vehicles;</li><li>Fuel type, including whether it is hybrid or electric.</li></ul>
              <h3>Condition</h3>
              <ul><li>Visible damage: front, rear, side, wheels, suspension;</li><li>Does it roll? Does the steering work? Do the brakes work?</li><li>Does the engine start?</li><li>Are the keys available?</li><li>Any leaking fluids, debris or obstacles nearby.</li></ul>
              <h3>Destination</h3>
              <ul><li>Where the vehicle should go: a garage, repairer, storage facility, home address or another location;</li><li>Contact details for whoever will receive it;</li><li>Any instructions from your insurer.</li></ul>
              <h3>Photographs</h3>
              <p>Where it is safe to take them, photographs of the vehicle, the wheels, the damage and the surrounding space help the operator assess the job before arrival. Never take photographs from a live carriageway.</p>
              <h2>The recovery process: step by step</h2>
              <p>The sequence is broadly similar across all three services, with more planning for specialist jobs.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Step</th><th>RTC recovery</th><th>Accident recovery</th><th>Specialist accident recovery</th></tr></thead><tbody><tr><td>1. Safety</td><td>Scene secured by emergency services or road authorities where required</td><td>Vehicle already in a safe place</td><td>Scene or area made safe</td></tr><tr><td>2. Permission</td><td>Removal must be permitted where required</td><td>Usually not applicable</td><td>Removal permitted where required</td></tr><tr><td>3. Contact</td><td>Call with incident and vehicle details</td><td>Call with vehicle, condition and destination</td><td>Call with detailed condition and access information</td></tr><tr><td>4. Assessment</td><td>Choose recovery vehicle, equipment and loading method</td><td>Confirm loading method</td><td>Plan equipment and method; photographs help</td></tr><tr><td>5. Preparation</td><td>Clear the area of bystanders</td><td>Prepare vehicle for loading</td><td>Reposition vehicle if required and possible</td></tr><tr><td>6. Loading</td><td>Load and secure</td><td>Load and secure</td><td>Controlled loading and securing according to condition</td></tr><tr><td>7. Transport</td><td>To the agreed destination</td><td>To the agreed destination</td><td>To the agreed destination</td></tr></tbody></table></div>
              <h2>Where can the vehicle go?</h2>
              <p>After recovery, the vehicle can be transported to:</p>
              <ul><li>a garage or repair centre of your choice;</li><li>an insurer-approved repairer, if your insurer arranges one;</li><li>a storage facility, while decisions are made;</li><li>your home address, where suitable;</li><li>another agreed destination.</li></ul>
              <p>If the vehicle needs to travel a long distance after an accident, <Link href="https://ahsrecovery.co.uk/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link> may be the right next step once the immediate recovery is complete.</p>
              <h2>Related situations</h2>
              <ul><li><strong>Breakdown without an accident:</strong> see our guide on <Link href="https://ahsrecovery.co.uk/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link>.</li><li><strong>No breakdown cover:</strong> see <Link href="https://ahsrecovery.co.uk/blog/broken-down-no-breakdown-cover" className="font-semibold hover:underline">broken down with no breakdown cover</Link> for a step-by-step plan.</li><li><strong>Vehicle stuck off the road:</strong> see <Link href="https://ahsrecovery.co.uk/blog/car-stuck-in-mud-or-a-ditch" className="font-semibold hover:underline">car stuck in mud or a ditch</Link>.</li></ul>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Need Collision Recovery?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Once everyone is safe and removal is permitted, call AHS Recovery with your location, vehicle details and what has happened.
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
<p><strong>AHS Recovery</strong> provides RTC recovery, accident recovery and specialist accident recovery from Ilford, Essex, covering local recovery within approximately 60 miles, plus nationwide breakdown recovery and vehicle transportation. If you are unsure which service applies, provide clear details and safe photographs and we will advise.</p>
              <p>Once everyone is safe and removal is permitted, call <strong>07883 546955</strong> or send a WhatsApp message to the same number with the location, vehicle details and what has happened. We are based at 203 Tiptree Cres, Ilford IG5 0ST.</p>
              <p>You can also use our <Link href="https://ahsrecovery.co.uk/contact" className="font-semibold hover:underline">contact page</Link> or read more guides on the <Link href="https://ahsrecovery.co.uk/blog" className="font-semibold hover:underline">AHS Recovery blog</Link>.</p>
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
