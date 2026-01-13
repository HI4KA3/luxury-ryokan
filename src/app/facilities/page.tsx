import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

export default function FacilitiesPage() {
    return (
        <main>
            <PageHeader
                title="Facilities"
                subtitle="AMENITIES"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="space-y-24">
                    {/* Lounge */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 md:order-2 aspect-video relative bg-neutral-100">
                            {/* Placeholder for lounge image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Lounge Image Placeholder</div>
                        </div>
                        <div className="w-full md:w-1/2 md:order-1">
                            <Heading level={2}>Library Lounge</Heading>
                            <Text>
                                Relax with a book in our curated library lounge. Complimentary coffee and tea are served throughout the day.
                                In the evening, enjoy a selection of local sake and whiskey.
                            </Text>
                        </div>
                    </div>

                    {/* Garden */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 aspect-video relative bg-neutral-100">
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Garden Image Placeholder</div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Heading level={2}>Japanese Garden</Heading>
                            <Text>
                                A stroll garden designed to reflect the four seasons. Experience the beauty of moss, stone, and water.
                            </Text>
                        </div>
                    </div>

                    {/* Spa */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 md:order-2 aspect-video relative bg-neutral-100">
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Spa Image Placeholder</div>
                        </div>
                        <div className="w-full md:w-1/2 md:order-1">
                            <Heading level={2}>Private Spa</Heading>
                            <Text>
                                Rejuvenate with our selection of massages and treatments using organic oils.
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
