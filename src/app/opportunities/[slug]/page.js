'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { getOpportunity } from '@/data/opportunities'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

export default function OpportunityDetail({ params }) {
    const { t, lang } = useLanguage()
    const opp = getOpportunity(params.slug)
    if (!opp) return notFound()

    const title = lang === 'ar' ? opp.title_ar : lang === 'en' ? opp.title_en : opp.title
    const summary = lang === 'ar' ? opp.summary_ar : lang === 'en' ? opp.summary_en : opp.summary
    const catBadge = { bourse: 'badge-bourse', formation: 'badge-formation', concours: 'badge-concours', emploi: 'badge-emploi', financement: 'badge-financement' }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title, url: window.location.href })
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert('Lien copié !')
        }
    }

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <Link href="/">{t('nav.home')}</Link><span>›</span>
                        <Link href="/opportunities">{t('nav.opportunities')}</Link><span>›</span>
                        <span>{title}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
                        <span className={`badge ${catBadge[opp.category]}`}>{opp.category}</span>
                        <span className={`badge ${opp.status === 'open' ? 'badge-open' : 'badge-closed'}`}>
                            {opp.status === 'open' ? t('opportunities.open') : t('opportunities.closed')}
                        </span>
                    </div>
                    <h1>{title}</h1>
                    <p>🏢 {opp.organization}</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className={styles.detailLayout}>
                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            <div className={styles.block}>
                                <h2>Résumé</h2>
                                <p>{summary}</p>
                            </div>

                            <div className={styles.block}>
                                <h2>Critères d'éligibilité</h2>
                                <ul className={styles.criteriaList}>
                                    {opp.criteria.map((c, i) => (
                                        <li key={i}><span>✓</span>{c}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.block}>
                                <h2>Documents requis</h2>
                                <ul className={styles.docList}>
                                    {opp.documents.map((d, i) => (
                                        <li key={i}><span>📄</span>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className={styles.sidebar}>
                            <div className={styles.sideCard}>
                                <div className={styles.deadlineBox}>
                                    <span className={styles.deadlineLabel}>{t('opportunities.deadline')}</span>
                                    <span className={styles.deadlineDate}>
                                        {new Date(opp.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                </div>
                                {opp.status === 'open' ? (
                                    <a href="#" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.applyBtn}`}>
                                        {t('opportunities.apply_btn')} →
                                    </a>
                                ) : (
                                    <div className="alert alert-info">Cette opportunité est fermée.</div>
                                )}
                                <button onClick={handleShare} className={`btn btn-outline ${styles.shareBtn}`}>
                                    🔗 {t('opportunities.share_btn')}
                                </button>
                            </div>

                            <div className={styles.orgCard}>
                                <span>{opp.organization}</span>
                            </div>

                            <div className={styles.tagsCard}>
                                {opp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
