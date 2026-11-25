import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("moving-a-sorn-untaxed-or-no-mot-car")!

export const metadata = { ...buildMetadata({
  title: "Moving a SORN, Untaxed or No-MOT Car: A UK Planning Guide",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}${post.heroImage}`,
    width: 1200,
    height: 630,
    alt: post.heroImageAlt,
  },
}), title: { absolute: "Moving a SORN, Untaxed or No-MOT Car: A UK Planning Guide" } }

const faqs = [
  {
    "question": "Can a SORN car be transported on a recovery truck?",
    "answer": "Yes, discuss fully carried transport and confirm the loading and destination arrangements. Tell the operator its status before booking; do not assume every recovery method is suitable."
  },
  {
    "question": "Can I tow an untaxed car with a rope or A-frame?",
    "answer": "Do not assume this is lawful. Some arrangements leave wheels on the road. Explain the vehicle’s status and ask for fully carried transport; check your circumstances with DVLA and your insurer."
  },
  {
    "question": "Can I drive a SORN car to its MOT?",
    "answer": "GOV.UK allows journeys to or from a pre-booked MOT or other testing appointment. This does not remove roadworthiness or insurance requirements. Check before driving."
  },
  {
    "question": "Do I need to tax a car before it is transported?",
    "answer": "Distinguish carriage from driving. Explain that the car is untaxed and confirm a fully carried move. Separately check DVLA’s requirements for keeping it off road or returning it to road use."
  },
  {
    "question": "What paperwork do I need for collection?",
    "answer": "Ask the operator what evidence of authority and vehicle identity is needed. Have relevant purchase or release documents, available vehicle papers, keys and contact details ready."
  },
  {
    "question": "Can you move a car that has failed its MOT?",
    "answer": "It may be possible, subject to condition and access. Disclose the test result and defects. Ask the Police says a dangerous failure must not be driven away before repair."
  }
]

const faqAnswers = [
  <>Yes, discuss fully carried transport and confirm the loading and destination arrangements. Tell the operator its status before booking; do not assume every recovery method is suitable.</>,
  <>Do not assume this is lawful. Some arrangements leave wheels on the road. Explain the vehicle’s status and ask for fully carried transport; check your circumstances with DVLA and your insurer.</>,
  <><Link href="https://www.gov.uk/sorn-statutory-off-road-notification" className="font-semibold hover:underline">GOV.UK</Link> allows journeys to or from a pre-booked MOT or other testing appointment. This does not remove roadworthiness or insurance requirements. Check before driving.</>,
  <>Distinguish carriage from driving. Explain that the car is untaxed and confirm a fully carried move. Separately check DVLA’s requirements for keeping it off road or returning it to road use.</>,
  <>Ask the operator what evidence of authority and vehicle identity is needed. Have relevant purchase or release documents, available vehicle papers, keys and contact details ready.</>,
  <>It may be possible, subject to condition and access. Disclose the test result and defects. <Link href="https://www.askthe.police.uk/faq/?id=cf19ce7e-12db-eb11-bacb-0022483f5223" className="font-semibold hover:underline">Ask the Police</Link> says a dangerous failure must not be driven away before repair.</>
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function SornVehicleTransportBlogPost() {
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Transport</span>
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
              <p>Moving a SORN car, or arranging to transport a car without MOT or tax, starts with two checks: its legal status and its physical condition. A car that starts and drives is not automatically ready for a public-road journey.</p>
              <p>For an ordinary move outside the permitted driving exceptions, plan transport with all four wheels carried clear of the road. Ask the operator to confirm the method, collection access and receiving arrangements before booking. Do not assume a rope tow or partial lift solves missing paperwork.</p>
              <p>This guide covers the status checks, documents and practical arrangements for a planned move. It is general information, not legal advice. Check the linked official guidance and ask DVLA or your insurer about your circumstances.</p>
              <h2>Short answer: how an off-road vehicle can be moved</h2>
              <p>Describe the car’s status before requesting transport, then agree a method suitable for its condition. Explain whether it is SORN, untaxed, without a current MOT, uninsured or affected by several of these issues.</p>
              <p>AHS Recovery provides <Link href="https://ahsrecovery.co.uk/services/vehicle-transportation-delivery" className="font-semibold hover:underline">nationwide vehicle transport</Link>, subject to assessment. Tell us where the car is, where it needs to go and whether it starts, rolls, steers and brakes.</p>
              <p>Keep the paperwork and mechanical questions separate. A current MOT does not confirm the collection entrance is accessible; a working engine does not settle whether you can drive the car there.</p>
              <h2>Definitions: SORN, untaxed, no MOT and uninsured</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/sorn-car-stored-in-garage-off-road.webp" alt="Car stored off the road in a private garage" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>These terms describe different things. Record each one separately rather than telling the operator only that the car is “off road”.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Status</th><th>What it means for your planning</th></tr></thead><tbody><tr><td>SORN</td><td>A Statutory Off Road Notification concerns keeping the vehicle off public roads; check the limited driving exception separately.</td></tr><tr><td>Untaxed</td><td>Vehicle tax is not current. Confirm the position before proposing any driving.</td></tr><tr><td>No current MOT</td><td>The required test certificate has expired or is absent. Check whether an exemption applies and what the official driving exceptions allow.</td></tr><tr><td>Uninsured</td><td>Do not assume an MOT appointment provides insurance. Confirm the position with your insurer.</td></tr></tbody></table></div>
              <p>A vehicle can fit more than one row. Tell the operator everything you know, including any uncertainty. If you are buying it, ask the seller to explain its current status rather than relying on an old advert.</p>
              <h2>What the official guidance says</h2>
              <p>Use the official sources for the rules, then plan the move around the circumstances that apply. This section summarises the relevant distinctions rather than treating every garage journey as an exception.</p>
              <h3>SORN and public-road use</h3>
              <p><Link href="https://www.gov.uk/sorn-statutory-off-road-notification" className="font-semibold hover:underline">GOV.UK’s SORN guidance</Link> describes off-road storage as keeping the vehicle away from public roads, for example on a driveway or private land. It limits public-road driving to journeys to or from a pre-booked MOT or other testing appointment.</p>
              <p>A move to a new home, buyer or storage address is not that testing journey. Arrange collection from the off-road location instead of assuming the car can be driven to meet the transporter elsewhere.</p>
              <h3>An expired MOT and testing appointments</h3>
              <p><Link href="https://www.gov.uk/getting-an-mot" className="font-semibold hover:underline">GOV.UK’s MOT guidance</Link> says an expired MOT prevents ordinary road driving or parking. It lists exceptions for journeys to or from repairs and to a pre-arranged MOT. Check SORN restrictions separately when both apply.</p>
              <p><Link href="https://www.askthe.police.uk/faq/?id=cf19ce7e-12db-eb11-bacb-0022483f5223" className="font-semibold hover:underline">Ask the Police Q360</Link> explains testing and repair exceptions, including insurance. For other no-MOT moves, it specifies a trailer or recovery vehicle with every wheel clear of the ground. Dangerous MOT defects prevent driving away until repaired. <Link href="https://www.gov.uk/sorn-statutory-off-road-notification" className="font-semibold hover:underline">GOV.UK</Link></p>
              <h2>Why all four wheels off the road matters</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/sorn-four-wheels-on-transporter-deck.webp" alt="Car secured with all four wheels on a transporter deck" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>Being carried and being towed are different arrangements. Ask how the car will travel, not simply whether someone can “recover” it.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Proposed method</th><th>What to establish before agreeing</th></tr></thead><tbody><tr><td>Vehicle carried on a transporter</td><td>Confirm the whole car will be carried, with no wheels running on the road.</td></tr><tr><td>Suspended tow</td><td>Some wheels may remain on the road; do not treat this as equivalent to full carriage.</td></tr><tr><td>A-frame or rope tow</td><td>Do not assume attaching another vehicle removes tax, MOT or insurance concerns. Ask about a fully carried alternative.</td></tr></tbody></table></div>
              <p>For an untaxed car, do not infer permission from a valid MOT or the short distance involved. Confirm the applicable rules with DVLA and your insurer rather than using a general towing description as approval.</p>
              <p>When discussing <Link href="https://ahsrecovery.co.uk/services/towing" className="font-semibold hover:underline">towing services</Link>, explain the missing documents or off-road status at the start. These comparisons describe methods generally; they are not claims about particular equipment supplied by AHS Recovery.</p>
              <h2>Typical situations: purchases, storage and garage trips</h2>
              <p>The reason for moving determines the contacts and permissions you need. Identify who can release the car and who can receive it before choosing a collection date.</p>
              <h3>Buying or receiving a car</h3>
              <p>Confirm the seller’s address, the exact vehicle and the agreed collection authority. Ask who holds the keys and whether the person meeting the driver can release it. An auction purchase may also have specific release instructions.</p>
              <p>If you have inherited a car, explain who is authorised to arrange collection. Ask what evidence the operator needs before booking, rather than assuming that having the keys settles the paperwork.</p>
              <h3>Relocating a stored project vehicle</h3>
              <p>Check whether the receiving property has a suitable off-road place for the car. Agree the unloading position with the recipient before collection. Avoid a plan that ends with an unconfirmed roadside drop-off.</p>
              <p>Arrange access to both properties, including any gate or shared entrance. Tell the operator if the vehicle has remained in storage and its condition has not recently been checked.</p>
              <p>Do not describe a garage as accessible without checking the approach. A car may fit through an entrance while the collection vehicle cannot reach a suitable loading position. Send photographs and let the operator assess the arrangement.</p>
              <h3>Moving to a garage or MOT centre</h3>
              <p>Confirm that the premises expect the vehicle and can accept it in its present condition. A booking for a test and an arrangement to unload a non-running car are separate conversations.</p>
              <p>Share any failed-MOT report and known defects with the operator. Where driving is unsuitable, discuss <Link href="https://ahsrecovery.co.uk/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link> rather than assuming the appointment makes the journey possible.</p>
              <h2>Details and documents to prepare</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/sorn-vehicle-paperwork-and-keys.webp" alt="Vehicle documents and keys prepared for collection" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>Prepare one collection brief covering the car, both addresses and the people involved. Ask what documents must be shown, who needs to attend and how the keys should be handed over.</p>
              <h3>Vehicle identity and authority</h3>
              <ul><li>Make, model and registration where available.</li><li>V5C/logbook where available, plus purchase or release documents relevant to the collection.</li><li>Confirmation that you have permission to arrange the move.</li><li>Contact details for the person releasing it and the person receiving it.</li><li>Any known SORN, tax, MOT or insurance issue, including uncertainty about the records.</li></ul>
              <p>Do not send sensitive documents to an unconfirmed contact. First establish what the operator requires and how to provide it. Keep the collection instructions consistent between you, the seller and the receiving site.</p>
              <h3>Condition, keys and access</h3>
              <ul><li>Say whether the engine starts and the car rolls, steers and brakes.</li><li>Mention locked or damaged wheels, leaks and other known faults.</li><li>Confirm whether keys are available and who holds them.</li><li>Give collection and delivery postcodes and full addresses.</li><li>Describe gates, slopes, restricted entrances and surrounding parked vehicles.</li><li>Include the approximate vehicle size and explain any modifications that could affect collection.</li></ul>
              <p>Safe photographs can help explain the approach to the car and the unloading space. Our <Link href="https://ahsrecovery.co.uk/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">non-running vehicle planning checklist</Link> covers loading and condition in more detail; use it alongside this paperwork guide.</p>
              <p>If you cannot inspect the vehicle yourself, ask the person holding it to check these details. Clearly mark anything that remains unknown. This gives the operator a more useful starting point than a general description such as “should be fine”.</p>
              <h2>Responsibilities that stay with the keeper</h2>
              <p>Booking transport does not arrange the car’s future road use. The keeper remains responsible for checking the relevant tax, SORN, MOT and insurance position. Keep those requirements separate from the transport booking.</p>
              <p>GOV.UK explains that SORN does not transfer from the previous keeper and ends on sale or when the vehicle is taxed again. A buyer keeping it off road must check their own declaration requirements.</p>
              <p>Use GOV.UK to <Link href="https://www.gov.uk/sold-bought-vehicle" className="font-semibold hover:underline">report a vehicle sale or transfer</Link> and check the process for <Link href="https://www.gov.uk/vehicle-tax" className="font-semibold hover:underline">taxing your vehicle</Link>. Resolve the requirements for intended road use before driving; a completed transport job does not change them. <Link href="https://www.gov.uk/sorn-statutory-off-road-notification" className="font-semibold hover:underline">GOV.UK</Link></p>
              <p>Ask DVLA about registration or tax uncertainties and your insurer about cover. Do this while planning, especially where several people are arranging the move. Do not rely on the transport driver to decide whether a later road journey is permitted.</p>
              <h2>Planning the move: request, confirm, collect, deliver</h2>
              <p>Agree the job before the car is released. A clear sequence helps everyone understand the collection point, destination and outstanding checks.</p>
              <h3>1. Request an assessment</h3>
              <p>Send the identity, status, condition and address details together. Explain whether you are the keeper, buyer or another authorised person. State what is unknown rather than filling a gap with an assumption.</p>
              <h3>2. Confirm the arrangements</h3>
              <p>Ask the operator to confirm the proposed carriage method, access requirements and quote. Check who needs to be present at each end. If the car must remain fully carried, make that requirement explicit in the booking discussion.</p>
              <p>Keep a written record of the agreed destination and receiving contact. If the destination changes, confirm the revised arrangements before collection. The replacement address may have different access or unloading restrictions.</p>
              <h3>3. Prepare for collection</h3>
              <p>Have the agreed documents and keys available. Ensure the person at the property knows which car is leaving and who authorised collection. Tell the operator about a changed gate arrangement, blocked entrance or different vehicle condition before attendance.</p>
              <h3>4. Receive and hand over</h3>
              <p>Keep the receiving contact available and the agreed unloading space accessible. Confirm where the keys will go. Raise any concern during handover, and keep the transport details with the vehicle’s paperwork for whoever manages the next stage.</p>
              <p>If the car instead fails during an otherwise lawful road journey, discuss <Link href="https://ahsrecovery.co.uk/services/breakdown-assistance" className="font-semibold hover:underline">breakdown assistance</Link>. For help arranged without a membership, our <Link href="https://ahsrecovery.co.uk/blog/broken-down-no-breakdown-cover" className="font-semibold hover:underline">guide to breaking down without cover</Link> explains the booking questions.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Planning a Vehicle Move?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Send AHS Recovery the vehicle status, condition and collection and delivery details so we can assess the move.
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
                    <Link href="/services/vehicle-transportation-delivery" className="text-primary font-medium hover:underline">
                      Vehicle Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/moving-a-non-running-vehicle-uk" className="text-primary font-medium hover:underline">
                      Non-Running Vehicle Checklist
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
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-background-dark open:border-primary/40"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-white text-base md:text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                  {faqAnswers[index]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center px-6">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange transport for an off-road vehicle</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
<p>Contact AHS Recovery with the car’s status, condition, both addresses and collection authority. We may be able to transport cars, small or medium vans and other listed vehicle types, subject to size, weight, condition and access. Explain the proposed move before booking.</p>
              <p>Call or WhatsApp <strong>07883 546955</strong>, or use our <Link href="https://ahsrecovery.co.uk/contact" className="font-semibold hover:underline">contact page</Link>. AHS Recovery is based at <strong>203 Tiptree Cres, Ilford IG5 0ST</strong>.</p>
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
