import Link from "next/link"
import Image from "next/image"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/ahs-logo-wordmark.webp"
        alt="AHS Recovery"
        width={106}
        height={48}
        priority
        className="h-10 md:h-12 w-auto"
      />
    </Link>
  )
}
