import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { PROFILE_IMAGE, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ifidon Abraham Ayomide | Software Developer",
  description: "AI scientist and engineer: agents, stack, and shipped products.",
  keywords: ["Software Developer", "AI Engineer", "Agentic AI", "Full-Stack Developer", "Lagos, Nigeria", "UNILAG"],
  authors: [{ name: "Ifidon Abraham Ayomide" }],
  creator: "Ifidon Abraham Ayomide",
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
    creator: "@don_atyaserve",
    images: [PROFILE_IMAGE],
  },
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
          geistSans.variable,
          geistMono.variable,
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
        </ThemeProvider>
      </body>
    </html>
  );
}
