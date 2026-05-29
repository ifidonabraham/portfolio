"use client"

import dynamic from "next/dynamic"

export const SkyBackground = dynamic(
  () => import("@/components/sky-background").then((mod) => mod.SkyBackground),
  { ssr: false }
)
