"use client"

import dynamic from "next/dynamic"

export const SpaceModelBackground = dynamic(
  () =>
    import("@/components/space-model-background").then((mod) => {
      mod.preloadHeroModel?.()
      return mod.SpaceModelBackground
    }),
  { ssr: false, loading: () => null }
)
