import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "../components/theme-provider.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import { UIProvider } from "../context/ui-context.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://prashasti-portfolio.vercel.app'),
    title: "Prashasti Pathak — Software Developer",
    description: "Final-year CS student and SDE Intern building impactful, production-ready applications.",
    keywords: ["Software Developer", "SDE Intern", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Full-Stack Developer", "REST API", "DSA"],
    authors: [{ name: "Prashasti Pathak" }],
    icons: {
        icon: '/app-logo.png?v=3',
        shortcut: '/app-logo.png?v=3',
        apple: '/app-logo.png?v=3',
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://prashasti-portfolio.vercel.app",
        title: "Prashasti Pathak — Software Developer",
        description: "Final-year CS student and SDE Intern building impactful, production-ready applications.",
        siteName: "Prashasti Portfolio",
        images: [
            {
                url: "/profile.png",
                width: 1080,
                height: 1080,
                alt: "Prashasti Pathak — Software Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Prashasti Pathak — Software Developer",
        description: "Final-year CS student and SDE Intern building impactful, production-ready applications.",
        images: ["/profile.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};


import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <UIProvider>
                        <Navbar />
                        <main className="pt-16">
                            {children}
                        </main>
                        <Footer />
                    </UIProvider>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}

