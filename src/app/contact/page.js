'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
    const { t } = useLanguage()
    const [sent, setSent] = useState(false)

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.contact')}</span></div>
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.subtitle')}</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Info */}
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <span className={styles.icon}>📍</span>
                                <div>
                                    <strong>{t('contact.address')}</strong>
                                    <p>Avenue Charles de Gaulle, N'Djamena<br />Tchad (Afrique centrale)</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.icon}>✉️</span>
                                <div>
                                    <strong>{t('contact.email')}</strong>
                                    <a href="mailto:contact@youthconnekt-tchad.td">contact@youthconnekt-tchad.td</a>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.icon}>📞</span>
                                <div>
                                    <strong>{t('contact.phone')}</strong>
                                    <a href="tel:+23566000000">+235 66 00 00 00</a>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.icon}>🕘</span>
                                <div>
                                    <strong>Horaires</strong>
                                    <p>Lun – Ven : 08h00 – 17h00<br />Sam : 09h00 – 12h00</p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className={styles.socials}>
                                <h4>{t('contact.follow')}</h4>
                                <div className={styles.socialLinks}>
                                    {[
                                        { name: 'Facebook', icon: 'f', url: '#' },
                                        { name: 'LinkedIn', icon: 'in', url: '#' },
                                        { name: 'Twitter/X', icon: '𝕏', url: '#' },
                                        { name: 'Instagram', icon: '📷', url: '#' },
                                        { name: 'YouTube', icon: '▶', url: '#' },
                                    ].map(s => (
                                        <a key={s.name} href={s.url} className={styles.socialBtn} title={s.name}>{s.icon}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className={styles.formCard}>
                            <h2>{t('contact.form_title')}</h2>
                            {sent ? (
                                <div className="alert alert-success">✅ Votre message a bien été envoyé. Nous vous répondrons sous 48h.</div>
                            ) : (
                                <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                                    <div className="form-group">
                                        <label>{t('contact.name')} *</label>
                                        <input type="text" className="form-control" required placeholder="Votre nom complet" />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.email')} *</label>
                                        <input type="email" className="form-control" required placeholder="votre@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.subject')} *</label>
                                        <select className="form-control" required>
                                            <option value="">Choisir un sujet...</option>
                                            <option>Information générale</option>
                                            <option>Partenariat</option>
                                            <option>Opportunité à soumettre</option>
                                            <option>Presse & Médias</option>
                                            <option>Autre</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.message')} *</label>
                                        <textarea className="form-control" rows={5} required placeholder="Décrivez votre demande..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                        {t('contact.send')} →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Map */}
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=14.99%2C11.55%2C15.15%2C12.20&layer=mapnik&marker=12.1048%2C15.0444"
                            title="Localisation YouthConnekt Tchad — N'Djamena"
                            loading="lazy"
                            className={styles.mapIframe}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
