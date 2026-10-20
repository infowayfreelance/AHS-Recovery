import Link from "next/link"

export default function AboutValues() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/30 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Our Approach</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Why Choose AHS Recovery?</h2>
          <p className="text-slate-400 text-base md:text-lg">
            Choosing the right recovery company matters, especially when your vehicle is stranded or damaged. At
            AHS Recovery, we focus on clear communication, careful vehicle handling, and practical recovery
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">01.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Suitable Recovery Equipment</h3>
            <p className="text-slate-400 leading-relaxed">
              Our fleet includes{" "}
              <Link href="/services/4x4-off-road-recovery" className="text-primary font-medium hover:underline">
                4x4 recovery trailers
              </Link>{" "}
              and recovery lorries up to 18 tonnes. This allows us to arrange suitable equipment based on your
              vehicle and recovery requirements.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">02.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Safe Vehicle Handling</h3>
            <p className="text-slate-400 leading-relaxed">
              We take care when loading, securing, transporting, and unloading vehicles, including those requiring{" "}
              <Link href="/services/accident-recovery" className="text-primary font-medium hover:underline">
                accident recovery
              </Link>
              . Each recovery situation is assessed to help reduce the risk of further damage.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">03.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Clear Communication</h3>
            <p className="text-slate-400 leading-relaxed">
              We explain the recovery process, discuss your vehicle&apos;s location, and confirm the planned
              destination before arranging transportation.{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact us
              </Link>{" "}
              to talk through your situation.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">04.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Local &amp; Nationwide Coverage</h3>
            <p className="text-slate-400 leading-relaxed">
              We provide local vehicle recovery around Ilford and Essex, alongside{" "}
              <Link href="/services/breakdown-assistance" className="text-primary font-medium hover:underline">
                nationwide breakdown recovery
              </Link>{" "}
              and vehicle transportation across the UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
