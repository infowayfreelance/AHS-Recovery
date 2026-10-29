"use client"

import dynamic from "next/dynamic"

const GalleryGrid = dynamic(() => import("@/components/GalleryGrid"), {
  ssr: false,
  loading: () => (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-14 animate-pulse">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-9 w-32 rounded-full bg-white/5" />
        ))}
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="mb-5 w-full rounded-2xl border border-white/5 bg-navy-accent animate-pulse"
            style={{ height: i % 3 === 0 ? 320 : i % 3 === 1 ? 260 : 380 }}
          />
        ))}
      </div>
    </>
  ),
})

export default function GalleryGridLazy() {
  return <GalleryGrid />
}
