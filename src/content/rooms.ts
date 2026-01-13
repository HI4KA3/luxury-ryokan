export interface Room {
    slug: string;
    name: string;
    nameJa: string;
    description: string;
    descriptionJa: string;
    price: number; // Base price per person
    size: number; // m2
    capacity: number;
    bedType: string;
    features: string[];
    images: string[];
}

export const rooms: Room[] = [
    {
        slug: "sky-suite",
        name: "Sky Suite with Open-Air Bath",
        nameJa: "天空の露天風呂付スイート",
        description: "Our premier suite featuring a panoramic view of the mountains and a private open-air cypress bath.",
        descriptionJa: "山並みを一望する専用露天風呂を備えた、当館最高級のスイートです。",
        price: 85000,
        size: 90,
        capacity: 4,
        bedType: "2 Semi-Double Beds + Futon",
        features: ["Private Onsen", "Mountain View", "Living Area", "Separate Bedroom"],
        images: ["/images/room-suite.png", "/images/room-suite-bath.jpg"]
    },
    {
        slug: "garden-villa",
        name: "Garden Villa",
        nameJa: "庭園離れ",
        description: "A secluded villa surrounded by a private Japanese garden. Absolute privacy and serenity.",
        descriptionJa: "専用の日本庭園に囲まれた離れ。静寂とプライバシーをお約束します。",
        price: 72000,
        size: 75,
        capacity: 3,
        bedType: "Futon",
        features: ["Private Garden", "Hinoki Bath", "Tatami Room"],
        images: ["/images/room-villa.jpg", "/images/room-villa-garden.jpg"]
    },
    {
        slug: "deluxe-tatami",
        name: "Deluxe Tatami Room",
        nameJa: "デラックス和室",
        description: "Traditional tatami elegance with modern comforts and wide veranda views.",
        descriptionJa: "伝統的な和の寛ぎと、広縁からの眺望をお楽しみいただけるお部屋です。",
        price: 45000,
        size: 50,
        capacity: 4,
        bedType: "Futon",
        features: ["Valley View", "Traditional Decor", "Wide Veranda"],
        images: ["/images/room-standard.jpg"]
    }
]
