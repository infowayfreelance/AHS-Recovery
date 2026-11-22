import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("broken-down-no-breakdown-cover")!

export const metadata = buildMetadata({
  title: "Broken Down With No Breakdown Cover? What to Do",
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
    "question": "Can I get breakdown help without cover?",
    "answer": "Yes. Explain that the vehicle has already broken down and ask a recovery operator to assess the job. Confirm whether you need roadside help or transport, where the vehicle should go and the agreed cost before booking."
  },
  {
    "question": "Can I buy a policy after the car has stopped?",
    "answer": "Do not assume a new standard policy covers an existing breakdown. The RAC warns that most policies start 24 hours after purchase. Tell the provider what has already happened and ask specifically about help for this incident."
  },
  {
    "question": "What if I am broken down on a motorway with no cover?",
    "answer": "Deal with the danger first. If you cannot reach relative safety and cannot leave safely, stay belted in with hazards on and call 999 for police. Otherwise follow the official motorway safety steps, then arrange help."
  },
  {
    "question": "Can you collect a car that will not start on my driveway?",
    "answer": "AHS Recovery can discuss a driveway collection, subject to the vehicle and access. Provide the address, vehicle details, whether it rolls and steers, and the destination. Mention slopes, gates or limited space before the job is arranged."
  },
  {
    "question": "Will paying for recovery include repairing the fault?",
    "answer": "Ask what the booking includes. Moving the vehicle and repairing it are different jobs. Roadside assistance may be appropriate for some faults; a vehicle that cannot continue safely may need transport to a garage."
  },
  {
    "question": "Can the vehicle go home instead of to a garage?",
    "answer": "Discuss your preferred destination when you call. Recovery can be arranged to a home, garage or another agreed address, subject to suitable access. Confirm who will receive the vehicle and keys before collection."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function NoBreakdownCoverBlogPost() {
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
    author: { "@id": `${siteConfig.siteUrl}/#business`, name: siteConfig.name },
    publisher: { "@id": `${siteConfig.siteUrl}/#business`, name: siteConfig.name },
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Breakdown Assistance</span>
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
              <p>If you are broken down with no breakdown cover, you can still arrange help. The difficult part is deciding what to book while you are worried about the car, your passengers and an unexpected bill.</p>
              <p>Use this seven-step plan to get safe, check your options and arrange the right move. It covers motorway stops, everyday roadside problems and a car that will not start at home, without assuming you have a membership or promising a roadside repair.</p>
              <h2>Broken down with no breakdown cover: your next decisions</h2>
              <p>Arrange the help you need for this incident, after dealing with any immediate danger. A recovery operator needs a clear description of the vehicle and its location, rather than a diagnosis you cannot confirm.</p>
              <ul>
<li>Put people first and contact emergency services if there is immediate danger.</li>
<li>Check whether an existing agreement includes assistance before paying for another service.</li>
<li>Explain that the breakdown has already happened when discussing any new cover.</li>
<li>Choose roadside help or transport based on the symptoms, access and destination.</li>
<li>Confirm the job, cost and handover arrangements before booking.</li>
</ul>
              <p>Keep the details together in a short note on your phone. That makes it easier to give the same information if you speak to a provider, a garage and someone receiving the vehicle.</p>
              <h2>1. Deal with the location before the paperwork</h2>
              <p>Your safety steps depend on where the car has stopped. A lack of cover does not change them, and searching for a policy should never delay an emergency call.</p>
              <h3>On an ordinary road</h3>
              <p>If possible, stop off the road and use hazard lights to warn traffic. Keep sidelights on in darkness or poor visibility. Wait away from moving vehicles, and never stand between the car and approaching traffic.</p>
              <p>The <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold hover:underline">Highway Code</a> says a warning triangle should be at least 45 metres behind a broken-down vehicle on the same side of an ordinary road. Place and retrieve it only when safe; never use one on a motorway.</p>
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/no-cover-lay-by-hazards-safe.webp"
                  alt="Car stopped in a lay-by with hazard lights on and a warning triangle placed well behind on an ordinary road"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h3>On a motorway</h3>
              <p><a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold hover:underline">National Highways</a> advises leaving at an exit or service area if possible. Otherwise, move left towards an emergency area or hard shoulder, stop as far left as possible and switch on the hazards.</p>
              <p>Leave through the side away from traffic only if safe, and wait behind a barrier where available, checking for hazards beyond it. Do not attempt repairs or put out a warning triangle.</p>
              <p>If you cannot reach relative safety and cannot get out safely, stay belted in with hazards on and call 999 for police. In a safer stopping place, use the emergency telephone where provided; National Highways also lists 0300 123 5000 for assistance.</p>
              <p>Follow the emergency operator&#x27;s instructions. Tell them if anyone cannot leave the vehicle safely. For the full sequence and location-sign details, read <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link>.</p>
              <h2>2. Check whether you already have assistance</h2>
              <p>Look through existing agreements before arranging a second service, once everyone is safe. You may discover assistance you did not remember, but treat it as a possibility to check rather than proof that this breakdown qualifies.</p>
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/no-cover-checking-policy-phone.webp"
                  alt="Driver checking insurance documents on a phone while waiting beside a broken-down van"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <ul>
<li><strong>Motor insurance:</strong> check the schedule, app or policy documents for a breakdown section and its contact instructions.</li>
<li><strong>Bank account:</strong> look at the benefits attached to the account you actually hold, rather than a general advert for that bank.</li>
<li><strong>Vehicle warranty or manufacturer support:</strong> check the vehicle paperwork for an assistance agreement and its dates.</li>
<li><strong>Lease or company vehicle:</strong> ask the lease provider or your employer who should authorise help.</li>
<li><strong>Personal or household membership:</strong> check whether the agreement covers the person, the vehicle or named members, and whether it applies to this journey.</li>
</ul>
              <p>Ask the provider to confirm this incident is included, where the vehicle can go and how to request attendance. Say whether you are at home or away, because the location may matter to the agreement.</p>
              <p>If you find valid assistance, follow that provider&#x27;s booking process. If you cannot establish cover, tell the recovery operator that you are arranging the job directly. Avoid making two bookings for the same vehicle without explaining the situation.</p>
              <h2>3. Separate new cover from help for an existing breakdown</h2>
              <p>Buying a standard policy online is not the same as booking assistance for a car that has already stopped. Tell any provider about the existing fault before agreeing to its offer.</p>
              <p>The RAC&#x27;s guidance warns against buying a standard breakdown policy after the event. It says most policies start 24 hours after purchase and may not help with a breakdown already in progress.</p>
              <p>That is a reason to ask about eligibility, not to assume every product works identically.</p>
              <p>A provider may offer a separate service for an existing incident. Ask what you are buying, whether it includes this breakdown and what happens if the vehicle needs transporting. Do not describe a stranded car as a future journey to obtain cover.</p>
              <p>You can also arrange breakdown recovery without breakdown cover by booking a recovery company directly. This is often described as pay as you go breakdown recovery: you agree the particular job instead of relying on an annual assistance arrangement.</p>
              <p>Compare the actual service offered. A roadside inspection, collection to a nearby garage and transport to your home are different jobs, even if each advert uses the word recovery.</p>
              <h2>4. Choose help that suits the vehicle</h2>
              <p>Describe what the vehicle does and does not do, then let the operator assess the next step. You do not need to name a failed part or decide which truck should attend.</p>
              <h3>A possible roadside repair</h3>
              <p>A vehicle may need <Link href="/services/roadside-assistance" className="font-semibold hover:underline">roadside assistance</Link> if a straightforward fault can be assessed safely where it is parked. Explain whether the engine turns over, whether lights work and what happened immediately before the stop.</p>
              <p>For a suspected battery problem, ask about <Link href="/services/jump-starts" className="font-semibold hover:underline">jump starts</Link>. A successful start alone does not explain why the battery went flat. Tell the operator about earlier starting trouble or warning lights rather than assuming another start will complete the journey.</p>
              <h3>A vehicle that needs moving</h3>
              <p>If the vehicle cannot continue safely, discuss <Link href="/services/breakdown-assistance" className="font-semibold hover:underline">breakdown assistance</Link>. Report damage, unusual noises and dashboard warnings accurately. Say that a fault is unknown if you have not had it checked.</p>
              <p><Link href="/services/towing" className="font-semibold hover:underline">Towing</Link> may suit a planned move from a safe parking place. <Link href="/services/vehicle-recovery" className="font-semibold hover:underline">Vehicle recovery</Link> can involve collecting a vehicle whose condition needs assessing before loading. Tell the operator if wheels are locked or steering is unavailable.</p>
              <h3>A motorway stop or a car on the driveway</h3>
              <p>For a motorway incident, use the safety steps first and explain the exact stopping place when discussing <Link href="/services/motorway-breakdown-recovery" className="font-semibold hover:underline">motorway breakdown recovery</Link>. Do not confuse being moved out of danger with completing the whole journey to your preferred garage.</p>
              <p>If you need car broken down on driveway help, use the extra planning time well. Check access for collection and speak to the garage before booking transport. Tell the operator about gates, slopes, low entrances and other parked vehicles.</p>
              <p>A driveway collection is still a vehicle move that needs clear details. Have the keys ready and explain whether the car is automatic, whether it rolls and whether its parking brake releases. Do not push it into the road to make collection look easier.</p>
              <h2>5. Give the operator a usable collection brief</h2>
              <p>Prepare one clear set of details so the operator can assess the job before it is arranged. Separate what you have observed from what you suspect caused it.</p>
              <h3>Where the vehicle is</h3>
              <ul>
<li>Give the postcode, road name or a shared map pin.</li>
<li>On a major road, add the direction of travel and nearest junction or location sign where known.</li>
<li>Describe the actual parking position, including a car park level or driveway entrance.</li>
<li>Mention access limits, soft ground or anything blocking the approach.</li>
</ul>
              <h3>What needs collecting</h3>
              <ul>
<li>Give the make, model, registration and vehicle type.</li>
<li>Explain whether it starts, rolls, steers and brakes.</li>
<li>Mention damaged tyres, wheels, suspension or bodywork.</li>
<li>Say whether you have the keys and whether anything is being towed or carried.</li>
</ul>
              <h3>Who is waiting and where it should go</h3>
              <ul>
<li>Explain how many people are with the car and any mobility or other support needs.</li>
<li>Give the proposed delivery address and a contact there.</li>
<li>Say whether the garage expects the car and can accept it at the planned time.</li>
<li>Mention any safe photographs you can provide without returning to danger.</li>
</ul>
              <p>Ask about passenger arrangements separately. Booking transport for the car does not tell you how everyone will continue their journey. Make this part of the call before relying on a particular arrangement.</p>
              <p>If anything changes after the call, update the operator. A different destination, missing keys or a vehicle that no longer rolls can change the collection plan. Clear information helps avoid arranging a job around conditions that no longer apply.</p>
              <h2>6. Confirm the scope and cost before booking</h2>
              <p>Ask for the quote for your specific collection and destination, with the vehicle&#x27;s actual condition explained. There is no useful single price for every breakdown, and this guide does not give one.</p>
              <p>Work through these points before authorising the job:</p>
              <ul>
<li>Is the booking for roadside assessment, recovery, or both if needed?</li>
<li>Which collection point and delivery address does the quote cover?</li>
<li>Does the operator know about loading difficulties and access restrictions?</li>
<li>What would happen if the receiving garage cannot take the car?</li>
<li>How and when is payment expected?</li>
<li>How will any proposed change to the agreed job be discussed?</li>
</ul>
              <p>Keep the agreed details in a message or note, including the destination and the business you booked. If the vehicle cannot be assessed fully by phone, ask what still needs confirming rather than treating an initial discussion as an unconditional promise.</p>
              <p>Avoid comparing quotes that describe different journeys. A local collection and a long-distance delivery may solve different parts of the problem. Ask each operator to explain the proposed job in plain language before choosing.</p>
              <h2>7. Arrange a handover that will work</h2>
              <p>Confirm the receiving location before the vehicle leaves, especially if it is a garage or a gated site. An address alone does not confirm permission to unload or who will hold the keys.</p>
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/no-cover-recovery-truck-to-garage.webp"
                  alt="Broken-down car secured on a flatbed recovery truck heading to a garage"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <p>Call the garage and ask whether it can accept the vehicle, who should receive it and how the keys should be handed over. Explain if the vehicle cannot roll, because that affects where it can be left.</p>
              <p>If the garage cannot receive it, discuss another agreed destination with the operator. This might be your home or another suitable address. Confirm the alternative before collection rather than leaving the decision until the vehicle is already loaded.</p>
              <p>For a longer onward move, ask about <Link href="/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link>. Our guide to <Link href="/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">moving a non-running vehicle in the UK</Link> covers access, paperwork and receiving arrangements in more detail.</p>
              <p>After handover, keep the recovery details with the garage&#x27;s contact information. Make sure the person arranging repairs knows where the vehicle is and how to reach whoever received it. Recovery and diagnosis are separate stages; confirm each with the relevant business.</p>
              <h2>Before the next journey</h2>
              <p>Decide how you want to arrange future assistance while the car is safely parked. Check existing benefits, save the relevant contact details and note any limits you need to ask about before renewing or buying cover.</p>
              <p>Keep a phone charger and suitable clothing available, and follow the vehicle handbook&#x27;s maintenance and warning-light guidance. Review any fault that caused this breakdown with a garage before relying on the car for another trip.</p>
              <p>The aim is a clear plan, not a promise that every breakdown can be prevented. Knowing who to contact, what your agreement includes and where the car could go makes the next decision easier.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Broken Down Without Cover?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Tell AHS Recovery where the vehicle is, what it can still do and where you need it taken, once everyone is safe.
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
                    <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                      Roadside Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                      Nationwide Breakdown Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/towing" className="text-primary font-medium hover:underline">
                      Towing
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
          src="/images/no-cover-recovery-truck-to-garage.webp"
          alt="Broken-down car secured on a flatbed recovery truck heading to a garage"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Need help with no breakdown cover?</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
            <p>AHS Recovery is based at 203 Tiptree Cres, Ilford IG5 0ST. We provide local roadside assistance and recovery within approximately 60 miles, plus nationwide breakdown recovery and vehicle transportation.</p>
            <p>Once you are safe, call <strong>07883 546955</strong> or send a WhatsApp message to the same number. Share the collection location, vehicle condition and intended destination so we can discuss the help you need.</p>
            <p>For an enquiry, use our <Link href="/contact" className="font-semibold hover:underline">contact page</Link>. You can find more planning guides on the <Link href="/blog" className="font-semibold hover:underline">AHS Recovery blog</Link>.</p>
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
