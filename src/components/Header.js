'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Header.module.css'

const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.programs', href: '/programs' },
    { key: 'nav.opportunities', href: '/opportunities' },
    { key: 'nav.events', href: '/events' },
    { key: 'nav.blog', href: '/blog' },
    { key: 'nav.media', href: '/media' },
    { key: 'nav.partners', href: '/partners' },
    { key: 'nav.contact', href: '/contact' },
]

export default function Header() {
    const { lang, setLang, t } = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
                    <img src="/assets/logo.jpg" alt="YouthConnekt Tchad" className={styles.logoImg} />
                    <span className={styles.logoText}>YouthConnekt <span>Tchad</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {t(link.key)}
                        </Link>
                    ))}
                </nav>

                {/* Right side */}
                <div className={styles.actions}>
                    {/* Language Switcher */}
                    <div className={styles.langSwitcher}>
                        {['fr', 'en', 'ar'].map(l => (
                            <button
                                key={l}
                                className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                                onClick={() => setLang(l)}
                                aria-label={`Switch to ${l}`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/join" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
                        {t('nav.join')}
                    </Link>

                    {/* Hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`}></span>
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`}></span>
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={() => setMenuOpen(false)}
                    >
                        {t(link.key)}
                    </Link>
                ))}
                <Link href="/join" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
                    {t('nav.join')}
                </Link>
                <div className={styles.mobileLang}>
                    {['fr', 'en', 'ar'].map(l => (
                        <button
                            key={l}
                            className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                            onClick={() => { setLang(l); setMenuOpen(false) }}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}
