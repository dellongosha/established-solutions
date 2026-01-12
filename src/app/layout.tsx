import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css'   
import './globals.css'; // your Tailwind CSS file



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Established Solutions | IT & Cybersecurity Services",
  description: "Professional IT consulting, cybersecurity, cloud solutions, and remote tech support for businesses and individuals. Expert certified team delivering secure, reliable solutions.",
  keywords: [
    "IT support",
    "cybersecurity",
    "IT consulting",
    "cloud solutions",
    "remote support",
    "network security",
    "managed IT services",
    "penetration testing",
    "malware removal",
    "ransomware protection",
  ],
  authors: [{ name: "Established Solutions" }],
  creator: "Established Solutions",
  publisher: "Established Solutions",
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://established.co.zw"),
  alternates: {
    canonical: "https://established.co.zw",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://established.co.zw",
    siteName: "Established Solutions",
    title: "Established Solutions | IT & Cybersecurity Services",
    description: "Professional IT consulting, cybersecurity, cloud solutions, and remote tech support for businesses and individuals.",
    images: [
      {
        url: "https://established.co.zw/logo.png",
        width: 1200,
        height: 630,
        alt: "Established Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Established Solutions | IT & Cybersecurity Services",
    description: "Professional IT consulting, cybersecurity, cloud solutions, and remote tech support for businesses and individuals.",
    images: ["https://established.co.zw/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Established Solutions",
    url: "https://established.co.zw",
    logo: "https://established.co.zw/logo.png",
    description: "Professional IT consulting, cybersecurity, cloud solutions, and remote tech support for businesses and individuals.",
    sameAs: [
      // Add your social media URLs here
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZW",
      telephone: "+263715874747",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+263715874747",
      contactType: "Customer Support",
      email: "info@established.co.zw",
    },
    areaServed: "ZW",
    knowsAbout: [
      "IT Support",
      "Cybersecurity",
      "Cloud Services",
      "Network Security",
      "Penetration Testing",
      "Malware Removal",
      "Ransomware Protection",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
