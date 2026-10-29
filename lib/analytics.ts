declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Pushes the contact_form_success event to the existing GTM dataLayer.
 * Call only once per successful submission — callers are responsible for
 * guarding against duplicate calls (e.g. a submission-in-progress lock).
 */
export function pushContactFormSuccessEvent(formLocation: string) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: "contact_form_success",
    form_name: "contact_form",
    form_location: formLocation,
  })
}
