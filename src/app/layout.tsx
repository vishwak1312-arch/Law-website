import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollToTop from "@/components/ScrollToTop";
import BookConsultationModal from "@/components/BookConsultationModal";
import { ConsultationModalProvider } from "@/lib/useConsultationModal";
import { siteConfig } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["law firm", "advocate", "legal services", "lawyer", "corporate law", "family law", "criminal defense", "Hyderabad attorney", "DSP Law Associates", "Vamshi Krishnaa"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// JSON-LD schemas
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      name: siteConfig.attorney,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500056", addressCountry: "IN" },
      image: `${siteConfig.url}/attorney-portrait.png`,
      priceRange: "$$",
      openingHours: ["Mo-Fr 16:00-20:00"],
    },
    {
      "@type": "LegalService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      areaServed: { "@type": "City", name: "Hyderabad" },
      serviceType: ["Corporate Law", "Family Law", "Criminal Defense", "Property Law", "Employment Law", "Immigration Law", "Intellectual Property", "Civil Litigation"],
    },
    {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500056", addressCountry: "IN" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "16:00", closes: "20:00" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet" />
        {/* Calendly Widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ConsultationModalProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCTA />
          <ExitIntentPopup />
          <ScrollToTop />
          <BookConsultationModal />
        </ConsultationModalProvider>

        {/* Calendly Widget JS */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* Google reCAPTCHA v3 */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"}');`}
        </Script>

        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}');`}
        </Script>

        {/* Tawk.to Live Chat */}
        <Script id="tawkto" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWKTO_ID || "YOUR_ID"}/1';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`}
        </Script>
      </body>
    </html>
  );
}
