import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { onsenContent } from "@/content/onsen";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

export default function OnsenPage() {
    return (
        <main>
            <PageHeader
                title={onsenContent.intro.title}
                subtitle="HOT SPRING"
                image="/images/onsen-outdoor.png"
            />

            <Section>
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">RELAXATION</span>
                    <Heading level={2} className="mb-6">{onsenContent.intro.titleJa}</Heading>
                    <Text className="text-lg">{onsenContent.intro.text}</Text>
                </div>

                <div className="space-y-32">
                    {onsenContent.features.map((feature, index) => (
                        <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 aspect-[3/2] relative">
                                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 p-8 border-l border-border">
                                <Heading level={3}>{feature.title}</Heading>
                                <span className="text-sm text-muted-foreground block mb-4 -mt-2">{feature.titleJa}</span>
                                <Text>{feature.description}</Text>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-neutral-50 p-12 rounded-sm max-w-4xl mx-auto">
                    <Heading level={3} className="text-center mb-8">Details & Etiquette</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <Heading level={5}>Hours</Heading>
                            <Text>{onsenContent.details.hours}</Text>

                            <Heading level={5} className="mt-6">Spring Quality</Heading>
                            <Text>{onsenContent.details.waterType}</Text>
                        </div>
                        <div>
                            <Heading level={5}>Amenities</Heading>
                            <Text>
                                Shampoo, Conditioner, Body Soap, Hair Dryer, Towels provided.
                            </Text>

                            <Heading level={5} className="mt-6">Important Note</Heading>
                            <Text className="text-sm">
                                Please refrain from wearing swimsuits. Guests with tattoos may be asked to cover them or use the private baths.
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
