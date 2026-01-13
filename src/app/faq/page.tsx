import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import { faq } from "@/content/faq";

export default function FAQPage() {
    return (
        <main>
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="HELP"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-8">
                    {faq.map((item, index) => (
                        <div key={index} className="border-b border-border pb-8">
                            <Heading level={4} className="mb-2">{item.question}</Heading>
                            <Text className="mb-4">{item.answer}</Text>

                            <div className="opacity-60">
                                <p className="font-serif text-sm mb-1">{item.questionJa}</p>
                                <p className="text-xs">{item.answerJa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
