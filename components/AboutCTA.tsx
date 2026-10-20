import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export default function AboutCTA() {
  return (
    <section className="bg-background-dark py-32 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 text-sm">
          Immediate Assistance Required?
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-black mb-12">Speak to a Recovery Specialist</h2>
        <a className="block text-primary hover:text-white transition-all duration-300" href={`tel:${siteConfig.phoneTel}`}>
          <span className="text-5xl md:text-8xl font-black tabular-nums tracking-tighter break-all">
            {siteConfig.phoneDisplay}
          </span>
        </a>
        <p className="mt-12 text-slate-500 font-medium text-lg italic uppercase tracking-widest">
          Local Recovery &amp; Nationwide Transportation
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
