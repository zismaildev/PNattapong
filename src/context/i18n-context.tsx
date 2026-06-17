"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { th } from "@/locales/th";

type Locale = "th" | "en";

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>("th");
    const [translations, setTranslations] = useState<Record<Locale, Record<string, string>>>({
        th,    // Thai is preloaded
        en: {} // English is lazy loaded
    });

    useEffect(() => {
        // Skip Thai (already loaded) or if already loaded
        if (locale !== "th" && Object.keys(translations[locale]).length === 0) {
            const loadLocale = async () => {
                try {
                    let loadedTranslations: Record<string, string> = {};
                    
                    if (locale === "en") {
                        loadedTranslations = (await import("@/locales/en")).en;
                    }
                    
                    setTranslations(prev => ({
                        ...prev,
                        [locale]: loadedTranslations
                    }));
                } catch (error) {
                    console.error(`Failed to load translations for: ${locale}`, error);
                }
            };
            
            loadLocale();
        }
    }, [locale, translations]);

    // Restore locale on mount
    useEffect(() => {
        const saved = localStorage.getItem("locale") as Locale;
        if (saved && ["th", "en"].includes(saved)) {
            setLocale(saved);
        }
    }, []);

    const handleSetLocale = useCallback((newLocale: Locale) => {
        if (!["th", "en"].includes(newLocale)) return;
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
        document.documentElement.lang = newLocale;
    }, []);

    const t = useCallback((key: string) => {
        if (translations[locale]?.[key]) {
            return translations[locale][key];
        }
        
        if (translations["th"]?.[key]) {
            return translations["th"][key];
        }
        
        return key;
    }, [locale, translations]);

    return (
        <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
