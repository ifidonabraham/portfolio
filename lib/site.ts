/**
 * Public asset paths — update PROFILE_IMAGE when you replace your headshot in /public.
 */
export const PROFILE_IMAGE = "/myimage.jpg" as const

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifidonabraham.com"
