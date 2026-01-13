export interface Offer {
    id: string;
    title: string;
    titleJa: string;
    description: string;
    descriptionJa: string;
    image: string;
    validUntil: string;
    tags: string[];
}

export const offers: Offer[] = [
    {
        id: "autumn-kaiseki",
        title: "Autumn Kaiseki Experience",
        titleJa: "秋の特別懐石プラン",
        description: "Savor the flavors of fall with our seasonal mushroom and seafood course.",
        descriptionJa: "旬の松茸と海の幸をふんだんに使用した、秋限定の懐石料理をご堪能ください。",
        image: "/images/dining-kaiseki.png",
        validUntil: "2024-11-30",
        tags: ["Dining", "Seasonal"]
    },
    {
        id: "early-bird",
        title: "Early Bird Escape",
        titleJa: "早割60日",
        description: "Book 60 days in advance and receive 15% off your stay.",
        descriptionJa: "60日前までのご予約で、基本プランから15%OFFにてご利用いただけます。",
        image: "/images/offer-earlybird.jpg",
        validUntil: "2025-12-31",
        tags: ["Stay", "Discount"]
    },
    {
        id: "couple-retreat",
        title: "Anniversary Retreat",
        titleJa: "記念日プラン",
        description: "Includes a bottle of champagne and private dining.",
        descriptionJa: "シャンパンと個室夕食がついた、大切な日のための特別プラン。",
        image: "/images/offer-couple.jpg",
        validUntil: "2025-12-31",
        tags: ["Couples", "Special"]
    }
]
