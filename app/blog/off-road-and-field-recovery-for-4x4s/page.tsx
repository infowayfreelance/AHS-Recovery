import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Calendar, Clock, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("off-road-and-field-recovery-for-4x4s")!

export const metadata = { ...buildMetadata({
  title: "Off-Road 4x4 Recovery: What to Prepare First",
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  ogType: "article",
  ogImage: {
    url: `${siteConfig.siteUrl}${post.heroImage}`,
    width: 1200,
    height: 630,
    alt: post.heroImageAlt,
  },
}), title: { absolute: "Off-Road 4x4 Recovery: What to Prepare First" } }

const faqs = [
  {
    "question": "What should I do first if my 4x4 is stuck in a field?",
    "answer": "Stop spinning the wheels and move everyone to firm ground, away from the vehicle, slopes and ditches. Then call with the exact location, vehicle details, ground conditions and, if it is safe, photographs."
  },
  {
    "question": "Should I keep trying to drive out?",
    "answer": "No. Repeated attempts usually dig the wheels deeper, even on a 4x4, which can make the recovery harder. Stop and arrange a professional assessment."
  },
  {
    "question": "Can you recover a vehicle from a private field or farm track?",
    "answer": "Fields and farm tracks are part of our 4x4 and off-road recovery work. Tell us who owns the land, whether a gate is locked and what the access is like. Whether recovery is possible depends on the vehicle's position, the ground and access."
  },
  {
    "question": "What is the difference between 4x4 recovery and winch-out recovery?",
    "answer": "Winch-out recovery suits vehicles close to an accessible road, where the recovery vehicle can stay on stable ground. 4x4 and off-road recovery is for vehicles further from a firm road, on deep mud, uneven ground, remote tracks, fields or slopes."
  },
  {
    "question": "Do you only recover 4x4s, or also SUVs and cars?",
    "answer": "We may be able to recover 4x4s, SUVs, cars and suitable vans, subject to size, weight, ground conditions and access. Share the vehicle details and photographs so we can assess it."
  },
  {
    "question": "Do you cover jobs outside Ilford and Essex?",
    "answer": "We assess jobs within approximately 60 miles of Ilford, including Essex and East London. If you are further away, contact us with the location so we can advise."
  }
]

