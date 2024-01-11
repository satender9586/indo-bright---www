import clsx from "clsx";
import "./globals.css";
import { inter } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { SECTION_LAST_PROPS } from "@/content/home";
import { StructuredData } from "@/components/structured-data";
import TallyPopup from "@/components/tally-popup";
import Script from "next/script";

const CANONICAL_URL =
  process.env.VERCEL_ENV === "production"
    ? new URL("https://www.indobright.co.in")
    : new URL(`https://${process.env.VERCEL_URL}`);

export const metadata = {
  metadataBase: CANONICAL_URL,
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 3,
  },
  title: {
    default: "Indobright Services",
    template: "Indobright Services - %s",
  },
  description:
    "Indobright Services is a startup and MSME solutions company. We provide services like web development, mobile app development, digital marketing, and many more.",
  openGraph: {
    title: "Indobright Services",
    description:
      "Indobright Services is a startup and MSME solutions company. We provide services like web development, mobile app development, digital marketing, and many more.",
    url: CANONICAL_URL,
    siteName: "Indobright Services",
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

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Indobright Services Pvt. Ltd.",
  alternateName: "Indobright",
  url: "https://www.indobright.co.in",
  logo: "",
  sameAs: "https://www.indobright.co.in",
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Indobright Services",
  url: "https://www.indobright.co.in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-analytics">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={clsx(
          "flex flex-col bg-secondary min-h-screen",
          inter.className
        )}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* JSON LD */}
        <StructuredData jsonLd={ORG_JSON_LD} />
        <StructuredData jsonLd={WEBSITE_JSON_LD} />
        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main className="py-10 md:py-20">
          {children}
          <Section className="pt-20" {...SECTION_LAST_PROPS} paper />
        </main>

        {/* FOOTER */}
        <Footer />
        <TallyPopup />
      </body>
    </html>
  );
}
