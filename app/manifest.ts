import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ifidon Abraham Portfolio",
    short_name: "Ifidon Portfolio",
    description: "Software developer portfolio with AI and full-stack projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/myimage.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/myimage.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  }
}
