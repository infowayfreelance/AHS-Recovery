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
    "question": "Can I get breakdown help without breakdown cover?",
    "answer": "Yes. You can call a recovery company directly and pay for roadside assistance or recovery. AHS Recovery can discuss the job with you and agree the price before it goes ahead."
  },
  {
    "question": "Should I buy breakdown cover after I have broken down?",
    "answer": "Be careful. The RAC advises against buying a standard policy after you have broken down, because most policies start 24 hours after purchase and may not cover a breakdown that already exists."
  },
  {
    "question": "What should I do first if I break down with no cover on a motorway?",
    "answer": "The same as anyone else: go left, get safe, get help. Stop on the hard shoulder or in an emergency area, leave by the side away from traffic if it is safe, wait behind the barrier, and use the emergency telephone or call National Highways on 0300 123 5000. If you cannot get out of a live lane safely, call 999."
  },
  {
    "question": "How much does recovery cost without cover?",
    "answer": "It depends on the location, the vehicle's condition, the equipment needed and the destination. Describe the job clearly and ask for the price before work starts."
  },
  {
    "question": "Can you take my vehicle home rather than to a garage?",
    "answer": "Yes, recovery can be arranged to a garage, your home or another agreed destination. Tell the operator where you want it to go when you call."
  },
  {
    "question": "Will the operator try to fix it at the roadside first?",
    "answer": "Where the problem is simple and it is safe to do so, roadside assistance or a jump start may get the vehicle moving. If it cannot be made safe to continue, recovery can be arranged."
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
              <p className="text-lg text-slate-700 leading-relaxed">Many drivers only find out they have no breakdown cover at the moment they need it. The car has stopped, the warning lights are on, and the policy you thought you had lapsed months ago, or never existed.</p>
              <p>Having no cover does not mean having no help. You can still get roadside assistance or vehicle recovery; you arrange and pay for it directly rather than through a policy. This guide sets out a clear order of steps: get safe, check whether you are covered after all, decide what kind of help you need, and give the operator the information that gets the right vehicle and equipment to you.</p>
              <h2>The short answer</h2>
              <p>If you have broken down and you have no breakdown cover:</p>
              <ol>
                <li><strong>Get yourself and your passengers safe first.</strong> Cover makes no difference to this step.</li>
                <li><strong>Call 999</strong> if anyone is injured, you are in a live lane and cannot get out safely, or the vehicle is causing a danger.</li>
                <li><strong>Check for cover you may already have</strong>, such as through your insurer, bank account or vehicle warranty.</li>
                <li><strong>Do not rely on buying a new policy now.</strong> Many policies do not cover a breakdown that has already happened.</li>
                <li><strong>Call a recovery company directly</strong>, describe the problem clearly and agree the price before work starts.</li>
              </ol>
              <h2>Step 1: Get safe — the same steps apply with or without cover</h2>
              <p>The first minutes after a breakdown are about safety, not paperwork.</p>
              <p><strong>On an ordinary road</strong></p>
              <ul>
                <li>Move the vehicle off the road if you can: a lay-by, side road, car park or driveway.</li>
                <li>Switch on your hazard warning lights, and sidelights if it is dark or visibility is poor.</li>
                <li>If it is safe to get out, leave by the side away from traffic and wait somewhere well clear of the road.</li>
                <li>The Highway Code allows a warning triangle on an ordinary road, at least 45 metres behind the vehicle on the same side of the road, but only if it is safe to place it.</li>
              </ul>
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
              <p><strong>On a motorway</strong></p>
              <ul>
                <li>Leave at the next exit or use a service area if you can.</li>
                <li>If not, follow National Highways&#x27; &quot;Go left, get safe, get help&quot;: move into the left lane, stop on the hard shoulder or in an emergency area as far left as possible, hazard lights on.</li>
                <li>Leave by the side away from traffic if it is safe and possible, and wait behind the safety barrier where there is one.</li>
                <li><strong>Do not place a warning triangle on a motorway</strong>, and do not attempt repairs.</li>
                <li>Use the free emergency telephone, or call National Highways on 0300 123 5000, and contact a recovery service.</li>
                <li>If you cannot get out of a live lane safely, stay in the vehicle with your seat belt and hazard lights on and call 999.</li>
              </ul>
              <p>Our full guide to <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link> covers this in more detail.</p>
              <h2>Step 2: Check whether you are covered after all</h2>
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
              <p>Before you pay for help, take two minutes to check. Breakdown assistance is sometimes included in products drivers forget they have:</p>
              <ul>
                <li><strong>Your car insurance.</strong> Some policies include breakdown assistance or offer it as an add-on. Check your policy documents or insurer&#x27;s app.</li>
                <li><strong>Your bank account.</strong> Some packaged bank accounts include breakdown cover.</li>
                <li><strong>Your vehicle.</strong> Some newer vehicles come with manufacturer roadside assistance for a period, often linked to the warranty. Look in the handbook, service book or on the windscreen.</li>
                <li><strong>A lease, finance or company car agreement.</strong> If the vehicle is leased or provided by work, the lease company or fleet manager may have a breakdown line.</li>
                <li><strong>A friend or family member&#x27;s policy.</strong> Some personal policies cover the person rather than the vehicle, so check whether you are a named member as a passenger.</li>
              </ul>
              <p>If you find you are covered, use that provider. If not, move to Step 3.</p>
              <h2>Step 3: Why buying a policy now may not help</h2>
              <p>It is tempting to buy cover online while you wait. Be careful. The RAC&#x27;s own guidance says you should not buy a breakdown policy if you have already broken down, because most policies start 24 hours after purchase and the provider may not be able to help with a breakdown that existed before the policy started.</p>
              <p>Some providers offer a separate pay-on-the-day service for non-members. That is different from buying a standard policy. If you go down that route, be clear on the call that you have already broken down and have no cover.</p>
              <p>The simpler alternative is to call a recovery company directly and pay for the job you need.</p>
              <h2>Step 4: Decide what kind of help you need</h2>
              <p>The right help depends on what has gone wrong and where the vehicle is. Thinking about it before you call makes the conversation quicker.</p>
              <p><strong>Roadside assistance</strong> may be enough if the problem is simple and the vehicle is otherwise safe, such as a flat or discharged battery. See our <Link href="/services/roadside-assistance" className="font-semibold hover:underline">roadside assistance</Link> and <Link href="/services/jump-starts" className="font-semibold hover:underline">jump start</Link> services.</p>
              <p><strong>Breakdown recovery</strong> is needed when the vehicle cannot be fixed at the roadside or is unsafe to drive: a mechanical failure, an electrical fault, overheating, a serious warning light, or wheel, steering or suspension damage. See our <Link href="/services/breakdown-assistance" className="font-semibold hover:underline">nationwide breakdown recovery</Link> page.</p>
              <p><strong>Towing or planned recovery</strong> suits a vehicle that is already parked safely, such as a car that will not start on the driveway or at work. There is no traffic rushing past, so you have time to book a garage first. See <Link href="/services/towing" className="font-semibold hover:underline">towing</Link> and <Link href="/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link>.</p>
              <p><strong>Motorway recovery</strong> has its own safety requirements. See our <Link href="/services/motorway-breakdown-recovery" className="font-semibold hover:underline">motorway breakdown recovery</Link> page.</p>
              <p>If you are not sure which applies, describe the symptoms on the call and let the operator help you decide.</p>
              <h2>Step 5: What to tell the recovery operator</h2>
              <p>A clear, complete description helps the operator decide whether roadside help or full recovery is needed, and which equipment to bring. Have this information ready:</p>
              <p><strong>Location</strong></p>
              <ul>
                <li>The road name or number and the direction of travel.</li>
                <li>The nearest junction, landmark, postcode or a map pin.</li>
                <li>Exactly where the vehicle is: hard shoulder, lay-by, verge, driveway, car park (name and level).</li>
              </ul>
              <p><strong>Vehicle</strong></p>
              <ul>
                <li>Make, model and registration.</li>
                <li>Whether it is a car, van or 4x4, and whether it is loaded or towing anything.</li>
              </ul>
              <p><strong>Condition</strong></p>
              <ul>
                <li>What happened before it stopped: warning lights, noises, smoke, loss of power.</li>
                <li>Whether it starts, rolls, steers and brakes.</li>
                <li>Any damage to wheels, tyres or bodywork.</li>
                <li>Whether you have the keys.</li>
              </ul>
              <p><strong>Destination</strong></p>
              <ul>
                <li>Where the vehicle should go: a named garage, your home, or another agreed address.</li>
                <li>Whether the garage is open and expecting the vehicle.</li>
              </ul>
              <p><strong>People</strong></p>
              <ul>
                <li>How many people are with the vehicle, and whether anyone is vulnerable, elderly, unwell or travelling with young children.</li>
              </ul>
              <h2>Step 6: Agree the price before work starts</h2>
              <p>Without cover, you are paying directly, so be clear about cost before anything happens:</p>
              <ul>
                <li><strong>Ask for a price</strong> for the job you have described, and confirm what it includes: attendance, recovery to the named destination, and any extra equipment.</li>
                <li><strong>Mention anything that could change the job,</strong> such as locked wheels, no keys, a low car park entrance or a long distance to the garage.</li>
                <li><strong>Confirm payment</strong> methods when you book.</li>
                <li><strong>Keep a record</strong> of the agreed price, the destination and the operator&#x27;s details.</li>
              </ul>
              <p>A reputable operator will be happy to explain how the price is worked out. If the vehicle&#x27;s condition turns out to be different from what was described, any change should be discussed with you before the work goes ahead.</p>
              <h2>Step 7: Plan where the vehicle is going</h2>
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
              <p>Garages are not always open when vehicles break down. Before the vehicle is moved, decide where it will go:</p>
              <ul>
                <li><strong>A garage you trust,</strong> if it is open or has a drop-off arrangement.</li>
                <li><strong>Your home,</strong> if the garage is closed and the vehicle cannot stay where it is.</li>
                <li><strong>Another agreed address,</strong> if you are far from home and want the vehicle taken back to your own area.</li>
              </ul>
              <p>If you are a long way from home, ask about <Link href="/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link>. Our guide to <Link href="/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">moving a non-running vehicle in the UK</Link> covers planned moves in more detail.</p>
              <h2>After the breakdown: avoid being caught out again</h2>
              <p>Once the vehicle is safe and the immediate problem is dealt with, it is worth spending a few minutes on prevention:</p>
              <ul>
                <li><strong>Check your existing products</strong> (insurance, bank account, warranty) so you know what you have.</li>
                <li><strong>Decide whether cover suits you.</strong> For some drivers a policy makes sense; others are comfortable paying for help when needed. Either way, decide before the next breakdown, not during it.</li>
                <li><strong>Save a recovery number in your phone</strong> so you are not searching while stranded.</li>
                <li><strong>Keep basic essentials in the vehicle:</strong> a charged phone and charger, warm clothing, a high-visibility vest and, for ordinary roads, a warning triangle.</li>
              </ul>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Broken Down Without Cover?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Once you are safe, call AHS Recovery with your location, vehicle details and what has happened.
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
            <p><strong>AHS Recovery</strong> provides roadside assistance, towing and vehicle recovery from Ilford, Essex, covering local recovery within approximately 60 miles, plus nationwide breakdown recovery and vehicle transportation. You can call us directly to discuss your situation, whether or not you have a breakdown policy.</p>
              <p>Once you are safe, call <strong>07883 546955</strong> or send a WhatsApp message to the same number with your location, vehicle details and what has happened. We are based at 203 Tiptree Cres, Ilford IG5 0ST.</p>
              <p>You can also use our <Link href="/contact" className="font-semibold hover:underline">contact page</Link> or read more guides on the <Link href="/blog" className="font-semibold hover:underline">AHS Recovery blog</Link>.</p>
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