const faqAnswers = [
  <>Stop spinning the wheels and move everyone to firm ground, away from the vehicle, slopes and ditches. Then call with the exact location, vehicle details, ground conditions and, if it is safe, photographs.</>,
  <>No. Repeated attempts usually dig the wheels deeper, even on a 4x4, which can make the recovery harder. Stop and arrange a professional assessment.</>,
  <>Fields and farm tracks are part of our 4x4 and off-road recovery work. Tell us who owns the land, whether a gate is locked and what the access is like. Whether recovery is possible depends on the vehicle's position, the ground and access.</>,
  <>Winch-out recovery suits vehicles close to an accessible road, where the recovery vehicle can stay on stable ground. 4x4 and off-road recovery is for vehicles further from a firm road, on deep mud, uneven ground, remote tracks, fields or slopes.</>,
  <>We may be able to recover 4x4s, SUVs, cars and suitable vans, subject to size, weight, ground conditions and access. Share the vehicle details and photographs so we can assess it.</>,
  <>We assess jobs within approximately 60 miles of Ilford, including Essex and East London. If you are further away, contact us with the location so we can advise.</>
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function OffRoadFieldRecoveryBlogPost() {
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Off-Road Recovery</span>
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
              <p>If your 4x4, SUV or car is stuck in a field, on a farm track or on other off-road ground, stop spinning the wheels. Every extra attempt can dig the tyres deeper and make the recovery harder.</p>
              <p>Next, move everyone to firm, safe ground away from the vehicle, any slope and any ditch edge. Then call a <Link href="https://ahsrecovery.co.uk/services/4x4-off-road-recovery" className="font-semibold hover:underline">4x4 and off-road recovery</Link> team with the exact location, vehicle details, ground conditions and, if it is safe to take them, clear photographs.</p>
              <p>This guide is a preparation checklist, not a self-recovery tutorial. It explains what to do while you wait and what information helps the team decide how to reach and recover the vehicle safely.</p>
              <h2>Short answer: what to prepare before the truck arrives</h2>
              <p>Use this checklist once everyone is safe. It covers what an off-road recovery team needs before planning the job.</p>
              <ul><li><strong>Stop driving:</strong> no more spinning, rocking or revving.</li><li><strong>Keep people clear:</strong> everyone on firm ground, away from the vehicle, slopes, ditches and any moving equipment.</li><li><strong>Exact location:</strong> a map pin or coordinates, the nearest road and the gate or track entrance you used.</li><li><strong>Vehicle details:</strong> make, model, drive type, and whether it still starts and steers.</li><li><strong>Ground conditions:</strong> mud, wet grass, clay or standing water, any slope or ditch, and the distance to firm ground.</li><li><strong>Photographs, if safe:</strong> the wheels, the whole vehicle, the route in and anything close by.</li><li><strong>Access:</strong> gates, keys, gateway width, livestock and who owns the land.</li></ul>
              <h2>Why off-road jobs are assessed differently from a roadside breakdown</h2>
              <p>A roadside breakdown usually happens on a hard, level surface that a recovery truck can drive straight up to. An off-road job is different, because the ground that trapped your vehicle may also trap a much heavier recovery vehicle.</p>
              <p>Before anything is moved, the operator needs to judge the vehicle's weight and position, the stability of the ground, the approach route and any nearby obstacles. That assessment decides which recovery method is safe.</p>
              <p>Field and farm-track ground can also be uneven in ways that are hard to see. A surface that looks firm can hide a soft patch, especially after heavy rain, and a vehicle parked overnight can settle without being driven at all.</p>
              <h2>Stop, stay safe and don't make the vehicle sink further</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/stop-spinning-wheels-off-road.webp" alt="Wheel at rest in soft field mud" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>The first few minutes after getting stuck often decide how difficult the recovery becomes. These steps protect people first and the vehicle second.</p>
              <h3>Stop driving and leave the vehicle where it is</h3>
              <p>Do not keep spinning the wheels or rocking the vehicle back and forth. On soft ground, tyres can dig down quickly, and four-wheel drive does not help once all four wheels have lost grip.</p>
              <p>Switch off the engine once you stop trying. If mud, snow or water is blocking the exhaust, never sit inside with the engine running, as fumes can build up in the cabin.</p>
              <p>Apply the parking brake, particularly on a slope. Put the hazard lights on if the vehicle is near a road, lane or gateway that other people use.</p>
              <h3>Keep people clear of the vehicle and the ground around it</h3>
              <p>Move everyone to firm, level ground away from the vehicle. Keep well clear of slopes, ditch edges, soft banks and any farm machinery or other moving equipment.</p>
              <p>If the vehicle is tilted, on a slope or near a ditch, do not wait inside it. Wait somewhere safe where you can still see the access point, so you can guide the team in.</p>
              <p>Keep children and dogs back as well. Once the recovery starts, everyone should stay well away from any recovery line and the path the vehicle will travel.</p>
              <h3>Don't let a second vehicle make it worse</h3>
              <p>A common pattern in rural recoveries is a well-meaning friend, neighbour or passing driver trying to pull the vehicle out. If their vehicle drives onto the same soft ground, the result is often two stuck vehicles instead of one.</p>
              <p>Keep other vehicles on firm ground and wait for the assessment. A second stuck vehicle can also block the route the recovery truck needs.</p>
              <h3>Never attach straps to unsuitable points</h3>
              <p>Do not attach straps, ropes or chains to any part of the vehicle that is not designed for recovery. Improvised pulls can damage the vehicle and put people at serious risk if something breaks or slips.</p>
              <p>Leave the choice of recovery points and method to the recovery team once they have assessed the vehicle and the ground.</p>
              <h2>Details and photographs that help the assessment</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/field-access-photos-for-recovery.webp" alt="Photographing access and ground conditions for recovery" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>When you call, the aim is to give the team a clear picture of the job before they set off. Our guide to a <Link href="https://ahsrecovery.co.uk/blog/car-stuck-in-mud-or-a-ditch" className="font-semibold hover:underline">car stuck in mud or a ditch</Link> covers the basics; for field and off-road jobs, these details matter most.</p>
              <h3>Exact location</h3>
              <p>A postcode alone is often not enough for a field or farm track. In rural areas, one postcode can cover several properties and the open land around them, so it may lead a driver to a farmhouse rather than the right gate.</p>
              <p>Give as much of the following as you can:</p>
              <ul><li>A dropped pin or coordinates shared from your phone's map app.</li><li>The nearest named road and the direction you turned off it.</li><li>The gate, track entrance or landmark you used, such as a barn, church or pylon.</li><li>Roughly how far the vehicle is from that entrance and from firm ground.</li></ul>
              <h3>Vehicle details</h3>
              <ul><li>Make, model and whether it is a 4x4, SUV, car or van.</li><li>Whether it still starts, steers and can be put into neutral.</li><li>Whether you have the keys.</li><li>Any damage, warning lights or leaks.</li><li>Anything heavy on board or attached, such as tools, a loaded roof box or a trailer.</li></ul>
              <p>Weight and drive type affect how the vehicle can be approached, so mention any modifications, such as larger tyres or added equipment, if you know about them.</p>
              <h3>Ground conditions</h3>
              <p>Describe the surface the vehicle is on and the route to it. Useful details include mud, wet grass, clay or standing water, how deep the wheels have sunk, and whether the vehicle is on a slope or leaning towards a ditch.</p>
              <p>Mention recent rain too, and whether the ground between the gate and the vehicle feels firm underfoot. This helps show whether a recovery truck can stay on stable ground.</p>
              <h3>Photographs worth taking, if it is safe</h3>
              <p>Only take photographs from firm, safe ground. Do not walk onto soft ground, slopes or ditch edges to get a better angle.</p>
              <ul><li>The whole vehicle from front, rear and sides, where you can safely reach.</li><li>Close-ups of the wheels, showing how deep they have sunk.</li><li>The ground between the vehicle and the nearest firm surface.</li><li>The gate or track entrance, including its width.</li><li>Nearby trees, walls, fences, ditches or overhead cables.</li><li>A wider shot showing the vehicle in relation to the road or track.</li></ul>
              <p>Photographs sent before the team sets off help them judge access and plan the approach, rather than discovering problems on arrival.</p>
              <h2>Access, ground and obstacles</h2>
              <p>Access is often the deciding factor in an off-road recovery. A vehicle may be straightforward to free once a truck reaches it, but difficult if the route in is narrow, soft or blocked.</p>
              <h3>Gates, tracks and permission</h3>
              <p>If the vehicle is on private land, let the landowner or farmer know and check that the recovery team can come onto the land. Find out whether any gates are locked and who has the key.</p>
              <p>Estimate the width of the gateway and note any height limits, such as low branches, archways or overhead cables. If livestock are in the field, say so, because gates may need to stay closed behind the team.</p>
              <h3>Slopes, ditches and nearby obstacles</h3>
              <p>Tell the operator if the vehicle is on a slope, close to a ditch or bank, or near trees, walls, fences, buildings or parked machinery. These obstacles affect which direction the vehicle can safely be moved and where a recovery truck can stand.</p>
              <p>A vehicle leaning towards a ditch needs a different plan from one stuck on level ground, even if both sound similar in a quick description.</p>
              <h3>Conditions can change while you wait</h3>
              <p>Rain can soften the ground further, and light fades early in the countryside during autumn and winter. If water rises around the wheels or the vehicle shifts, move further away and update the team.</p>
              <p>Keep your phone charged where possible, so the team can reach you and you can guide them to the right entrance.</p>
              <h2>Winch-out or a fuller off-road recovery</h2>
              <p>AHS Recovery offers both <Link href="https://ahsrecovery.co.uk/services/winch-out-recovery" className="font-semibold hover:underline">winch-out recovery</Link> and 4x4 and off-road recovery. The right option depends on where the vehicle is and whether a recovery vehicle can work from stable ground.</p>
              <div className="overflow-x-auto"><table><thead><tr><th></th><th>Winch-out recovery</th><th>4x4 and off-road recovery</th></tr></thead><tbody><tr><td>Typical position</td><td>Close to an accessible road, such as a verge, shallow ditch or muddy edge</td><td>Further from a firm road, such as in a field, on a remote track or on a slope</td></tr><tr><td>Recovery vehicle</td><td>Can stay on stable ground and reach the vehicle</td><td>Access may need off-road capability</td></tr><tr><td>Ground</td><td>Soft where the vehicle is, firm where the truck stands</td><td>Deep mud or uneven ground along the route in</td></tr><tr><td>Aim</td><td>A controlled pull back to a safe position</td><td>Extraction to stable ground, with transport arranged if needed</td></tr></tbody></table></div>
              <p>You do not need to decide which service you need before calling. Describe the situation, send photographs if safe, and the team will assess which approach is suitable.</p>
              <p>Cost depends on the vehicle, ground and access, and is explained before work starts.</p>
              <h2>Once the vehicle is on stable ground</h2>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden my-10"><Image src="/images/recovery-truck-at-field-gateway.webp" alt="Recovery truck arriving at a field access point" fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 1080px" /></div>
              <p>Getting the vehicle onto firm ground is not always the end of the job. Mud can hide damage to tyres, wheels, steering or the underside, and some vehicles will not be safe or able to drive on.</p>
              <p>If the vehicle cannot be driven, <Link href="https://ahsrecovery.co.uk/services/vehicle-recovery" className="font-semibold hover:underline">vehicle recovery</Link> can take it to a garage, home or another address. For a planned move later, such as from a farm to a workshop, <Link href="https://ahsrecovery.co.uk/services/vehicle-transportation-delivery" className="font-semibold hover:underline">vehicle transportation and delivery</Link> may suit better.</p>
              <p>Our guide to <Link href="https://ahsrecovery.co.uk/blog/moving-a-non-running-vehicle-uk" className="font-semibold hover:underline">moving a non-running vehicle in the UK</Link> explains what to plan for that kind of move.</p>
              <p>If the vehicle is safe to drive away, clear heavy mud from the lights and number plates first. Drive carefully until you are sure the steering and brakes feel normal.</p>
              <p>If the vehicle later breaks down on a public road, follow the <Link href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold hover:underline">Highway Code rules on breakdowns and incidents</Link>. These advise getting to a place of relative safety and staying away from the vehicle and moving traffic.</p>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl bg-background-dark p-6 md:p-7 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h2 className="text-white font-black text-lg mb-2">Need Off-Road Recovery?</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Have the location, vehicle details, ground conditions and any safe photographs ready.
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
                    <Link href="/blog/moving-a-non-running-vehicle-uk" className="text-primary font-medium hover:underline">
                      Non-Running Vehicle Checklist
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
          <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Need off-road recovery?</h2>
          <div className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-5">
<p>If your vehicle is stuck in a field, on a farm track or on soft ground, call AHS Recovery on <strong>07883 546955</strong>, or send a WhatsApp message to the same number. Have the location, vehicle details, ground conditions and any safe photographs ready.</p>
              <p>We are based at 203 Tiptree Cres, Ilford IG5 0ST, and assess jobs within approximately 60 miles, including Ilford, Essex and East London. Availability depends on the vehicle's position, the ground and access.</p>
              <p>If you are further away, contact us with the location so we can advise. You can also <Link href="https://ahsrecovery.co.uk/contact" className="font-semibold hover:underline">contact us online</Link> or <Link href="https://ahsrecovery.co.uk/services" className="font-semibold hover:underline">see all our services</Link>.</p>
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
