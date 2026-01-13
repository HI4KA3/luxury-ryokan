import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
    display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: "--font-noto-serif-jp",
    display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: "--font-cormorant-garamond",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Luxury Ryokan | 贅の余白",
    description: "A sanctuary of silence and luxury. Experience the essence of Japanese hospitality.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorantGaramond.variable}`}>
            <body className={cn(notoSansJP.className, "antialiased")}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
