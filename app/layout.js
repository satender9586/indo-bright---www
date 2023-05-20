import clsx from "clsx";
import "./globals.css";
import { inter } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { SECTION_LAST_PROPS } from "@/content/home";

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    default: "Indo Bright Services",
    template: "Indo Bright Services - %s",
  },
  description:
    "Indo Bright Services is a startup and MSME solutions company. We provide services like web development, mobile app development, digital marketing, and many more.",
  openGraph: {
    title: "Indo Bright Services",
    description: "Indo Bright Services is a startup and MSME solutions company. We provide services like web development, mobile app development, digital marketing, and many more.",
    url: new URL(`https://${process.env.VERCEL_URL}`),
    siteName: "Indo Bright Services",
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "flex flex-col bg-secondary min-h-screen gap-20",
          inter.className
        )}
      >
        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Section {...SECTION_LAST_PROPS} paper />
        <Footer />
      </body>
    </html>
  );
}
