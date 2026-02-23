'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import { teamMembers } from '@/data/misc'
import styles from './page.module.css'

const timeline = [
    { year: '2018', fr: 'Lancement de YouthConnekt Tchad lors du premier Forum National de la Jeunesse', en: 'Launch of YouthConnekt Chad at the first National Youth Forum' },
    { year: '2019', fr: 'Déploiement des premiers programmes de formation dans 5 régions', en: 'Deployment of first training programs in 5 regions' },
    { year: '2020', fr: 'Adaptation des programmes en ligne pendant la pandémie — 1000 jeunes formés en digital', en: 'Online program adaptation during the pandemic — 1,000 youth trained digitally' },
    { year: '2022', fr: 'Lancement du programme d\'incubation startups — 20 startups sélectionnées', en: 'Launch of startup incubation program — 20 startups selected' },
    { year: '2024', fr: 'Première édition du Hackathon DigitChad — 300 participants', en: 'First DigitChad Hackathon — 300 participants' },
    { year: '2025', fr: 'YouthConnekt atteint 5000+ jeunes accompagnés — expansion régionale', en: 'YouthConnekt reaches 5000+ youth supported — regional expansion' },
]

const faqs = [
    { q: 'faq1_q', a: 'faq1_a' },
    { q: 'faq2_q', a: 'faq2_a' },
    { q: 'faq3_q', a: 'faq3_a' },
    { q: 'faq4_q', a: 'faq4_a' },
]

const values = [
    { icon: '🌍', key1: 'val1_title', key2: 'val1_desc' },
    { icon: '🏆', key1: 'val2_title', key2: 'val2_desc' },
    { icon: '⚡', key1: 'val3_title', key2: 'val3_desc' },
    { icon: '🤝', key1: 'val4_title', key2: 'val4_desc' },
]

export default function AboutPage() {
    const { t, lang } = useLanguage()
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.about')}</span></div>
                    <h1>{t('about.title')}</h1>
                    <p>{t('about_section.subtitle')}</p>
                </div>
            </div>

            {/* Mission / Vision */}
            <section className="section bg-white">
                <div className="container">
                    <div className={styles.mvGrid}>
                        <div className={styles.mvCard}>
                            <div className={styles.mvIcon}>🎯</div>
                            <h3>{t('about.mission_title')}</h3>
                            <p>{t('about.mission_text')}</p>
                        </div>
                        <div className={styles.mvCard}>
                            <div className={styles.mvIcon}>🌟</div>
                            <h3>{t('about.vision_title')}</h3>
                            <p>{t('about.vision_text')}</p>
                        </div>
                    </div>

                    {/* Objectives */}
                    <div className={styles.objectives}>
                        <h2 className="text-center" style={{ marginBottom: '32px' }}>{t('about.objectives_title')}</h2>
                        <div className="grid-2">
                            {['obj1', 'obj2', 'obj3', 'obj4'].map((k, i) => (
                                <div key={k} className={styles.objItem}>
                                    <span className={styles.objNum}>0{i + 1}</span>
                                    <p>{t(`about.${k}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('about.values_title')}</h2>
                    </div>
                    <div className="grid-4">
                        {values.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{v.icon}</span>
                                <h3>{t(`about.${v.key1}`)}</h3>
                                <p>{t(`about.${v.key2}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('about.timeline_title')}</h2>
                    </div>
                    <div className={styles.timeline}>
                        {timeline.map((item, i) => (
                            <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.tlLeft : styles.tlRight}`}>
                                <div className={styles.tlDot}></div>
                                <div className={styles.tlCard}>
                                    <span className={styles.tlYear}>{item.year}</span>
                                    <p>{lang === 'en' ? item.en : item.fr}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('about.team_title')}</h2>
                    </div>
                    <div className="grid-3">
                        {teamMembers.map(m => (
                            <div key={m.id} className={styles.teamCard}>
                                {m.avatar ? (
                                    <div className={styles.teamAvatar} style={{ backgroundImage: `url('${m.avatar}')`, backgroundSize: 'cover', backgroundPosition: 'top center', borderRadius: '50%' }}></div>
                                ) : (
                                    <div className={styles.teamAvatar}>{m.name.charAt(1)}</div>
                                )}
                                <h3>{m.name}</h3>
                                <p className={styles.teamRole}>{lang === 'ar' && m.role_ar ? m.role_ar : lang === 'en' && m.role_en ? m.role_en : m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('about.faq_title')}</h2>
                    </div>
                    <div className={styles.faqList}>
                        {faqs.map((faq, i) => (
                            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {t(`about.${faq.q}`)}
                                    <span className={styles.faqArrow}>{openFaq === i ? '−' : '+'}</span>
                                </button>
                                {openFaq === i && <div className={styles.faqA}><p>{t(`about.${faq.a}`)}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'var(--primary)', padding: '64px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Prêt(e) à rejoindre l'aventure ?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>Rejoignez des milliers de jeunes tchadiens qui construisent leur avenir.</p>
                    <Link href="/join" className="btn btn-primary btn-lg">Rejoindre la communauté</Link>
                </div>
            </section>
        </>
    )
}
