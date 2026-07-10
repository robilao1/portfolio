import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-swart-phi-53.vercel.app"),
  title: {
    default: "Robison — Desenvolvedor Full Stack Júnior",
    template: "%s — Robison",
  },
  description:
    "Autodidata construindo sistemas reais enquanto aprende os fundamentos técnicos. Portfólio de projetos, jornada de aprendizado e forma de trabalhar como desenvolvedor full stack júnior.",
  keywords: [
    "desenvolvedor full stack júnior",
    "desenvolvedor autodidata",
    "React",
    "Next.js",
    "TypeScript",
    "portfólio de programador",
  ],
  authors: [{ name: "Robison" }],
  openGraph: {
    title: "Robison — Desenvolvedor Full Stack Júnior",
    description:
      "Autodidata construindo sistemas reais enquanto aprende os fundamentos técnicos.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
