import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("moving-a-non-running-vehicle-uk")!

export const metadata = buildMetadata({
  title: "Moving a Non-Running Car in the UK: Checklist",
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
    "question": "Can a non-running vehicle be transported a long distance across the UK?",
    "answer": "Long-distance transportation may be possible even when a vehicle cannot start or drive. Arrangements depend on its condition, dimensions, wheel movement, access and the distance involved. Provide both postcodes and an accurate description before discussing the job."
  },
  {
    "question": "Can you move a vehicle that does not roll or steer?",
    "answer": "A vehicle that cannot roll or steer may require specialist loading arrangements, including winching in suitable circumstances. The method depends on the cause of the problem, vehicle condition and available access. An assessment is needed before confirming whether the job is possible."
  },
  {
    "question": "Do I need to provide the vehicle keys?",
    "answer": "Keys are useful because they may allow the doors to be unlocked, steering to be released and certain controls to be operated. If the keys are missing, explain this before booking so suitable alternatives can be considered."
  },
  {
    "question": "What information should I provide before booking vehicle transport?",
    "answer": "Provide the vehicle make and model, collection and delivery postcodes, starting condition, wheel and steering condition, known damage, key availability and access restrictions. Photographs can help explain unusual circumstances."
  },
  {
    "question": "How should I prepare the collection address?",
    "answer": "Make sure the vehicle is accessible and identify restrictions that could affect loading. These might include narrow driveways, underground parking, gates, height barriers or limited space. Arrange any necessary permissions beforehand."
  },
  {
    "question": "Is planned vehicle transport the same as emergency motorway recovery?",
    "answer": "No. Emergency motorway recovery concerns an immediate breakdown or incident where roadside assistance may be required. Planned vehicle transportation involves organising movement between agreed locations. For motorway emergencies, read our guide on what to do if your car breaks down on a motorway."
  },
  {
    "question": "Can AHS Recovery arrange transport from Ilford and Essex to other parts of the UK?",
    "answer": "AHS Recovery is based in Ilford, Essex. Transport requirements involving locations further afield can be discussed. Collection and delivery postcodes, vehicle condition, access and loading requirements must be considered before arrangements are confirmed."
  }
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function NonRunningVehicleBlogPost() {
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Transportation</span>
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
              <p className="text-lg text-slate-700 leading-relaxed">Moving a vehicle across the UK is not always as simple as driving it from one location to another. Mechanical faults, accident damage or other problems can leave a vehicle unable to move under its own power. In these situations, suitable transport needs to be arranged.</p>
              <p>A non-running vehicle might need moving from a home address to a garage, from a storage facility to a new owner, or between locations for repairs or further inspection. Whatever the reason, the distance involved makes preparation important.</p>
              <p>Before arranging transport, consider the vehicle&#x27;s condition, access at both addresses and any special loading requirements. Providing accurate information at the beginning helps the operator assess the job and identify suitable arrangements.</p>
              <p>This guide provides a practical checklist for organising the movement of a non-running vehicle across the UK, from the initial enquiry through to delivery.</p>
              <h2>When a non-runner needs planned transport, not a roadside jump</h2>
              <p>Not every vehicle that fails to start needs the same type of assistance. A vehicle with a flat battery may only require a jump-start, while one with serious mechanical damage may need transporting to another location.</p>
              <p>The distinction matters because roadside assistance and planned vehicle transportation serve different purposes.</p>
              <p>A vehicle might need planned transport when:</p>
              <ul>
<li>The engine has suffered a mechanical failure and cannot be started.</li>
<li>The vehicle has accident damage and is unsuitable for driving.</li>
<li>A recently purchased vehicle cannot be driven to its new location.</li>
<li>A car is awaiting repairs at a garage or workshop.</li>
<li>A project vehicle needs moving from storage.</li>
<li>The vehicle has been taken off the road and needs relocating.</li>
</ul>
              <p>A jump-start may resolve a battery-related starting problem, but it will not address every mechanical or safety issue. Similarly, roadside assistance may not be appropriate when a vehicle needs to travel a considerable distance.</p>
              <p>AHS Recovery provides different types of recovery-related services. Owners can review the <Link href="/services/breakdown-assistance" className="font-semibold hover:underline">breakdown assistance service</Link> when the problem may be temporary.</p>
              <p>Where the vehicle needs moving rather than restarting, planned transportation is worth discussing separately.</p>
              <p>The main consideration is whether the vehicle can safely be driven or needs to be loaded and transported.</p>
              <h2>Details to give the operator before you book</h2>
              <p>Before arranging transport, prepare the essential information about the vehicle and the journey. This gives the operator a clearer understanding of the work involved.</p>
              <p>Avoid describing a vehicle simply as a non-runner. Two vehicles that cannot start may have very different loading requirements.</p>
              <p>Use this checklist when making an enquiry.</p>
              <h3>Vehicle information</h3>
              <ul>
<li>Make and model.</li>
<li>Vehicle registration, where available.</li>
<li>Approximate dimensions, if known.</li>
<li>Unusual modifications or features.</li>
<li>Any accident damage.</li>
</ul>
              <h3>Mechanical condition</h3>
              <ul>
<li>Does the engine start?</li>
<li>Does the engine run but the vehicle fail to move?</li>
<li>Can the wheels turn freely?</li>
<li>Does the steering work?</li>
<li>Are the brakes operational?</li>
<li>Is there damage to the suspension or wheels?</li>
<li>Is the vehicle completely immobilised?</li>
</ul>
              <h3>Journey information</h3>
              <ul>
<li>Full collection postcode.</li>
<li>Full delivery postcode.</li>
<li>Preferred collection date or timeframe.</li>
<li>Whether both addresses are residential or commercial.</li>
<li>Known access restrictions.</li>
</ul>
              <h3>Keys and access</h3>
              <ul>
<li>Are the vehicle keys available?</li>
<li>Is the vehicle unlocked?</li>
<li>Can it be accessed without moving other vehicles?</li>
<li>Will someone be present at collection?</li>
<li>Is someone available to receive it at delivery?</li>
</ul>
              <p>Mention anything unusual that could affect loading. For example, a vehicle with a damaged wheel may need different arrangements from one with a flat battery.</p>
              <p>Providing accurate details helps avoid misunderstandings and allows the operator to assess whether the requested transport can be arranged.</p>
              <p>Do not assume that a non-running vehicle can be loaded in the same way as an ordinary roadworthy car.</p>
              <h2>Access at the collection address</h2>
              <p>The vehicle&#x27;s condition is only one part of the planning process. The collection location can also affect the equipment, positioning and arrangements required.</p>
              <p>A vehicle parked in an open driveway may be relatively straightforward to access. However, one inside an underground car park, narrow garage or restricted residential development may need additional consideration.</p>
              <p>Before confirming collection, assess the following.</p>
              <h3>Space and positioning</h3>
              <ul>
<li>Is there enough room for a recovery or transport vehicle to approach?</li>
<li>Can the vehicle be accessed from the front or rear?</li>
<li>Is the driveway particularly narrow?</li>
<li>Is there enough space for loading equipment?</li>
<li>Are other parked vehicles likely to obstruct access?</li>
</ul>
              <h3>Physical restrictions</h3>
              <ul>
<li>Are there height restrictions?</li>
<li>Does the property have a narrow gate?</li>
<li>Is the driveway steep or uneven?</li>
<li>Are there overhead structures or other obstacles?</li>
<li>Is the vehicle inside a garage or enclosed space?</li>
</ul>
              <h3>Parking and permissions</h3>
              <ul>
<li>Are there parking restrictions?</li>
<li>Is permission required to enter private premises?</li>
<li>Does a property manager or security team need to arrange access?</li>
<li>Are there restrictions on vehicle movements within the site?</li>
</ul>
              <p>Communicate these details before the collection date.</p>
              <p>Where possible, photographs of the entrance, parking position and surrounding space can help explain the situation. They are particularly useful when access is difficult to describe.</p>
              <p>Do not move the vehicle into an unsafe position to make collection easier. Discuss access problems with the operator first.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/vehicle-access-driveway-check.webp"
                  alt="A non-running hatchback parked on a narrow UK residential driveway"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>Keys, lockouts and a car that will not roll</h2>
              <p>Keys, steering and wheel movement can all affect how a non-running vehicle is handled.</p>
              <p>It is important to explain these conditions before transport is arranged rather than waiting until collection.</p>
              <h3>When the keys are available</h3>
              <p>Having the keys can make certain parts of the loading process easier.</p>
              <p>Depending on the vehicle, keys may be needed to:</p>
              <ul>
<li>Unlock the doors.</li>
<li>Release the steering lock.</li>
<li>Select the appropriate transmission position.</li>
<li>Operate certain vehicle controls.</li>
</ul>
              <p>Keep the keys somewhere accessible and make sure the person attending collection knows where they are.</p>
              <h3>When the vehicle is locked or the keys are missing</h3>
              <p>A vehicle may sometimes be transported without its keys, but this depends on its design, condition and loading requirements.</p>
              <p>A locked steering system may prevent the wheels from turning freely. Automatic vehicles can also have particular requirements when they cannot be started.</p>
              <p>Inform the operator if:</p>
              <ul>
<li>The keys have been lost.</li>
<li>The vehicle is locked.</li>
<li>The steering is immobilised.</li>
<li>The transmission cannot be moved into neutral.</li>
<li>An electronic parking brake cannot be released.</li>
</ul>
              <p>Never assume that forcing the steering, transmission or braking system is suitable.</p>
              <h3>When the vehicle will not roll or steer</h3>
              <p>A vehicle that cannot move freely presents a different challenge from one that simply will not start.</p>
              <p>Possible problems include seized wheels, damaged suspension, accident-related steering damage or locked brakes.</p>
              <p>Depending on the circumstances, winching or other specialist loading methods may need to be considered.</p>
              <p>You can review the <Link href="/services/towing" className="font-semibold hover:underline">towing service</Link> and <Link href="/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery service</Link> to understand the types of assistance available.</p>
              <p>The suitability of any method depends on the individual vehicle and collection conditions. Not every vehicle or location will be suitable for every loading method.</p>
              <p>The important step is to describe the problem accurately before transport is arranged.</p>
              <h2>Documents and condition records</h2>
              <p>Preparing relevant information and recording the vehicle&#x27;s condition can make the transport process more organised.</p>
              <p>Requirements may depend on the circumstances, including who owns the vehicle and where it is being collected and delivered. Do not treat a general checklist as legal advice.</p>
              <p>Before collection, consider the following.</p>
              <h3>Vehicle and ownership information</h3>
              <ul>
<li>Keep vehicle registration details available.</li>
<li>Make sure the person arranging transport has the appropriate authority.</li>
<li>Have relevant vehicle identification information ready if requested.</li>
<li>Confirm who will receive the vehicle.</li>
</ul>
              <h3>Condition records</h3>
              <p>Take clear photographs before loading, including:</p>
              <ul>
<li>Front and rear views.</li>
<li>Both sides of the vehicle.</li>
<li>Existing dents, scratches and accident damage.</li>
<li>Damaged wheels, tyres or bodywork.</li>
<li>Other visible defects.</li>
</ul>
              <p>Make a short written note of known mechanical faults.</p>
              <p>These records provide a reference for the vehicle&#x27;s condition before transportation and can help clarify concerns raised after delivery.</p>
              <h3>Personal belongings</h3>
              <p>Remove valuable personal belongings, loose items and unnecessary equipment where possible.</p>
              <p>Do not leave important documents, house keys or other personal items inside unless there is a specific reason and the arrangements have been agreed.</p>
              <p>Keep the photographs and notes together so they can be referred to during collection and delivery.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/keys-paperwork-checklist.webp"
                  alt="Car keys, a vehicle document folder and a planning checklist on a table"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>Collection day</h2>
              <p>Good preparation on collection day helps reduce unnecessary delays and confusion.</p>
              <p>The vehicle should be accessible, and important information about its condition should already have been shared.</p>
              <p>Use this checklist before the operator arrives.</p>
              <h3>Before collection</h3>
              <ul>
<li>Make sure the vehicle is accessible.</li>
<li>Clear obstructions from the loading area.</li>
<li>Have the keys ready, if available.</li>
<li>Remove personal belongings and loose items.</li>
<li>Arrange access where necessary.</li>
<li>Confirm the collection and delivery details.</li>
</ul>
              <h3>During collection</h3>
              <p>The loading process depends on the vehicle&#x27;s condition and the equipment being used.</p>
              <p>The operator may need to assess its position, wheel movement, steering, brakes and available loading space.</p>
              <p>If something differs from the information originally provided, explain it before loading begins.</p>
              <p>For example, a wheel that has become stuck or a vehicle moved into a restricted parking space could affect the arrangements.</p>
              <p>Avoid attempting to push, tow or reposition an immobilised vehicle without suitable guidance.</p>
              <h3>Before departure</h3>
              <p>Confirm that the destination details are correct and that the receiving arrangements have been communicated.</p>
              <p>Keep relevant collection notes and photographs available for reference.</p>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10">
                <Image
                  src="/images/flatbed-loading-uk.webp"
                  alt="A car being winched onto a recovery flatbed at a UK residential kerbside"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                />
              </div>
              <h2>Delivery day</h2>
              <p>Delivery needs just as much preparation as collection.</p>
              <p>A vehicle may have travelled a considerable distance, so the receiving location should be ready before it arrives.</p>
              <p>Confirm the following:</p>
              <ul>
<li>The full delivery address is correct.</li>
<li>Someone is available to receive the vehicle, if required.</li>
<li>The unloading area is accessible.</li>
<li>There is enough space for the transport vehicle.</li>
<li>Gates, barriers and security arrangements have been organised.</li>
<li>The receiving person understands that the vehicle is non-running.</li>
</ul>
              <p>If the vehicle is being delivered to a garage, workshop or storage facility, confirm the arrangements with the relevant person beforehand.</p>
              <p>Do not assume that a garage will automatically have space available or that a private property will allow unrestricted access.</p>
              <h3>Inspecting the vehicle after delivery</h3>
              <p>Once the vehicle has been unloaded, inspect its visible condition and compare it with the photographs taken before collection.</p>
              <p>Pay particular attention to:</p>
              <ul>
<li>Existing bodywork damage.</li>
<li>Wheels and tyres.</li>
<li>Bumpers and external components.</li>
<li>Any visible changes that were not present before collection.</li>
</ul>
              <p>If you notice a concern, record it promptly and raise it through the appropriate contact.</p>
              <p>Keep the collection and delivery records together. A clear record of the vehicle&#x27;s condition at both locations makes the process easier to understand.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Planning Vehicle Transport?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Share your vehicle details, collection postcode and delivery postcode with AHS Recovery.
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
                      Vehicle Transportation and Delivery
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
                  {faq.question === "Is planned vehicle transport the same as emergency motorway recovery?" ? (
                    <>No. Emergency motorway recovery concerns an immediate breakdown or incident where roadside assistance may be required. Planned vehicle transportation involves organising movement between agreed locations. For motorway emergencies, read our guide on <Link href="/blog/what-to-do-if-your-car-breaks-down-on-a-motorway" className="font-semibold hover:underline">what to do if your car breaks down on a motorway</Link>.</>
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
          src="/images/flatbed-loading-uk.webp"
          alt="A car being loaded onto a recovery flatbed at a UK residential kerbside"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/85" />
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Plan your vehicle transport with AHS Recovery</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
            <p>Moving a non-running vehicle across the UK requires more than arranging a collection time. The vehicle&#x27;s condition, access, keys, loading requirements and delivery arrangements all need consideration.</p>
              <p>Preparing these details beforehand helps make the process more organised and gives the operator the information needed to assess the transport requirements.</p>
              <p>AHS Recovery can discuss your vehicle transportation requirements and the arrangements involved.</p>
              <p>For further information, visit our <Link href="/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery service</Link> or contact the team through our <Link href="/contact" className="font-semibold hover:underline">contact page</Link>.</p>
              <p><strong>AHS Recovery</strong><br />203 Tiptree Cres, Ilford IG5 0ST<br />Telephone: 07883 546955</p>
              <p>When making an enquiry, provide your vehicle details, collection postcode and delivery postcode so the transport requirements can be discussed.</p>
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
