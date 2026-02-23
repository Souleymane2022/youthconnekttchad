'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { getProgram } from '@/data/programs'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

export default function ProgramDetailPage({ params }) {
    const { t, lang } = useLanguage()
    const prog = getProgram(params.slug)
    if (!prog) return notFound()

    const title = lang === 'ar' ? prog.title_ar : lang === 'en' ? prog.title_en : prog.title
    const objectives = lang === 'en' ? prog.objectives_en : prog.objectives
    const audience = lang === 'ar' ? prog.audience_ar : lang === 'en' ? prog.audience_en : prog.audience
    const format = lang === 'ar' ? prog.format_ar : lang === 'en' ? prog.format_en : prog.format
    const how = lang === 'ar' ? prog.how_ar : lang === 'en' ? prog.how_en : prog.how

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <Link href="/">{t('nav.home')}</Link><span>›</span>
                        <Link href="/programs">{t('nav.programs')}</Link><span>›</span>
                        <span>{title}</span>
                    </div>
                    <div className={styles.heroIcon}>{prog.icon}</div>
                    <h1>{title}</h1>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <div className={styles.detailGrid}>
                        {/* Objectives */}
                        <div className={styles.block}>
                            <h2><span style={{ color: prog.color }}>●</span> {t('programs.objectives')}</h2>
                            <ul className={styles.objectivesList}>
                                {objectives.map((o, i) => (
                                    <li key={i}><span className={styles.checkIcon} style={{ color: prog.color }}>✓</span>{o}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Audience */}
                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>👥</span>
                                <div>
                                    <strong>{t('programs.audience')}</strong>
                                    <p>{audience}</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>📅</span>
                                <div>
                                    <strong>{t('programs.format')}</strong>
                                    <p>{format}</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>🗺️</span>
                                <div>
                                    <strong>{t('programs.how')}</strong>
                                    <p>{how}</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className={styles.benefitsBlock} style={{ background: prog.color + '10', borderColor: prog.color + '30' }}>
                            <h2>{t('programs.benefits')}</h2>
                            <ul className={styles.benefitsList}>
                                {prog.benefits.map((b, i) => (
                                    <li key={i}><span style={{ color: prog.color }}>🎯</span> {b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaBox}>
                        <h3>Intéressé(e) par ce programme ?</h3>
                        <p>Postulez dès aujourd'hui et rejoignez des centaines de jeunes qui transforment leur avenir.</p>
                        <Link href="/join" className="btn btn-primary btn-lg">{t('programs.apply')}</Link>
                        <Link href="/contact" className="btn btn-outline">{t('footer.contact_us')}</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
