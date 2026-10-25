"use client"

import dynamic from "next/dynamic"
import { MapPin } from "lucide-react"

const ConsentGatedMap = dynamic(() => import("@/components/cookies/ConsentGatedMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-white/5">
      <MapPin className="w-8 h-8 text-primary/60" aria-hidden="true" />
    </div>
  ),
})

export default function ContactMapLazy({ src, title }: { src: string; title: string }) {
  return <ConsentGatedMap src={src} title={title} />
}
