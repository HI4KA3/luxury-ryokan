import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F6F1E8", // Washi / Off-white
                foreground: "#1F1F1F", // Charcoal / Ink
                primary: {
                    DEFAULT: "#1F1F1F",
                    foreground: "#F6F1E8",
                },
                secondary: {
                    DEFAULT: "#D4AF37", // Muted Gold
                    foreground: "#1F1F1F",
                },
                accent: {
                    DEFAULT: "#D4AF37", // Muted Gold (Using as accent too for now)
                    foreground: "#1F1F1F",
                },
                muted: {
                    DEFAULT: "#E5E0D8", // Slightly darker washi
                    foreground: "#666666",
                },
                border: "#E5E0D8",
            },
            fontFamily: {
                sans: ["var(--font-noto-sans-jp)", "sans-serif"],
                serif: ["var(--font-noto-serif-jp)", "serif"],
                heading: ["var(--font-noto-serif-jp)", "serif"],
                display: ["var(--font-cormorant-garamond)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "fade-in": "fadeIn 1s ease-out forwards",
                "slide-up": "slideUp 0.8s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
