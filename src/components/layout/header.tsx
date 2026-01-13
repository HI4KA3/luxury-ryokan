"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="z-50 group">
                    <h1 className={cn("font-display text-2xl md:text-3xl tracking-widest text-foreground transition-colors", isScrolled ? "" : "text-white mix-blend-difference")}>
                        {siteConfig.name}
                    </h1>
                    <span className={cn("text-xs tracking-[0.3em] block text-foreground/70 group-hover:text-accent transition-colors", isScrolled ? "" : "text-white/80 mix-blend-difference")}>
                        {siteConfig.nameJa}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn("text-sm tracking-widest hover:text-accent transition-colors", isScrolled ? "text-foreground" : "text-white mix-blend-difference")}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className={cn(isScrolled ? "" : "text-white mix-blend-difference")}>
                        <LanguageSwitcher />
                    </div>

                    <Button variant="primary" size="sm" className="hidden lg:inline-flex">
                        Book Now
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "" : "text-white mix-blend-difference")} />
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden",
                        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-2xl font-serif tracking-widest text-foreground hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pt-8">
                        <Button size="lg" className="w-full">Book Your Stay</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
