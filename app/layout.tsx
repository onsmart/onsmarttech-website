import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OnSmart Tech Solutions - Transformação Digital",
  description: "Transforme seu negócio com soluções digitais inovadoras. Desenvolvimento web, apps mobile, consultoria digital e muito mais.",
  generator: 'Next.js',
  keywords: "desenvolvimento web, aplicativos mobile, consultoria digital, transformação digital, tecnologia, software personalizado",
  authors: [{ name: "OnSmart Tech Solutions" }],
  creator: "OnSmart Tech Solutions",
  publisher: "OnSmart Tech Solutions",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://onsmarttech.vercel.app",
    title: "OnSmart Tech Solutions - Transformação Digital",
    description: "Transforme seu negócio com soluções digitais inovadoras. Desenvolvimento web, apps mobile, consultoria digital e muito mais.",
    siteName: "OnSmart Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnSmart Tech Solutions - Transformação Digital",
    description: "Transforme seu negócio com soluções digitais inovadoras. Desenvolvimento web, apps mobile, consultoria digital e muito mais.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
