'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import { opportunities } from '@/data/opportunities'
import styles from './page.module.css'

const CATEGORIES = ['all', 'bourse', 'formation', 'concours', 'emploi', 'financement']
const catLabels = { all: 'Toutes', bourse: 'Bourse', formation: 'Formation', concours: 'Concours', emploi: 'Emploi', financement: 'Financement' }
const catBadge = { bourse: 'badge-bourse', formation: 'badge-formation', concours: 'badge-concours', emploi: 'badge-emploi', financement: 'badge-financement' }

export default function OpportunitiesPage() {
    const { t, lang } = useLanguage()
    const [catFilter, setCatFilter] = useState('all')
    const [statusFilter, setStatusFilter] = useState('all')
    const [search, setSearch] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [formSent, setFormSent] = useState(false)

    const filtered = opportunities.filter(o => {
        const matchCat = catFilter === 'all' || o.category === catFilter
        const matchStatus = statusFilter === 'all' || o.status === statusFilter
        const title = lang === 'ar' ? o.title_ar : lang === 'en' ? o.title_en : o.title
        const matchSearch = !search || title.toLowerCase().includes(search.toLowerCase()) ||
            o.organization.toLowerCase().includes(search.toLowerCase())
        return matchCat && matchStatus && matchSearch
    })

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.opportunities')}</span></div>
                    <h1>{t('opportunities.title')}</h1>
                    <p>{t('opportunities.subtitle')}</p>
                </div>
            </div>

            <section className="section bg-gray">
                <div className="container">
                    {/* Search + Filters */}
                    <div className={styles.searchRow}>
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={t('opportunities.search')}
                            className={`form-control ${styles.searchInput}`}
                        />
                        <select className={`form-control ${styles.filterSelect}`} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                            <option value="all">{t('opportunities.all')}</option>
                            <option value="open">{t('opportunities.open')}</option>
                            <option value="closed">{t('opportunities.closed')}</option>
                        </select>
                    </div>

                    {/* Category Tabs */}
                    <div className={styles.catTabs}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCatFilter(cat)}
                                className={`${styles.catTab} ${catFilter === cat ? styles.catTabActive : ''}`}
                            >
                                {catLabels[cat]}
                            </button>
                        ))}
                    </div>

                    {/* Results */}
                    <div className={styles.resultsCount}>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</div>

                    {filtered.length === 0 ? (
                        <div className={styles.noResults}>{t('common.no_results')}</div>
                    ) : (
                        <div className="grid-3">
                            {filtered.map(opp => {
                                const title = lang === 'ar' ? opp.title_ar : lang === 'en' ? opp.title_en : opp.title
                                return (
                                    <Link href={`/opportunities/${opp.slug}`} key={opp.id} className={`card ${styles.oppCard}`}>
                                        <div className={styles.oppTop}>
                                            <span className={`badge ${catBadge[opp.category]}`}>{catLabels[opp.category]}</span>
                                            <span className={`badge ${opp.status === 'open' ? 'badge-open' : 'badge-closed'}`}>
                                                {opp.status === 'open' ? t('opportunities.open') : t('opportunities.closed')}
                                            </span>
                                        </div>
                                        <h3 className={styles.oppTitle}>{title}</h3>
                                        <div className={styles.oppMeta}>
                                            <span>🏢 {opp.organization}</span>
                                            <span>📅 {new Date(opp.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className={styles.oppTags}>
                                            {opp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className={styles.submitTrigger}>
                        <button onClick={() => setShowForm(!showForm)} className="btn btn-secondary">
                            📤 {t('opportunities.submit_title')}
                        </button>
                    </div>

                    {/* Submit Form */}
                    {showForm && (
                        <div className={styles.submitForm}>
                            <h3>{t('opportunities.submit_title')}</h3>
                            <p>{t('opportunities.submit_subtitle')}</p>
                            {formSent ? (
                                <div className="alert alert-success">Merci ! Votre opportunité a été soumise et sera examinée sous 48h.</div>
                            ) : (
                                <form onSubmit={e => { e.preventDefault(); setFormSent(true) }}>
                                    <div className="grid-2">
                                        <div className="form-group">
                                            <label>Titre de l'opportunité *</label>
                                            <input type="text" className="form-control" required placeholder="Ex: Bourse d'excellence 2026" />
                                        </div>
                                        <div className="form-group">
                                            <label>Organisation *</label>
                                            <input type="text" className="form-control" required placeholder="Nom de l'organisation" />
                                        </div>
                                        <div className="form-group">
                                            <label>Catégorie *</label>
                                            <select className="form-control" required>
                                                <option value="">Choisir...</option>
                                                {CATEGORIES.slice(1).map(c => <option key={c} value={c}>{catLabels[c]}</option>)}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Date limite *</label>
                                            <input type="date" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Votre email *</label>
                                            <input type="email" className="form-control" required placeholder="votre@email.com" />
                                        </div>
                                        <div className="form-group">
                                            <label>Lien officiel</label>
                                            <input type="url" className="form-control" placeholder="https://..." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Description *</label>
                                        <textarea className="form-control" required placeholder="Décrivez l'opportunité..." rows={4}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{t('common.submit')}</button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
