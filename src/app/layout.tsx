import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
// Importação da fonte Inter
import { Inter, Roboto_Condensed } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";

// Configuração da fonte Inter
const inter = Inter({
  subsets: ['latin'], // Defina os subsets conforme necessário
  variable: '--font-inter', // Nome da variável CSS para a fonte
});

// Configuração da fonte Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed', // Nome da variável CSS para a fonte
});

export const metadata: Metadata = {
  title: {
    default: "Mila Cell",
    template: `%s | Mila Cell`,
  },
  description: "Mila Cell",
  openGraph: {
    title: `Mila Cell`,
    description: 'Mila Cell',
    url: "Mila Cell",
    siteName: `Mila Cell`,
    locale: "pt_BR",
    type: "website",
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
  twitter: {
    title: `Mila Cell`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const fontSans = inter;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRN8M7PS');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased mx-auto pt-0 sm:pt-0 overflow-x-hidden w-[100vw] max-w-[100vw]",
          fontSans.variable,
          robotoCondensed.variable // Adicionando a variável da fonte Roboto Condensed
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRN8M7PS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}