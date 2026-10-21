import type { Metadata } from "next"
import { siteConfig } from "./site-config"

interface BuildMetadataOptions {
  title: string
  description: string
  path?: string
  /** Overrides the Open Graph / Twitter title when it should differ from the page <title>. */
  ogTitle?: string
  /** Overrides the Open Graph / Twitter description when it should differ from the meta description. */
  ogDescription?: string
  /** Adds a page-specific Open Graph / Twitter image. Falls back to the site default when omitted. */
  ogImage?: { url: string; width: number; height: number; alt: string }
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogTitle,
  ogDescription,
  ogImage,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.siteUrl}${path}`
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDescription = ogDescription ?? description
  const images = ogImage
    ? [{ url: ogImage.url, width: ogImage.width, height: ogImage.height, alt: ogImage.alt }]
    : undefined

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: siteConfig.name,
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      ...(images ? { images: images.map((img) => img.url) } : {}),
    },
  }
}
