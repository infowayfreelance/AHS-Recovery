import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("12v-vs-24v-jump-start")!

export const metadata = buildMetadata({
  title: "12V vs 24V Jump Starts: Which Does Your Vehicle Need?",
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
    "question": "How do I know if my vehicle is 12V or 24V?",
    "answer": "Check the vehicle handbook first, then the battery labels, which show the voltage printed on the case. For fleet vehicles, the operator or workshop can confirm it. Do not disconnect or move batteries to find out. If you remain unsure, tell us when you contact us."
  },
  {
    "question": "Can you jump start a 24V vehicle with a 12V battery or starter?",
    "answer": "Generally, no. A 24V system needs compatible 24V equipment. Using a 12V source on a 24V system will usually fail to start it and may strain the equipment. Always follow the manufacturer's procedure, and arrange professional help if you are unsure."
  },
  {
    "question": "Are vans 12V or 24V?",
    "answer": "Most vans are 12V, but you should confirm this in your handbook rather than assume. Converted, imported or specialist vehicles can differ."
  },
  {
    "question": "Is it dangerous to jump start with the wrong voltage?",
    "answer": "It can be. A mismatch may damage electronic components and the battery, and may create a safety risk. This is why confirming the voltage and following the manufacturer's guidance matters before any connection is made."
  },
  {
    "question": "Can you jump start a commercial vehicle at the roadside?",
    "answer": "Where the vehicle is suitable, yes. We offer 12V and 24V jump start assistance for suitable cars, vans and commercial vehicles, depending on the vehicle's electrical system and condition. Send us the details so we can assess your request."
  },
  {
    "question": "What if the vehicle still won't start after a jump?",
    "answer": "The cause may be something other than a flat battery, such as a damaged battery, an alternator fault or a starter problem. In that case, recovery options are the sensible next step, and we can talk through what is suitable."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function JumpStartVoltageBlogPost() {
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Jump Start Assistance</span>
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
              <p>Most cars and vans usually run on a 12V electrical system. Some larger commercial vehicles use 24V, which is often achieved by linking two 12V batteries in series. This matters for jump starting because the equipment must match the vehicle&#x27;s system voltage. Connecting the wrong voltage can damage electronics and create a safety risk.</p>
              <p>If you are not sure which system your vehicle uses, do not guess. Check the handbook, read the battery labels, or ask the vehicle&#x27;s operator or manufacturer before anything is connected. This guide explains the difference between the two systems, how to check, what to prepare before you call, and when recovery is the safer option. For suitable vehicles, AHS Recovery offers <Link href="https://ahsrecovery.co.uk/services/jump-starts" className="font-semibold hover:underline">12V and 24V jump start assistance</Link>, subject to assessment.</p>
              <h2>12V and 24V systems: the short explanation</h2>
              <p>A vehicle&#x27;s <strong>system voltage</strong> is the nominal voltage of its electrical supply. It determines which starter motor, lighting and electronic components the vehicle is designed around.</p>
              <ul><li><strong>A 12V system</strong> is built around a single 12-volt battery. This is the arrangement most drivers know.</li><li><strong>A 24V system</strong> supplies twice the nominal voltage. It is commonly built from two 12V batteries connected in series, so their voltages add together.</li></ul>
              <p>The practical consequence is that a jump start source must be compatible with the system it is helping. A unit designed only for 12V is not intended for a 24V system. Equipment made for 24V is not something to connect to a 12V vehicle without the correct settings and procedure.</p>
              <h2>12V vs 24V at a glance</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/van-car-lorry-lineup-yard.webp" alt="Car, van and lorry parked side by side in a yard" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>The table below shows what you will <em>typically</em> find. Vehicle design varies, so treat it as a guide rather than a rule.</p>
              <div className="overflow-x-auto"><table><thead><tr><th></th><th>12V systems</th><th>24V systems</th></tr></thead><tbody><tr><td><strong>Typically found on</strong></td><td>Cars and most vans</td><td>Some larger commercial vehicles</td></tr><tr><td><strong>Typical battery arrangement</strong></td><td>Usually one 12V battery</td><td>Often two 12V batteries linked in series</td></tr><tr><td><strong>Equipment needed</strong></td><td>12V-compatible jump equipment</td><td>Compatible 24V equipment</td></tr><tr><td><strong>How to confirm</strong></td><td>Handbook, battery label</td><td>Handbook, battery labels, operator or manufacturer</td></tr><tr><td><strong>Risk if mismatched</strong></td><td>Damage to electronics and battery</td><td>Failed start attempts, damage to electronics and battery</td></tr></tbody></table></div>
              <p><em>Always confirm against your own vehicle&#x27;s handbook before relying on any general guidance.</em></p>
              <h2>Which vehicles usually use 12V, and which use 24V</h2>
              <h3>Cars and vans</h3>
              <p>Cars and vans generally use 12V systems. This includes panel vans and many light commercial vehicles. Some vehicles have additional batteries for auxiliary equipment, so seeing more than one battery does not always mean the vehicle is 24V.</p>
              <h3>Larger commercial vehicles</h3>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/two-12v-batteries-series-truck.webp" alt="Two commercial vehicle batteries linked in a truck battery box" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>Some larger commercial vehicles are designed around 24V because the higher voltage suits heavier starting loads. These vehicles often carry two batteries linked in series. If you manage or drive a larger commercial vehicle, assume nothing: confirm the voltage from the vehicle&#x27;s own documentation.</p>
              <h3>Why vehicle type is not a guarantee</h3>
              <p>A vehicle&#x27;s category does not settle its voltage. Imported vehicles, converted vehicles, specialist builds and older models can differ from what you might expect. Two batteries side by side may be linked in series for 24V, or linked in parallel for extra capacity at 12V. This is exactly why the handbook and labels carry more weight than the vehicle&#x27;s size or purpose.</p>
              <h2>How to check your vehicle&#x27;s voltage before calling</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/vehicle-handbook-battery-section.webp" alt="Checking the vehicle handbook before a jump start" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>You do not need to touch any wiring to find out. Work through these in order.</p>
              <ol><li><strong>Check the handbook.</strong> The owner&#x27;s or operator&#x27;s manual normally states the electrical system voltage, usually in the specification or battery section. It also describes the manufacturer&#x27;s jump-start procedure, which takes priority over any general advice.</li><li><strong>Read the battery labels.</strong> Look for the voltage printed on the battery case. Do this by looking only. Do not disconnect cables, move batteries or remove covers to read a label.</li><li><strong>Look at the documentation or ask the operator.</strong> For fleet or company vehicles, the fleet manager, workshop or leasing provider will normally know the system voltage. The manufacturer&#x27;s dealer can also confirm it from the vehicle details.</li><li><strong>If you still cannot confirm it, say so.</strong> Telling us you are unsure is far more useful than guessing. We can then take the vehicle details into account when we assess the request.</li></ol>
              <p>Routine checks help avoid flat-battery call-outs in the first place. The Highway Code&#x27;s <Link href="https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" className="font-semibold hover:underline">Annex 6 on vehicle maintenance, safety and security</Link> is a useful general reference. For commercial vehicles, it points to daily walkaround checks as recommended by DVSA.</p>
              <h2>Why using the wrong voltage is risky</h2>
              <p>Modern vehicles contain sensitive electronic systems, including engine management, lighting and driver-assistance units. These are designed around a specific supply voltage.</p>
              <ul><li><strong>Supplying too much voltage</strong> can damage electronic components and the battery, and may create a safety risk.</li><li><strong>Supplying too little voltage</strong> will generally fail to start the vehicle. Repeated attempts can strain the equipment and the battery.</li><li><strong>Incorrect connection</strong> can compound either problem.</li></ul>
              <p>None of this is specific to one make or model, which is why the procedure should follow the manufacturer&#x27;s guidance. We do not recommend improvised connections or borrowed equipment, particularly where the voltage is unconfirmed.</p>
              <h2>Information to have ready when you request a jump start</h2>
              <p>Having the right details to hand helps us assess whether a jump start is suitable. Before you call or message, gather the following.</p>
              <ul><li><strong>Location:</strong> the exact address or a clear description, and whether the vehicle is on a public road, in a car park or on private land.</li><li><strong>Make and model:</strong> include the vehicle type, such as car, van or larger commercial vehicle.</li><li><strong>System voltage, if known:</strong> 12V, 24V or &quot;not sure&quot;. Never guess.</li><li><strong>Symptoms:</strong> whether the vehicle is silent, clicking, turning over slowly or showing dashboard warnings. Mention if it has been standing for some time or if lights were left on.</li><li><strong>Access:</strong> whether the bonnet and battery can be reached, whether the vehicle is parked closely against another, and whether keys are available.</li><li><strong>Any visible damage:</strong> a cracked, swollen or leaking battery is important to mention up front.</li></ul>
              <p>If the problem turns out to be something other than a flat battery, our <Link href="https://ahsrecovery.co.uk/services/roadside-assistance" className="font-semibold hover:underline">roadside assistance</Link> service covers other roadside problems.</p>
              <h2>How AHS Recovery&#x27;s 12V and 24V jump start assistance works</h2>
              <p>AHS Recovery provides 12V and 24V jump start assistance for suitable cars, vans and commercial vehicles. Some larger commercial vehicles use 24V and require compatible equipment. Whether assistance is possible depends on the vehicle&#x27;s electrical system and its condition.</p>
              <p>The process works in four stages:</p>
              <ol><li><strong>You share your details.</strong> Send your location, vehicle information and symptoms, along with the voltage if you know it.</li><li><strong>We assess the request.</strong> We consider the vehicle type, its electrical system and its condition, to establish whether a jump start is suitable.</li><li><strong>A jump start is provided if suitable.</strong> If the vehicle is a good candidate, we carry out the jump start.</li><li><strong>Recovery options if it will not start.</strong> If a jump start is not suitable or does not work, we can discuss recovery options.</li></ol>
              <p>You can read more on the <Link href="https://ahsrecovery.co.uk/services/jump-starts" className="font-semibold hover:underline">12V and 24V jump start assistance</Link> page. If you are in Ilford, elsewhere in Essex or further afield, send us your location and we will confirm whether we can help.</p>
              <h2>When a jump start is not the right answer</h2>
              <p>A jump start only helps when the battery is flat and everything else is sound. In some situations it may not work, or it may be unsafe to try.</p>
              <ul><li><strong>A damaged or leaking battery.</strong> A cracked, swollen or leaking battery should not be jump started. An internal battery fault can make the attempt ineffective or unsafe.</li><li><strong>A battery that keeps going flat.</strong> If the vehicle needs a jump start repeatedly, there is probably a cause that needs looking at, such as a failing battery, a charging fault or a component draining power.</li><li><strong>An alternator or starter problem.</strong> If the vehicle starts but dies soon after, or will not turn over even with a good supply, the fault may lie elsewhere.</li><li><strong>Unsafe surroundings.</strong> If the vehicle is in a position where working on it would be unsafe, getting it moved may come first.</li></ul>
              <p>In those cases the next step is usually proper <Link href="https://ahsrecovery.co.uk/services/breakdown-assistance" className="font-semibold hover:underline">breakdown assistance</Link>, <Link href="https://ahsrecovery.co.uk/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link> or <Link href="https://ahsrecovery.co.uk/services/towing" className="font-semibold hover:underline">towing to a garage</Link>. For non-running plant, our <Link href="https://ahsrecovery.co.uk/services/plant-haulage" className="font-semibold hover:underline">plant haulage</Link> service offers transport, subject to assessment.</p>
              <p>If you do not have breakdown cover, our guide on what to do when you are <Link href="https://ahsrecovery.co.uk/blog/broken-down-no-breakdown-cover" className="font-semibold hover:underline">broken down without breakdown cover</Link> explains your options.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Vehicle Will Not Start?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Send AHS Recovery your location, vehicle details, symptoms and system voltage if known so we can assess the request.
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
                    <Link href="/services/jump-starts" className="text-primary font-medium hover:underline">
                      Jump Starts
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/roadside-assistance" className="text-primary font-medium hover:underline">
                      Roadside Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                      Breakdown Assistance
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
                  {faq.question === "What if the vehicle still won't start after a jump?" ? (
                    <>The cause may be something other than a flat battery, such as a damaged battery, an alternator fault or a starter problem. In that case,{" "}
                      <Link href="https://ahsrecovery.co.uk/services/vehicle-recovery" className="font-semibold hover:underline">recovery options</Link>{" "}
                      are the sensible next step, and we can talk through what is suitable.
                    </>
                  ) : faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center px-6">
        <Image
          src="/images/12v-vs-24v-jump-start-featured.webp"
          alt="Technician connecting a jump pack to a van battery"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Request 12V or 24V jump start assistance</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
<p>If your vehicle will not start and you are unsure whether it is 12V or 24V, get in touch and give us the details from the checklist above. We will assess the request and tell you whether a jump start is suitable or whether recovery is the safer route.</p>
              <ul><li><strong>Phone or WhatsApp:</strong> 07883 546955</li><li><strong>Base:</strong> AHS Recovery, 203 Tiptree Cres, Ilford IG5 0ST</li><li><strong>Online:</strong> use our <Link href="https://ahsrecovery.co.uk/contact" className="font-semibold hover:underline">contact page</Link>, or read more about <Link href="https://ahsrecovery.co.uk/services/jump-starts" className="font-semibold hover:underline">12V and 24V jump start assistance</Link>.</li></ul>
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
