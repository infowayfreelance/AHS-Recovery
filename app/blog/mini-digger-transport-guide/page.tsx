import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("mini-digger-transport-guide")!

export const metadata = buildMetadata({
  title: "Mini Digger Transport: A Plant Haulage Planning Checklist",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}${post.heroImage}`,
    width: 1200,
    height: 630,
    alt: post.heroImageAlt,
  },
})

const faqs = [
  {
    "question": "How is a mini digger transported?",
    "answer": "It is normally loaded onto a plant trailer or a low-loader style deck, positioned, lowered and chained down at its lashing points. It is then driven to the destination and unloaded there."
  },
  {
    "question": "What information do I need to give for a plant haulage quote?",
    "answer": "Give the make and model, the manufacturer's operating weight with attachments, the condition, both addresses with access notes, your preferred dates and an on-site contact. The quote table above lists everything."
  },
  {
    "question": "Can you move a mini digger that won't start?",
    "answer": "Non-running plant is subject to assessment. Tell us what is wrong, where the machine is and what the ground is like, and we will assess how it can be moved."
  },
  {
    "question": "Do I need to be on site for collection and delivery?",
    "answer": "Someone should be available at each end, or you should name a contact who can open gates and direct the driver. Agree this when you book."
  },
  {
    "question": "Can I tow a mini digger on a trailer behind my car?",
    "answer": "It depends on your licence, your vehicle and the combined weights. Use the GOV.UK towing pages linked above to check, and treat this guide as general information only."
  },
  {
    "question": "What's the difference between plant haulage and winch-out recovery?",
    "answer": "Plant haulage moves a machine from A to B on a suitable vehicle. Winch-out recovery frees a machine that is stuck or bogged down. A stuck machine may need the second before the first."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function MiniDiggerTransportBlogPost() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.metaDescription,
    image: `${siteConfig.siteUrl}${post.heroImage}`,
    datePublished: post.publishedDate, dateModified: post.updatedDate,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
  }
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.siteUrl}/blog/${post.slug}` },
    ],
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Plant Haulage</span>
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
              <p>Mini digger transport means moving a compact excavator from one site to another on a suitable plant trailer or vehicle deck. The machine is loaded carefully, secured with rated restraints and unloaded at the other end. Most of the work happens before the vehicle arrives: knowing the machine, checking access at both addresses and giving the haulier accurate details.</p>
              <p>This guide follows the order the job runs in: plan, book, collect, deliver. It is written for builders, groundworkers, landscapers, farmers and private buyers. If you need the service itself rather than the planning, see our <Link href="https://ahsrecovery.co.uk/services/plant-haulage" className="font-semibold hover:underline">plant haulage service</Link>.</p>
              <h2>Short answer: how mini digger transport works</h2>
              <p>A mini digger is normally carried on a plant trailer, or on a flatbed or low-loader style deck. It is driven or winched into position, lowered, chained down at its lashing points and unloaded at the destination. Four stages cover the whole job:</p>
              <ol><li><strong>Plan:</strong> gather the machine details and check both sites.</li><li><strong>Book:</strong> send the haulier accurate information so the move can be assessed.</li><li><strong>Collect:</strong> prepare the machine, then load and secure it.</li><li><strong>Deliver:</strong> unload, check the machine and hand it over.</li></ol>
              <p>&quot;Mini excavator transport&quot; and &quot;digger transport&quot; describe the same kind of job. AHS Recovery&#x27;s plant haulage covers mini diggers and tracked or wheeled excavators, and each job is subject to assessment. The more complete your details are at the start, the quicker that assessment goes.</p>
              <h2>Plan: the machine details a haulier needs</h2>
              <h3>Know the machine</h3>
              <p>Start with what is being moved. Have these to hand before you contact anyone:</p>
              <ul><li>Make and model, and whether it is tracked or wheeled.</li><li>The manufacturer&#x27;s operating weight, taken from the handbook, data plate or manufacturer&#x27;s specification. Ask for the figure for the machine as it will be loaded, with the bucket and any attachments fitted.</li><li>A list of attachments travelling with it, such as additional buckets or a breaker.</li></ul>
              <p>Please do not estimate the weight from memory or from a similar machine. The haulier will rely on the figure you give when choosing how to move it.</p>
              <h3>Dimensions and condition</h3>
              <p>Note the transport dimensions in the manufacturer&#x27;s specification (length, width and height with the boom folded and the bucket lowered). Then describe the condition honestly. Does it start? Does it drive and steer? Can the boom be lowered under its own power? Are there leaks, damaged tracks or missing lashing points?</p>
              <p>A machine that runs is simple to load. One that does not is still possible to move, but it is subject to assessment, so say so at the outset.</p>
              <h2>Plan: access and ground conditions at both sites</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/mini-digger-site-access-gate.webp" alt="Site entrance and ground conditions checked before collecting a mini digger" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>A well-planned collection can still fail at the gate. Check both the collection and delivery addresses against this list:</p>
              <ul><li><strong>Entrance:</strong> the width of the gate or opening, and any pinch points on the approach.</li><li><strong>Ground:</strong> soft, muddy or sloping surfaces, and whether the ground will take a loaded vehicle.</li><li><strong>Overhead restrictions:</strong> power lines, branches, scaffold or canopies over the loading area.</li><li><strong>Stopping position:</strong> where the vehicle can stop, and whether it has to load from the roadside or from within the site.</li><li><strong>Space to work:</strong> room for ramps and for the machine to move on and off.</li><li><strong>People:</strong> who will be there, and a contact who can open gates and direct the driver.</li></ul>
              <p>Farm and rural sites often have the softest ground and the longest approaches. If the machine is off the hard-standing, our <Link href="https://ahsrecovery.co.uk/services/4x4-off-road-recovery" className="font-semibold hover:underline">4x4 and off-road recovery</Link> page explains how that kind of access is handled.</p>
              <h2>Book: what to send for a quote</h2>
              <p>Send these details together when you ask for a quote. A single complete message saves repeated questions later.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Detail</th><th>What to provide</th><th>Why it matters</th></tr></thead><tbody><tr><td>Machine</td><td>Make, model, tracked or wheeled</td><td>Helps the haulier judge what suits the machine</td></tr><tr><td>Operating weight</td><td>Manufacturer&#x27;s figure, including bucket and attachments</td><td>Informs trailer and vehicle suitability</td></tr><tr><td>Dimensions</td><td>Transport length, width and height</td><td>Affects access and clearance</td></tr><tr><td>Condition</td><td>Runs or not, known faults, leaks</td><td>Affects the loading method; non-running plant is subject to assessment</td></tr><tr><td>Collection address</td><td>Full postcode, gate and ground notes, on-site contact</td><td>Allows access to be assessed in advance</td></tr><tr><td>Delivery address</td><td>Same details as above</td><td>Confirms the destination is workable</td></tr><tr><td>Dates</td><td>Preferred dates and how flexible you are</td><td>Helps with scheduling</td></tr></tbody></table></div>
              <p>Everything is assessed against these details. We cover Ilford, Essex and East London, with assessment for plant jobs within approximately 60 miles.</p>
              <h2>Prepare the machine for collection</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/mini-digger-prepared-for-collection.webp" alt="Mini digger prepared for transport with its bucket lowered and tracks cleaned" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>A little preparation makes loading safer and quicker for everyone. Before the vehicle arrives:</p>
              <ul><li>Lower the bucket and boom as far as they will go, ready for loading.</li><li>Remove loose tools, personal items and anything else not fixed in the cab.</li><li>Knock off excess mud, particularly from the tracks, so the machine does not slip on ramps and does not leave the deck dirty.</li><li>Note any leaks or damage and report them in advance. They are far easier to deal with before collection than on the day.</li><li>Gather the keys, and set aside any attachments that are travelling with the machine.</li><li>Clear the loading area of vehicles and materials.</li></ul>
              <h2>Collect: loading and securing the machine</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/plant-securing-chains-lashing-point.webp" alt="Chain tensioner securing a mini excavator to a transport deck" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <h3>Trailer and deck types</h3>
              <p>The right equipment depends on the machine and on access at both ends. Plant trailers, beavertail decks and low-loader style vehicles are all used for this kind of work, and choosing between them is a decision for the haulier after assessment. If you have been searching for a mini excavator transport trailer, the trailer is only part of the picture. The towing vehicle, the loading method and the site access count just as much, which is why the details above matter.</p>
              <h3>Loading</h3>
              <p>Loading should take place on firm, level ground with enough room to work, and with the operator following the driver&#x27;s instructions. The load must also be properly supported. GOV.UK&#x27;s <Link href="https://www.gov.uk/guidance/securing-loads-on-hgvs-and-goods-vehicles" className="font-semibold hover:underline">load securing guidance</Link> says the wheels or tracks of plant should be sufficiently supported by the load bed. Where possible, plant should be reversed on and placed against the step to stop it moving forward.</p>
              <h3>Securing</h3>
              <p>Once the machine is positioned, it is restrained for the journey. GOV.UK&#x27;s guidance on <Link href="https://www.gov.uk/guidance/securing-loads-on-hgvs-and-goods-vehicles/6-how-to-carry-different-types-of-load-in-hgvs-and-goods-vehicles" className="font-semibold hover:underline">how to carry different types of load</Link> sets out the principles for wheeled and tracked equipment. In practice, that means:</p>
              <ul><li>A combination of physical restraints, with chains preferred over straps for heavy loads.</li><li>The machine stable on the load bed, with chocks or timbers where needed. Any chocks or timbers should themselves be secured to the load bed.</li><li>Chains attached to the machine&#x27;s lashing points, as the manufacturer intends.</li><li>The bucket lowered and the machine immobilised.</li></ul>
              <p>These are the official principles in outline, and the page is the place to check the detail. We re-checked it when writing this guide.</p>
              <h2>Deliver: unloading and handover</h2>
              <p>At the destination, the same access checks apply in reverse. The driver will unload the machine onto firm ground, away from overhead hazards, with a person on site to direct where it goes.</p>
              <p>Check the machine against what you were told at booking, and mention any concern before the vehicle leaves. If you are arranging wider vehicle moves at the same time, our <Link href="https://ahsrecovery.co.uk/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link> service covers those.</p>
              <h2>Mini digger that won&#x27;t start or is stuck on site?</h2>
              <p>Not every move starts with a running machine on solid ground. The two services solve different problems.</p>
              <div className="overflow-x-auto"><table><thead><tr><th></th><th>Plant haulage</th><th>Winch-out recovery</th></tr></thead><tbody><tr><td>Typical situation</td><td>Relocation, sale, purchase, moving between sites</td><td>Machine bogged down, sunk or stuck and unable to move itself</td></tr><tr><td>Machine condition</td><td>Usually runs; non-running is subject to assessment</td><td>Often cannot drive out</td></tr><tr><td>Main task</td><td>Load, secure and transport</td><td>Free the machine from its position</td></tr><tr><td>What to tell the haulier</td><td>Details from the quote table above</td><td>Where it is stuck, ground conditions and how it got there</td></tr></tbody></table></div>
              <p>Some jobs involve both. If the machine is stuck first, it may need <Link href="https://ahsrecovery.co.uk/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery</Link> before it can be loaded. For wider planning on a machine that will not move under its own power, see our <Link href="https://ahsrecovery.co.uk/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">planning checklist for moving a non-running vehicle</Link>.</p>
              <h2>Towing a mini digger yourself: what to check first</h2>
              <p>Some owners consider towing a mini digger on a trailer behind their own vehicle. This guide cannot advise on whether that is suitable for you, because the rules depend on your licence, your vehicle and the combined weights involved.</p>
              <p>Start with GOV.UK. Its <Link href="https://www.gov.uk/towing-with-car" className="font-semibold hover:underline">towing with a car</Link> page explains what your licence allows, and its <Link href="https://www.gov.uk/guidance/tow-a-trailer-with-a-car-safety-checks" className="font-semibold hover:underline">safety checks for towing a trailer</Link> page covers weight limits and loading. Check both against the machine&#x27;s manufacturer&#x27;s weight before you decide. This is general information, not legal advice. If the numbers do not clearly work, a professional plant move is the safer route.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Planning a Machinery Move?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Send AHS Recovery the machine details, both addresses and access notes so the move can be assessed.
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
                    <Link href="/services/plant-haulage" className="text-primary font-medium hover:underline">
                      Plant Haulage
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/4x4-off-road-recovery" className="text-primary font-medium hover:underline">
                      4x4 &amp; Off-Road Recovery
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
          src="/images/mini-digger-prepared-for-collection.webp"
          alt="Mini digger prepared for transport with its bucket lowered and tracks cleaned"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange plant haulage with AHS Recovery</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
<p>If you need a mini digger or excavator moved, send us the details from the checklist above and we will assess the job. We cover <Link href="https://ahsrecovery.co.uk/services/plant-haulage" className="font-semibold hover:underline">plant haulage in Ilford and Essex</Link>, as well as East London, with plant jobs assessed within approximately 60 miles.</p>
              <p><strong>AHS Recovery</strong>, 203 Tiptree Cres, Ilford IG5 0ST <strong>Phone / WhatsApp:</strong> 07883 546955 <strong>Web:</strong> <Link href="https://ahsrecovery.co.uk/contact" className="font-semibold hover:underline">contact AHS Recovery</Link></p>
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
