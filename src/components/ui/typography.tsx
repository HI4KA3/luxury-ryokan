import { cn } from "@/lib/utils";
import React from "react";

// Heading Component
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    font?: "sans" | "serif" | "display";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 2, font = "serif", children, ...props }, ref) => {
        const Comp = `h${level}` as const;

        const styles = {
            1: "text-4xl md:text-6xl font-light tracking-tight mb-6",
            2: "text-3xl md:text-5xl font-normal mb-8",
            3: "text-2xl md:text-3xl font-medium mb-4",
            4: "text-xl md:text-2xl font-medium mb-3",
            5: "text-lg font-bold mb-2",
            6: "text-base font-bold mb-2",
        }

        const fonts = {
            sans: "font-sans",
            serif: "font-nav", // wait, I defined 'heading' in tailwind config for serif
            display: "font-display",
        }

        return (
            <Comp
                ref={ref} // @ts-ignore
                className={cn("text-foreground", styles[level], font === 'serif' ? 'font-serif' : font === 'display' ? 'font-display' : 'font-sans', className)}
                {...props}
            >
                {children}
            </Comp>
        )
    }
)
Heading.displayName = "Heading";

// Text Component
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "default" | "muted" | "small" | "large";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "text-base leading-relaxed text-foreground/90",
            muted: "text-sm text-muted-foreground",
            small: "text-xs font-medium leading-none",
            large: "text-lg font-semibold",
        }
        return (
            <p ref={ref} className={cn(variants[variant], className)} {...props}>
                {children}
            </p>
        )
    }
)
Text.displayName = "Text";
