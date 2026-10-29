import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Breakdown & Recovery Advice | AHS Recovery Blog",
  description:
    "Practical breakdown, recovery and vehicle transportation advice from AHS Recovery, covering motorway safety, roadside assistance and what to do when things go wrong.",
  path: "/blog",
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/blog` },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-background-dark py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery Blog</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mt-4 mb-6">
              Breakdown &amp; Recovery Advice
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guidance on motorway safety, breakdown recovery and vehicle transportation, written by the
              team at AHS Recovery. For urgent help right now, call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-primary font-medium hover:underline">
                {siteConfig.phoneDisplay}
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-slate-100"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 leading-snug">{post.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all pt-1">
                    Read the Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-accent py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Need Help Now?</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Broken Down? We Can Help Right Away
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          AHS Recovery provides breakdown assistance, vehicle recovery and nationwide transportation. Call our team
          or send your request through WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
          >
            Call Now: {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
          >
            Request Recovery
          </Link>
        </div>
      </section>
    </main>
  )
}
