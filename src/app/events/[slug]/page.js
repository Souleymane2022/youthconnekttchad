'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { getEvent } from '@/data/events'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'

export default function EventDetailPage({ params }) {
    const { t, lang } = useLanguage()
    const ev = getEvent(params.slug)
    if (!ev) return notFound()
    const [regSent, setRegSent] = useState(false)

    const title = lang === 'ar' ? ev.title_ar : lang === 'en' ? ev.title_en : ev.title
    const desc = lang === 'ar' ? ev.description_ar : lang === 'en' ? ev.description_en : ev.description

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <Link href="/">{t('nav.home')}</Link><span>›</span>
                        <Link href="/events">{t('nav.events')}</Link><span>›</span>
                        <span>{title}</span>
                    </div>
                    <span className="badge badge-open" style={{ marginBottom: '12px' }}>{ev.type}</span>
                    <h1>{title}</h1>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>📅 {new Date(ev.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>🕗 {ev.time}–{ev.endTime}</span>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>📍 {ev.location}</span>
                    </div>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div className={styles.layout}>
                        <div className={styles.main}>
                            {/* Description */}
                            <div className={styles.block}>
                                <h2>À propos</h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>{desc}</p>
                            </div>

                            {/* Program */}
                            {ev.program.length > 0 && (
                                <div className={styles.block}>
                                    <h2>{t('events.program')}</h2>
                                    <div className={styles.programList}>
                                        {ev.program.map((p, i) => (
                                            <div key={i} className={styles.programItem}>
                                                <span className={styles.programTime}>{p.time}</span>
                                                <span className={styles.programActivity}>{p.activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Speakers */}
                            {ev.speakers.length > 0 && (
                                <div className={styles.block}>
                                    <h2>{t('events.speakers')}</h2>
                                    <div className={styles.speakersGrid}>
                                        {ev.speakers.map((sp, i) => (
                                            <div key={i} className={styles.speakerCard}>
                                                <div className={styles.speakerAvatar}>{sp.name.charAt(0)}</div>
                                                <div>
                                                    <strong>{sp.name}</strong>
                                                    <span>{sp.role}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Partners */}
                            {ev.eventPartners.length > 0 && (
                                <div className={styles.block}>
                                    <h2>{t('events.partners')}</h2>
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                        {ev.eventPartners.map((p, i) => (
                                            <span key={i} style={{ padding: '8px 16px', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', fontWeight: '600' }}>{p}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Registration */}
                        <div className={styles.sidebar}>
                            <div className={styles.regCard}>
                                <h3>S'inscrire à l'événement</h3>
                                {ev.status === 'past' ? (
                                    <div className="alert alert-info">Cet événement est terminé.</div>
                                ) : regSent ? (
                                    <div className="alert alert-success">Inscription confirmée ! Vous recevrez les détails par email.</div>
                                ) : (
                                    <form onSubmit={e => { e.preventDefault(); setRegSent(true) }}>
                                        <div className="form-group">
                                            <label>Nom complet *</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email *</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Téléphone</label>
                                            <input type="tel" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Profil</label>
                                            <select className="form-control">
                                                <option value="etudiant">Étudiant(e)</option>
                                                <option value="pro">Professionnel(le)</option>
                                                <option value="entrepreneur">Entrepreneur(e)</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                            {t('events.register')} →
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
