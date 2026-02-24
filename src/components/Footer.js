'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
    const { t } = useLanguage()
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleNewsletter = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
        }
    }

    const quickLinks = [
        { key: 'nav.about', href: '/about' },
        { key: 'nav.programs', href: '/programs' },
        { key: 'nav.opportunities', href: '/opportunities' },
        { key: 'nav.events', href: '/events' },
        { key: 'nav.blog', href: '/blog' },
        { key: 'nav.partners', href: '/partners' },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.topWave}></div>
            <div className="container">
                {/* Main Grid */}
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logoWrap}>
                            <img src="/assets/img/fetched/logo.jpg" alt="YouthConnekt Tchad" className={styles.logo} />
                            <span className={styles.logoText}>YouthConnekt <span>Tchad</span></span>
                        </Link>
                        <p className={styles.desc}>{t('footer.description')}</p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook" className={styles.social}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className={styles.social}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" fill="currentColor" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter/X" className={styles.social}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className={styles.social}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" aria-label="YouTube" className={styles.social}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={styles.colTitle}>{t('footer.quick_links')}</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className={styles.footerLink}>
                                        <span>›</span> {t(l.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className={styles.colTitle}>{t('footer.contact_us')}</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span className={styles.contactIcon}>📍</span>
                                <span>N'Djamena, Tchad<br />[Adresse complète]</span>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>✉️</span>
                                <a href="mailto:contact@youthconnekt-tchad.td" className={styles.contactLink}>contact@youthconnekt-tchad.td</a>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>📞</span>
                                <a href="tel:+23566000000" className={styles.contactLink}>+235 66 00 00 00</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className={styles.colTitle}>{t('newsletter_section.title')}</h4>
                        <p className={styles.newsletterText}>{t('newsletter_section.subtitle')}</p>
                        {subscribed ? (
                            <div className="alert alert-success" style={{ marginTop: '12px' }}>{t('newsletter_section.success')}</div>
                        ) : (
                            <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder={t('newsletter_section.placeholder')}
                                    required
                                    className={styles.newsletterInput}
                                />
                                <button type="submit" className={`btn btn-primary btn-sm ${styles.newsletterBtn}`}>
                                    {t('newsletter_section.button')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>{t('footer.copyright')}</p>
                    <div className={styles.legalLinks}>
                        <Link href="/legal/mentions" className={styles.legalLink}>{t('footer.legal')}</Link>
                        <Link href="/legal/privacy" className={styles.legalLink}>{t('footer.privacy')}</Link>
                        <Link href="/legal/terms" className={styles.legalLink}>{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
