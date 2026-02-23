'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

const PACKAGES = [
    {
        name: 'Bronze',
        price: '500 000 FCFA/an',
        color: '#cd7f32',
        benefits: ['Logo sur le site web', 'Mention dans les newsletters', '1 affichage lors des événements', 'Rapport annuel d\'impact'],
    },
    {
        name: 'Silver',
        price: '1 500 000 FCFA/an',
        color: '#a0a0a0',
        benefits: ['Tout Bronze +', 'Booth lors du Forum annuel', '2 publications réseaux sociaux/mois', 'Co-branding sur 2 programmes', 'Invitation aux séances de networking VIP'],
    },
    {
        name: 'Gold',
        price: '3 000 000 FCFA/an',
        color: '#FFD700',
        highlighted: true,
        benefits: ['Tout Silver +', 'Logo premium sur tous supports', 'Sponsoring d\'un programme complet', '4 publications réseaux sociaux/mois', 'Tribune lors du Forum', 'Accès base de données talents (anonymisée)', 'Rapport trimestriel personnalisé'],
    },
    {
        name: 'Stratégique',
        price: '5 000 000+ FCFA/an',
        color: '#0E5949',
        benefits: ['Tout Gold +', 'Co-création de programmes', 'Siège au Comité Consultatif', 'Accès aux événements exclusifs', 'Gestion d\'un prix spécial à votre nom', 'Communication personnalisée', 'Impact reporting avancé'],
    },
]

const COLLAB = [
    { icon: '🎓', title: 'Cofinancement de formations', desc: 'Sponsorisez des modules de formation dans vos domaines d\'expertise.' },
    { icon: '💼', title: 'Offres d\'emploi et de stage', desc: 'Accédez en priorité aux talents formés par YouthConnekt.' },
    { icon: '🏆', title: 'Prix et concours', desc: 'Créez votre prix thématique lors de nos événements majeurs.' },
    { icon: '🌐', title: 'Visibilité digitale', desc: 'Touchez 5000+ jeunes via notre plateforme et réseaux.' },
]

export default function PartnersPage() {
    const { t } = useLanguage()
    const [formSent, setFormSent] = useState(false)

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.partners')}</span></div>
                    <h1>{t('partners.title')}</h1>
                    <p>{t('partners.subtitle')}</p>
                </div>
            </div>

            {/* Value Proposition */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('partners.value_title')}</h2>
                    </div>
                    <div className="grid-4">
                        {[
                            { icon: '👥', title: '5 000+ jeunes', desc: 'Accédez à un réseau de jeunes talenteux et motivés.' },
                            { icon: '🎯', title: 'Impact mesurable', desc: 'Rapport d\'impact détaillé sur vos investissements.' },
                            { icon: '🌍', title: 'Visibilité nationale', desc: 'Présence dans toutes les régions du Tchad.' },
                            { icon: '🤝', title: 'Valeurs partagées', desc: 'Construisez votre image de marque responsable.' },
                        ].map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{v.icon}</span>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('partners.collab_title')}</h2>
                    </div>
                    <div className="grid-2">
                        {COLLAB.map((c, i) => (
                            <div key={i} className={styles.collabCard}>
                                <span className={styles.collabIcon}>{c.icon}</span>
                                <div>
                                    <h3>{c.title}</h3>
                                    <p>{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('partners.formulas_title')}</h2>
                    </div>
                    <div className="grid-4">
                        {PACKAGES.map((pkg, i) => (
                            <div key={i} className={`${styles.pkgCard} ${pkg.highlighted ? styles.pkgHighlighted : ''}`}
                                style={{ borderTopColor: pkg.color }}>
                                {pkg.highlighted && <div className={styles.pkgBadge}>✨ Recommandé</div>}
                                <h3 style={{ color: pkg.color }}>{pkg.name}</h3>
                                <div className={styles.pkgPrice}>{pkg.price}</div>
                                <ul className={styles.pkgList}>
                                    {pkg.benefits.map((b, j) => (
                                        <li key={j}><span style={{ color: pkg.color }}>✓</span>{b}</li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => document.getElementById('partner-form').scrollIntoView({ behavior: 'smooth' })}
                                    className="btn btn-outline"
                                    style={{ borderColor: pkg.color, color: pkg.color }}
                                >
                                    Choisir {pkg.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Form */}
            <section className="section bg-gray" id="partner-form">
                <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('partners.form_title')}</h2>
                    </div>
                    {formSent ? (
                        <div className="alert alert-success">Merci pour votre intérêt ! Notre équipe vous contactera dans les 48h.</div>
                    ) : (
                        <form onSubmit={e => { e.preventDefault(); setFormSent(true) }} className={styles.partnerForm}>
                            <div className="grid-2">
                                <div className="form-group">
                                    <label>Organisation *</label>
                                    <input type="text" className="form-control" required placeholder="Nom de votre organisation" />
                                </div>
                                <div className="form-group">
                                    <label>Secteur *</label>
                                    <select className="form-control" required>
                                        <option value="">Choisir...</option>
                                        <option>Gouvernement</option>
                                        <option>Organisations internationales</option>
                                        <option>Secteur privé / Entreprises</option>
                                        <option>ONG / Société civile</option>
                                        <option>Médias</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Contact (Nom & Prénom) *</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Poste / Fonction *</label>
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
                            </div>
                            <div className="form-group">
                                <label>Formule souhaitée *</label>
                                <select className="form-control" required>
                                    <option value="">Choisir...</option>
                                    {PACKAGES.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
                                    <option value="custom">Formule personnalisée</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Axes de collaboration souhaités</label>
                                <textarea className="form-control" placeholder="Décrivez vos objectifs et centers d'intérêt..." rows={4}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">{t('common.submit')} →</button>
                        </form>
                    )}
                </div>
            </section>
        </>
    )
}
