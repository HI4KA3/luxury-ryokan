import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { offers } from "@/content/offers";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OffersPage() {
    return (
        <main>
            <PageHeader
                title="Special Offers"
                subtitle="PACKAGES"
                image="/images/dining-kaiseki.png"
            />

            <Section>
                <div className="grid grid-cols-1 gap-12">
                    {offers.map((offer, index) => (
                        <div key={offer.id} className="group relative border border-border bg-background p-6 md:p-8 flex flex-col md:flex-row gap-8 transition-shadow hover:shadow-md">
                            <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden">
                                <Image src={offer.image} alt={offer.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                <div className="flex gap-2 mb-3">
                                    {offer.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium border border-accent px-2 py-0.5 text-accent">{tag}</span>
                                    ))}
                                </div>
                                <Heading level={3} className="group-hover:text-accent transition-colors">{offer.title}</Heading>
                                <Text className="mb-6">{offer.description}</Text>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-sm text-neutral-500">Valid until: {offer.validUntil}</span>
                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-neutral-100"
                                    >
                                        Book This Offer
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
