import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Heading, Text } from "@/components/ui/typography";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="font-display text-3xl tracking-widest mb-2">{siteConfig.name}</h2>
                        <span className="text-sm tracking-[0.3em] block opacity-70 mb-6">{siteConfig.nameJa}</span>
                        <Text variant="muted" className="text-background/60 text-sm">
                            {siteConfig.description}
                        </Text>
                    </div>

                    {/* Navigation */}
                    <div>
                        <Heading level={4} className="text-background mb-6">Explore</Heading>
                        <ul className="space-y-3">
                            {siteConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-background/70 hover:text-accent transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <Heading level={4} className="text-background mb-6">Contact</Heading>
                        <address className="not-italic space-y-3 text-sm text-background/70">
                            <p>{siteConfig.address.fullAddress}</p>
                            <p><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent">{siteConfig.contact.phone}</a></p>
                            <p><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">{siteConfig.contact.email}</a></p>
                        </address>
                    </div>

                    {/* Info */}
                    <div>
                        <Heading level={4} className="text-background mb-6">Information</Heading>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li>Check-in: {siteConfig.policies.checkIn}</li>
                            <li>Check-out: {siteConfig.policies.checkOut}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/40">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-background">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-background">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
