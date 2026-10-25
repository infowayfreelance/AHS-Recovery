"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const EmergencyRequestForm = dynamic(() => import("@/components/EmergencyRequestForm"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[620px] bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 animate-pulse" />
  ),
})

export default function ContactRecoveryForm({
  submitLabel,
  footnote,
}: {
  submitLabel?: string
  footnote?: ReactNode
}) {
  return <EmergencyRequestForm submitLabel={submitLabel} footnote={footnote} />
}
