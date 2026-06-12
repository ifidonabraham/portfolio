import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FON TECH — Innovative Digital Solutions",
  description:
    "FON TECH delivers premium web development, mobile apps, AI integrations, and digital content for businesses across every industry. Your digital success starts here.",
  keywords: "web development, mobile apps, AI chatbots, digital solutions, e-commerce, UI/UX, FON TECH",
  openGraph: {
    title: "FON TECH — Innovative Digital Solutions",
    description: "Premium digital experiences for businesses across every industry.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
