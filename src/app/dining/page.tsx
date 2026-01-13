import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { diningContent } from "@/content/dining";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

export default function DiningPage() {
    return (
        <main>
            <PageHeader
                title={diningContent.intro.title}
                subtitle="CUISINE"
                image={diningContent.image}
            />

            <Section>
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">SEASONAL FLAVORS</span>
                    <Heading level={2} className="mb-6">{diningContent.intro.titleJa}</Heading>
                    <Text className="text-lg">{diningContent.intro.text}</Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {diningContent.courses.map((course) => (
                        <div key={course.name} className="border border-border p-12 text-center hover:border-accent transition-colors duration-300">
                            <span className="text-accent font-serif italic text-lg mb-2 block">{course.nameJa}</span>
                            <Heading level={3} className="mb-4">{course.name}</Heading>
                            <Text className="mb-6 opacity-80">{course.description}</Text>
                            <span className="inline-block border-t border-border pt-4 text-sm font-medium">
                                {course.price}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {diningContent.features.map((feature) => (
                        <div key={feature.title} className="flex gap-6">
                            <div className="w-12 h-[1px] bg-accent mt-3 shrink-0"></div>
                            <div>
                                <Heading level={4}>{feature.title}</Heading>
                                <Text>{feature.description}</Text>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
