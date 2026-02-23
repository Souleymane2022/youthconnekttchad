'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'
import { events } from '@/data/events'
import styles from './page.module.css'

export default function EventsPage() {
    const { t, lang } = useLanguage()
    const upcoming = events.filter(e => e.status === 'upcoming')
    const past = events.filter(e => e.status === 'past')

    const EventCard = ({ ev }) => (
        <Link href={`/events/${ev.slug}`} className={`card ${styles.eventCard}`}>
            <div className={styles.evDateCol}>
                <span className={styles.evDay}>{new Date(ev.date).getDate()}</span>
                <span className={styles.evMonth}>{new Date(ev.date).toLocaleDateString('fr-FR', { month: 'short' })}</span>
                <span className={styles.evYear}>{new Date(ev.date).getFullYear()}</span>
            </div>
            <div className={styles.evContent}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge badge-open">{ev.type}</span>
                </div>
                <h3>{lang === 'ar' ? ev.title_ar : lang === 'en' ? ev.title_en : ev.title}</h3>
                <p className={styles.evDesc}>{lang === 'ar' ? ev.description_ar : lang === 'en' ? ev.description_en : ev.description}</p>
                <div className={styles.evFooter} style={{ display: 'flex', gap: '16px', color: 'var(--gray-600)', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {ev.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {ev.time}–{ev.endTime}</span>
                </div>
            </div>
        </Link>
    )

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.events')}</span></div>
                    <h1>{t('events.title')}</h1>
                    <p>{t('events.subtitle')}</p>
                </div>
            </div>

            <section className="section bg-gray">
                <div className="container">
                    {upcoming.length > 0 && (
                        <>
                            <h2 style={{ marginBottom: '32px' }}>{t('events_section.title')}</h2>
                            <div className={styles.evList}>
                                {upcoming.map(ev => <EventCard key={ev.id} ev={ev} />)}
                            </div>
                        </>
                    )}

                    {past.length > 0 && (
                        <div style={{ marginTop: '64px' }}>
                            <h2 style={{ marginBottom: '32px' }}>Événements passés</h2>
                            <div className={styles.evList}>
                                {past.map(ev => (
                                    <Link href={`/events/${ev.slug}`} key={ev.id} className={`card ${styles.pastCard}`}>
                                        <div className={styles.evContent}>
                                            <span className="badge badge-closed">{ev.type}</span>
                                            <h3>{lang === 'ar' ? ev.title_ar : lang === 'en' ? ev.title_en : ev.title}</h3>
                                            <p className={styles.evDesc}>{lang === 'ar' ? ev.description_ar : lang === 'en' ? ev.description_en : ev.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
