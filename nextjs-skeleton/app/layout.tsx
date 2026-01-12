import type { Metadata } from "next";
import { Noto_Sans, Lora } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Configure fonts
const notoSans = Noto_Sans({
    variable: "--font-primary",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const lora = Lora({
    variable: "--font-alt",
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Regular, Medium, Bold
});

export const metadata: Metadata = {
    title: "Centre As-Salam Montréal",
    description: "Centre communautaire musulman établi à Montréal. Prières, cours et entraide.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lang = "fr"; // Hardcoded default

    return (
        <html lang={lang} className={`${notoSans.variable} ${lora.variable}`}>
            <body className="antialiased min-h-screen flex flex-col bg-neutral text-foreground font-sans">
                <Navbar lang={lang} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer lang={lang} />
            </body>
        </html>
    );
}
