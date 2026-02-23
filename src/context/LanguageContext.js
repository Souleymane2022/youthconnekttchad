'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'

const dicts = { fr, en, ar }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState('fr')

    useEffect(() => {
        const stored = localStorage.getItem('yc_lang') || 'fr'
        setLangState(stored)
        applyLang(stored)
    }, [])

    function applyLang(l) {
        document.documentElement.lang = l
        document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
        if (l === 'ar') {
            document.documentElement.classList.add('lang-ar')
            document.documentElement.classList.remove('lang-ltr')
        } else {
            document.documentElement.classList.remove('lang-ar')
            document.documentElement.classList.add('lang-ltr')
        }
    }

    function setLang(l) {
        setLangState(l)
        localStorage.setItem('yc_lang', l)
        applyLang(l)
    }

    function t(keyPath) {
        try {
            const dict = dicts[lang] || dicts.fr
            const keys = keyPath.split('.')
            let result = dict
            for (const k of keys) {
                if (result === undefined || result === null) return keyPath
                result = result[k]
            }
            return (typeof result === 'string' ? result : null) || keyPath
        } catch {
            return keyPath
        }
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
