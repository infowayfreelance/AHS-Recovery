import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("collecting-a-car-from-an-auction-or-dealer")!

export const metadata = { ...buildMetadata({
  title: "Collecting a Car From Auction or Dealer: A UK Guide",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}${post.heroImage}`,
    width: 1200,
    height: 630,
    alt: post.heroImageAlt,
  },
}), title: { absolute: "Collecting a Car From Auction or Dealer: A UK Guide" } }

const faqs = [
  {
    "question": "Can someone else collect my car from an auction?",
    "answer": "Ask the seller whether it permits transporter collection and what authorisation is required. Confirm the collector’s details and release instructions before arranging attendance."
  },
  {
    "question": "What do I need to collect a car from an auction?",
    "answer": "Confirm the seller’s required identification, release reference and collection authority. Give the operator the vehicle details, condition, both addresses and contact information."
  },
  {
    "question": "Can I drive a car home from an auction without tax?",
    "answer": "Do not assume you can. Check GOV.UK’s vehicle tax guidance and road-use requirements before driving. Where driving is unsuitable, discuss an appropriate transport arrangement."
  },
  {
    "question": "What happens if I don’t collect my auction car in time?",
    "answer": "Contact the auction directly and check its own terms. Ask what happens next and confirm any revised collection permission before rearranging transport."
  },
  {
    "question": "Can a non-running auction car be transported?",
    "answer": "It may be possible, subject to size, weight, condition and access. Explain whether it starts, rolls, steers and brakes, and whether keys are available."
  },
  {
    "question": "What should I check when the car is delivered?",
    "answer": "Confirm its identity, compare visible condition with the collection record, and check the agreed keys and documents. Read the handover record and raise any difference before signing."
  }
]

const faqAnswers = [
  <>Ask the seller whether it permits transporter collection and what authorisation is required. Confirm the collector’s details and release instructions before arranging attendance.</>,
  <>Confirm the seller’s required identification, release reference and collection authority. Give the operator the vehicle details, condition, both addresses and contact information.</>,
  <>Do not assume you can. Check <Link href="https://www.gov.uk/vehicle-tax" className="font-semibold hover:underline">GOV.UK’s vehicle tax guidance</Link> and road-use requirements before driving. Where driving is unsuitable, discuss an appropriate transport arrangement.</>,
  <>Contact the auction directly and check its own terms. Ask what happens next and confirm any revised collection permission before rearranging transport.</>,
  <>It may be possible, subject to size, weight, condition and access. Explain whether it starts, rolls, steers and brakes, and whether keys are available.</>,
  <>Confirm its identity, compare visible condition with the collection record, and check the agreed keys and documents. Read the handover record and raise any difference before signing.</>
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function AuctionCollectionBlogPost() {
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
              <p>To arrange car collection from an auction or dealer, first confirm that the seller can release the vehicle to your chosen transporter. Then provide both addresses, the vehicle details, its condition and the collection instructions. Agree who will hand it over, who will receive it and how its condition will be recorded.</p>
              <p>Buying the car and booking its transport are separate arrangements. Do not treat a winning bid, purchase receipt or transport quote as confirmation that collection can proceed. Check the seller’s release requirements and give the operator accurate information before booking.</p>
              <p>This guide follows the process from purchase checks to delivery. It covers authorisation, runner and non-runner details, paperwork and handover, so you can prepare one clear collection brief rather than leave important questions until pickup.</p>
              <h2>Summary: how auction and dealer collection works</h2>
              <p>Planned collection connects three parties: you, the seller and the transport operator. Each needs the same vehicle identity, release instructions and destination. A missing reference or an unavailable receiving contact can leave the arrangement incomplete.</p>
              <p>Use this sequence:</p>
              <ol><li>Check the seller’s collection requirements and the vehicle’s condition.</li><li>Confirm payment and release directly with the seller.</li><li>Give the operator the details needed to assess transport.</li><li>Agree collection authority, access and handover arrangements.</li><li>Check the vehicle and documents when it reaches the agreed destination.</li></ol>
              <p>AHS Recovery provides <Link href="https://ahsrecovery.co.uk/services/vehicle-transportation-delivery" className="font-semibold hover:underline">nationwide vehicle transport</Link>. Suitable cars, small and medium-sized vans, 4x4s and non-running vehicles may be transported, subject to size, weight and condition. Explain the proposed collection so the requirements can be assessed before booking.</p>
              <h2>Key terms explained</h2>
              <div className="overflow-x-auto"><table><thead><tr><th>Term</th><th>Meaning for your collection plan</th></tr></thead><tbody><tr><td>Lot number</td><td>The auction reference used to identify the vehicle. Supply the registration too, where available.</td></tr><tr><td>Release note</td><td>A document or reference the seller requires before handing the vehicle over. Confirm its own procedure.</td></tr><tr><td>Collection window</td><td>The collection availability agreed with the site; check whether an appointment is required.</td></tr><tr><td>Collection authority</td><td>Your instruction allowing a named person or operator to collect, in the form the seller accepts.</td></tr><tr><td>Runner</td><td>A description to clarify, rather than proof that a car is roadworthy or ready to load.</td></tr><tr><td>Non-runner</td><td>A starting point: explain separately whether the car starts, rolls, steers and brakes.</td></tr><tr><td>Handover contact</td><td>The person responsible for releasing or receiving the vehicle at each address. Confirm their name, contact number and availability, and make sure they know which car is being moved. If that person changes, tell the seller and transport operator before collection so the instructions remain consistent.</td></tr></tbody></table></div>
              <p>A release note and a V5C logbook serve different purposes. Ask about each separately. Do not assume that permission to take the vehicle means every document relating to its purchase or registration will accompany it.</p>
              <h2>Stage 1: before you buy</h2>
              <h3>Check the location and release process</h3>
              <p>Find out where the vehicle is physically stored. The collection entrance may differ from the seller’s main office or advertised address. Confirm the postcode, site contact and instructions for finding the correct gate or reception point.</p>
              <p>Read the seller’s own collection terms. Ask what must happen before release, how transporters are authorised and whether collection needs booking. Requirements vary; avoid relying on instructions from a previous purchase or another site.</p>
              <h3>Check condition, keys and documents</h3>
              <p>Ask for a current description of the car, including known damage and whether it moves. Photographs can support that description, but should not replace direct answers about starting, steering, braking and wheel condition.</p>
              <p>Check what comes with the purchase: keys, relevant vehicle documents and any agreed loose items. Ask how these will be handed over and who will confirm their presence. Tell the transporter about missing keys before the collection is arranged.</p>
              <p><Link href="https://www.gov.uk/buy-a-vehicle" className="font-semibold hover:underline">GOV.UK’s vehicle-buying checklist</Link> explains checking vehicle details and the V5C, registration, and the requirements for road use. Use it alongside the seller’s instructions. A transport booking does not complete those buyer and keeper responsibilities.</p>
              <h2>Stage 2: booking the transport — information checklist</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/auction-collection-paperwork-checklist.webp" alt="Collection checklist and keys for an auction car" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>Send a single collection brief rather than several disconnected messages. If a detail changes, identify the change clearly and ask the operator to confirm the revised arrangement.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Information</th><th>What to provide or confirm</th></tr></thead><tbody><tr><td>Collection point</td><td>Seller’s name, full address, postcode, entrance and site contact.</td></tr><tr><td>Delivery point</td><td>Full address, postcode, receiving contact and proposed unloading position.</td></tr><tr><td>Vehicle identity</td><td>Make, model, registration where available, and lot or stock number.</td></tr><tr><td>Release</td><td>Seller’s confirmation that release is authorised, plus any required reference.</td></tr><tr><td>Movement</td><td>Whether the engine starts and the vehicle rolls, steers and brakes.</td></tr><tr><td>Condition</td><td>Known damage, locked wheels, leaks, modifications and missing parts.</td></tr><tr><td>Size</td><td>Accurate vehicle type and available dimensions, including relevant modifications.</td></tr><tr><td>Keys</td><td>Whether keys are available, where they are and who will hand them over.</td></tr><tr><td>Access</td><td>Gates, slopes, tight turns, barriers and restrictions at both ends.</td></tr><tr><td>Authority</td><td>Who can release the vehicle and the evidence the seller requires.</td></tr></tbody></table></div>
              <h3>Agree what has been confirmed</h3>
              <p>Separate confirmed facts from the seller’s descriptions and your own assumptions. If the vehicle has not been checked recently, say so. “Advertised as running” is different from confirmation of its present loading condition.</p>
              <p>Ask the operator to assess suitability before treating the move as booked. Discuss the collection instructions and destination together, including whether anyone needs to attend. Keep payment and purchase-release questions with the seller rather than assuming transport resolves them.</p>
              <p>If you are comparing <Link href="https://ahsrecovery.co.uk/services/towing" className="font-semibold hover:underline">towing services</Link> with planned delivery, explain the full journey and vehicle condition. Describe the job you need done instead of choosing a method solely because the word “towing” appears in a listing.</p>
              <h2>Stage 3: collection day</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/driver-photographing-car-condition.webp" alt="Driver recording a car’s condition before transport" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <h3>Confirm permission and site instructions</h3>
              <p>Check that the seller has the agreed authorisation and knows a transporter is collecting. Ask which reference or identification the collector must present. Send the required details through the seller’s accepted process rather than assuming an informal message is enough.</p>
              <p>Keep your phone available for queries. If someone else manages the purchase for you, agree who can answer questions or approve a change. The seller and operator should know which contact to use, rather than receive conflicting instructions.</p>
              <h3>Record condition before the move</h3>
              <p>Agree how the vehicle’s condition will be recorded before loading. Ask about photographs and any collection record. Relevant details may include visible bodywork damage, missing parts and the condition of wheels or glass.</p>
              <p>Keep the seller’s advert, purchase description and your own correspondence available for comparison. A collection record should describe what is observed; it should not be treated as a mechanical inspection or confirmation that the car matches every sales claim.</p>
              <p>Confirm how keys, papers and agreed loose items will travel. Record what is actually handed over. Avoid putting documents in an assumed location without telling the people responsible for the collection and delivery.</p>
              <h2>Stage 4: delivery and handover checks</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/car-delivered-to-home-driveway.webp" alt="Car being delivered to its new owner’s driveway" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <h3>Prepare the receiving location</h3>
              <p>Agree a suitable unloading position and make sure the receiving contact knows the vehicle’s condition. A non-running car needs a destination plan that does not depend on someone driving it elsewhere after unloading.</p>
              <p>Check access before collection. Explain a narrow driveway, shared entrance or restricted stopping space, and let the operator assess it. If the address or receiving person changes, confirm the new arrangement rather than passing it on only at arrival.</p>
              <h3>Check before completing the handover</h3>
              <p>At delivery, work through these checks with the person handing over:</p>
              <ul><li>Confirm the vehicle identity against the collection instructions.</li><li>Compare its visible condition with the collection record and photographs.</li><li>Check the agreed keys, papers and loose items.</li><li>Ask about anything recorded during collection or transport.</li><li>Read the handover record and raise any difference before signing it.</li></ul>
              <p>Take photographs from a safe position and keep the handover documents with the purchase records. If something needs clarification, describe the issue precisely and ask how it should be recorded. Avoid signing a statement you have not read or do not understand.</p>
              <h2>Auction vs dealer collection: comparison table</h2>
              <p>The seller’s actual instructions matter more than the label “auction” or “dealer”. Use this comparison to frame your questions, then confirm the answers for your purchase.</p>
              <div className="overflow-x-auto"><table><thead><tr><th>Planning point</th><th>Auction purchase</th><th>Dealer purchase</th></tr></thead><tbody><tr><td>Vehicle reference</td><td>Confirm the lot and registration where available.</td><td>Confirm the stock reference and registration.</td></tr><tr><td>Release</td><td>Ask which release document or reference is required.</td><td>Ask who authorises handover after purchase.</td></tr><tr><td>Appointment</td><td>Check the site’s transporter collection process.</td><td>Agree collection with the person holding the vehicle.</td></tr><tr><td>Condition</td><td>Clarify the listing’s runner or non-runner description.</td><td>Confirm current condition rather than assuming it can be driven.</td></tr><tr><td>Documents and keys</td><td>Ask what is present and where it is held.</td><td>Agree which documents and keys accompany collection.</td></tr><tr><td>Delivery</td><td>Confirm the recipient and accessible unloading place.</td><td>Confirm the recipient and accessible unloading place.</td></tr></tbody></table></div>
              <p>Neither route removes the need for clear release permission. For dealer car delivery, ask whether you are arranging independent transport or using delivery already included in your purchase agreement. Establish who is responsible for the move before making another booking.</p>
              <h2>Untaxed, no-MOT and non-running purchases</h2>
              <h3>Keep road-use status separate from collection</h3>
              <p>Do not assume a purchased car can be driven home because it starts or has been released. <Link href="https://www.gov.uk/vehicle-tax" className="font-semibold hover:underline">GOV.UK’s vehicle tax guidance</Link> says the relevant legal obligations must be met before driving. Check the requirements for your circumstances rather than treating collection paperwork as permission.</p>
              <p>For the distinction between carriage and driving, read our guide to <Link href="https://ahsrecovery.co.uk/blog/moving-a-sorn-untaxed-or-no-mot-car" className="font-semibold hover:underline">moving a SORN, untaxed or no-MOT car</Link>. This is general planning information, not legal advice. Check official guidance and resolve tax, registration and other road-use questions separately from the transport booking.</p>
              <h3>Describe a non-runner accurately</h3>
              <p>A car that will not start may still roll and steer; another may have damaged or locked wheels. Explain those differences when discussing <Link href="https://ahsrecovery.co.uk/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link>. Do not assume every vehicle described as a non-runner can be collected in the same way.</p>
              <p>Our checklist for <Link href="https://ahsrecovery.co.uk/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">moving a non-running vehicle</Link> covers condition and access in more detail. Use it to prepare the loading information without turning the purchase discussion into a guess about equipment or suitability.</p>
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
                    <Link href="/blog/moving-a-sorn-untaxed-or-no-mot-car" className="text-primary font-medium hover:underline">
                      SORN, Untaxed and No-MOT Vehicles
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
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange collection and delivery</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
<p>Contact AHS Recovery with the collection and delivery postcodes, vehicle details, condition and seller’s release instructions. Suitability needs assessment before arrangements are confirmed.</p>
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
