import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { PROFILE_IMAGE, SITE_URL } from "@/lib/site";
import { Toaster } from "sonner";

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const headingFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Ifidon Abraham Portfolio",
  title: "Ifidon Abraham Ayomide | Software Developer",
  description: "AI scientist and engineer: agents, stack, and shipped products.",
  keywords: ["Software Developer", "AI Engineer", "Agentic AI", "Full-Stack Developer", "Lagos, Nigeria", "UNILAG"],
  authors: [{ name: "Ifidon Abraham Ayomide" }],
  creator: "Ifidon Abraham Ayomide",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    title: "Ifidon Abraham Ayomide | Software Developer",
    description: "AI scientist and engineer: agents, stack, and shipped products.",
    siteName: "Ifidon Abraham Ayomide Portfolio",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 512,
        height: 512,
        alt: "Ifidon Abraham Ayomide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifidon Abraham Ayomide | Software Developer",
    description: "AI scientist and engineer: agents, stack, and shipped products.",
    creator: "@don_atyaservice",
    images: [PROFILE_IMAGE],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          bodyFont.variable,
          headingFont.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: "rounded-xl border border-zinc-200 dark:border-zinc-800",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
