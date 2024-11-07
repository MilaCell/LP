import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
// Importação da onte Inter
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
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased mx-auto pt-0 sm:pt-0 overflow-x-hidden w-[100vw] max-w-[100vw]",
          fontSans.variable,
          robotoCondensed.variable // Adicionando a variável da fonte Roboto Condensed
        )}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

