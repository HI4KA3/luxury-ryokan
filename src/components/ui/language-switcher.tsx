"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LanguageSwitcher() {
    const [lang, setLang] = useState<"JA" | "EN">("EN");

    const toggle = () => {
        setLang((prev) => (prev === "JA" ? "EN" : "JA"));
        // In a real app, this would change the route or context
        console.log("Language switched to", lang === "JA" ? "EN" : "JA");
    };

    return (
        <Button variant="ghost" size="sm" onClick={toggle} className="font-serif">
            {lang === "JA" ? "ENGLISH" : "日本語"}
        </Button>
    );
}
