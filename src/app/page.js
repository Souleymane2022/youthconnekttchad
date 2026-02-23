'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import { getLatestOpportunities } from '@/data/opportunities'
import { getUpcomingEvents } from '@/data/events'
import { testimonials, partners } from '@/data/misc'
import styles from './page.module.css'

const stats = [
    { value: '5 000+', labelKey: 'stats.youth', icon: '👥' },
    { value: '120+', labelKey: 'stats.trainings', icon: '📚' },
    { value: '45+', labelKey: 'stats.startups', icon: '🚀' },
    { value: '30+', labelKey: 'stats.partners', icon: '🤝' },
]

export default function HomePage() {
    const { t, lang } = useLanguage()
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const latestOpps = getLatestOpportunities(3)
    const upcomingEvents = getUpcomingEvents(3)

    const handleNewsletter = (e) => {
        e.preventDefault()
        if (email) { setSubscribed(true); setEmail('') }
    }

    const programCards = [
        { icon: '🎓', colorClass: 'teal', key: 'programs_section.employability', href: '/programs/formation-competences' },
        { icon: '🚀', colorClass: 'orange', key: 'programs_section.entrepreneurship', href: '/programs/incubation-coaching' },
        { icon: '💡', colorClass: 'green', key: 'programs_section.innovation', href: '/programs/hackathons-innovation' },
        { icon: '🤝', colorClass: 'blue', key: 'programs_section.leadership', href: '/programs/mentorat-reseautage' },
    ]

    const catStyle = { bourse: 'badge-bourse', formation: 'badge-formation', concours: 'badge-concours', emploi: 'badge-emploi', financement: 'badge-financement' }

    return (
        <>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg}></div>
                <div className={styles.heroShape1}></div>
                <div className={styles.heroShape2}></div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={`badge badge-open ${styles.heroBadge}`}>🌍 Programme National</div>
                        <h1 className={`${styles.heroTitle} animate-fadeInUp`}>
                            {lang === 'ar' ? (
                                t('hero.title')
                            ) : (
                                <>Connecter la jeunesse aux <span className={styles.heroAccent}>opportunités</span> et à l'avenir</>
                            )}
                        </h1>
                        <p className={`${styles.heroSubtitle} animate-fadeInUp delay-2`}>{t('hero.subtitle')}</p>
                        <div className={`${styles.heroCtas} animate-fadeInUp delay-3`}>
                            <Link href="/join" className="btn btn-primary btn-lg">{t('hero.cta1')}</Link>
                            <Link href="/opportunities" className="btn btn-outline-white btn-lg">{t('hero.cta2')}</Link>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {stats.map((st, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statIcon}>{st.icon}</span>
                                    <span className={styles.statValue}>{st.value}</span>
                                    <span className={styles.statLabel}>{t(st.labelKey)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="section bg-white">
                <div className="container">
                    <div className={styles.aboutRow}>
                        <div className={styles.aboutVisual}>
                            <div className={styles.aboutCard1}>
                                <span>🌱</span>
                                <p>Programme national dédié à la jeunesse</p>
                            </div>
                            <div className={styles.aboutCard2}>
                                <span>🏆</span>
                                <p>Reconnu par les institutions internationales</p>
                            </div>
                            <div className={styles.aboutBigCard}>
                                <div className={styles.aboutBigInner}>
                                    <span className={styles.aboutBigIcon}>⚡</span>
                                    <h3>Depuis 2018</h3>
                                    <p>au service de la jeunesse tchadienne</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutText}>
                            <div className="divider divider-left"></div>
                            <h2>{t('about_section.title')}</h2>
                            <p className={styles.aboutSubP}>{t('about_section.subtitle')}</p>
                            <ul className={styles.aboutList}>
                                <li>✅ Accès aux bourses et aux formations de qualité</li>
                                <li>✅ Accompagnement entrepreneurial complet</li>
                                <li>✅ Réseau de mentors et de professionnels</li>
                                <li>✅ Présence dans toutes les régions du Tchad</li>
                            </ul>
                            <Link href="/about" className="btn btn-secondary">{t('about_section.link')}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROGRAMS ===== */}
            <section className={`section ${styles.programsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('programs_section.title')}</h2>
                        <p>{t('programs_section.subtitle')}</p>
                    </div>
                    <div className="grid-4">
                        {programCards.map((prog, i) => {
                            const titleKey = `${prog.key}.title`
                            const descKey = `${prog.key}.desc`
                            return (
                                <Link href={prog.href} key={i} className={`card ${styles.programCard} ${styles[`prog${prog.colorClass}`]}`}>
                                    <div className={styles.programIcon}>{prog.icon}</div>
                                    <h3>{t(titleKey)}</h3>
                                    <p>{t(descKey)}</p>
                                    <span className={styles.programArrow}>→</span>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.centerBtn}>
                        <Link href="/programs" className="btn btn-outline">{t('common.see_all')}</Link>
                    </div>
                </div>
            </section>

            {/* ===== OPPORTUNITIES ===== */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('opportunities_section.title')}</h2>
                        <p>{t('opportunities_section.subtitle')}</p>
                    </div>
                    <div className="grid-3">
                        {latestOpps.map(opp => (
                            <Link href={`/opportunities/${opp.slug}`} key={opp.id} className={`card ${styles.oppCard}`}>
                                <div className={styles.oppCardTop}>
                                    <span className={`badge ${catStyle[opp.category] || 'badge-bourse'}`}>
                                        {opp.category}
                                    </span>
                                    <span className={`badge ${opp.status === 'open' ? 'badge-open' : 'badge-closed'}`}>
                                        {opp.status === 'open' ? t('opportunities.open') : t('opportunities.closed')}
                                    </span>
                                </div>
                                <h3 className={styles.oppTitle}>{lang === 'ar' ? opp.title_ar : lang === 'en' ? opp.title_en : opp.title}</h3>
                                <p className={styles.oppOrg}>🏢 {opp.organization}</p>
                                <p className={styles.oppDeadline}>📅 {new Date(opp.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.centerBtn}>
                        <Link href="/opportunities" className="btn btn-secondary">{t('opportunities_section.view_all')}</Link>
                    </div>
                </div>
            </section>

            {/* ===== EVENTS ===== */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('events_section.title')}</h2>
                        <p>{t('events_section.subtitle')}</p>
                    </div>
                    <div className="grid-3">
                        {upcomingEvents.map(ev => (
                            <Link href={`/events/${ev.slug}`} key={ev.id} className={`card ${styles.eventCard}`}>
                                <div className={styles.eventDate}>
                                    <span className={styles.eventDay}>{new Date(ev.date).getDate()}</span>
                                    <span className={styles.eventMonth}>{new Date(ev.date).toLocaleDateString('fr-FR', { month: 'short' })}</span>
                                </div>
                                <div className={styles.eventInfo}>
                                    <span className={`badge badge-open`}>{ev.type}</span>
                                    <h3>{lang === 'ar' ? ev.title_ar : lang === 'en' ? ev.title_en : ev.title}</h3>
                                    <p>📍 {ev.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.centerBtn}>
                        <Link href="/events" className="btn btn-outline">{t('events_section.view_all')}</Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className={`section ${styles.testimonialsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2 style={{ color: 'var(--white)' }}>{t('testimonials_section.title')}</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t('testimonials_section.subtitle')}</p>
                    </div>
                    <div className="grid-3">
                        {testimonials.map(test => (
                            <div key={test.id} className={styles.testCard}>
                                <div className={styles.testStars}>{'⭐'.repeat(test.stars)}</div>
                                <p className={styles.testText}>&ldquo;{lang === 'ar' ? test.text_ar : lang === 'en' ? test.text_en : test.text}&rdquo;</p>
                                <div className={styles.testAuthor}>
                                    <div className={styles.testAvatar}>{test.name.charAt(0)}</div>
                                    <div>
                                        <strong>{test.name}</strong>
                                        <span>{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PARTNERS ===== */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('partners_section.title')}</h2>
                        <p>{t('partners_section.subtitle')}</p>
                    </div>
                    <div className={styles.partnersGrid}>
                        {partners.map(p => (
                            <div key={p.id} className={styles.partnerItem}>
                                <span>{p.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.centerBtn}>
                        <Link href="/partners" className="btn btn-outline">Devenir Partenaire</Link>
                    </div>
                </div>
            </section>

            {/* ===== NEWSLETTER ===== */}
            <section className={styles.newsletterSection}>
                <div className="container">
                    <div className={styles.newsletterBox}>
                        <div className={styles.nlLeft}>
                            <h2>{t('newsletter_section.title')}</h2>
                            <p>{t('newsletter_section.subtitle')}</p>
                        </div>
                        <div className={styles.nlRight}>
                            {subscribed ? (
                                <div className="alert alert-success">{t('newsletter_section.success')}</div>
                            ) : (
                                <form onSubmit={handleNewsletter} className={styles.nlForm}>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder={t('newsletter_section.placeholder')}
                                        required
                                        className={styles.nlInput}
                                    />
                                    <button type="submit" className="btn btn-primary">{t('newsletter_section.button')}</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
