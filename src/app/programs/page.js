'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { programs } from '@/data/programs'
import styles from './page.module.css'

export default function ProgramsPage() {
    const { t, lang } = useLanguage()

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.programs')}</span></div>
                    <h1>{t('programs.title')}</h1>
                    <p>{t('programs.subtitle')}</p>
                </div>
            </div>

            <section className="section bg-gray">
                <div className="container">
                    <div className={styles.programsGrid}>
                        {programs.map((prog, i) => (
                            <Link href={`/programs/${prog.slug}`} key={prog.id} className={`card ${styles.programCard}`}
                                style={{ borderTopColor: prog.color }}>
                                <div className={styles.progHeader}>
                                    <span className={styles.progIcon}>{prog.icon}</span>
                                    <div className={styles.progBadge} style={{ background: prog.color + '20', color: prog.color }}>
                                        Programme {i + 1}
                                    </div>
                                </div>
                                <h2>{lang === 'ar' ? prog.title_ar : lang === 'en' ? prog.title_en : prog.title}</h2>
                                <p>{lang === 'ar' ? prog.shortDesc_ar : lang === 'en' ? prog.shortDesc_en : prog.shortDesc}</p>
                                <ul className={styles.progObjectivesList}>
                                    {(lang === 'en' ? prog.objectives_en : prog.objectives).slice(0, 2).map((o, j) => (
                                        <li key={j}>✓ {o}</li>
                                    ))}
                                </ul>
                                <span className={`btn btn-sm ${styles.progCta}`} style={{ background: prog.color, color: '#fff', borderColor: prog.color }}>
                                    {t('programs.apply')} →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section style={{ background: 'var(--primary)', padding: '64px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--white)', marginBottom: '12px' }}>Vous avez des questions sur nos programmes ?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>Notre équipe est là pour vous accompagner dans votre choix.</p>
                    <div className="flex-center gap-16">
                        <Link href="/contact" className="btn btn-outline-white">Contactez-nous</Link>
                        <Link href="/join" className="btn btn-primary">Rejoindre maintenant</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
