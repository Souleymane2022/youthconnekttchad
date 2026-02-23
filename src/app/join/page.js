'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

const REGIONS = ['N\'Djamena', 'Abéché', 'Moundou', 'Sarh', 'Am Timan', 'Bol', 'Mongo', 'Doba', 'Bongor']
const PROFILES = ['profile_student', 'profile_job', 'profile_entrepreneur']

export default function JoinPage() {
    const { t } = useLanguage()
    const [sent, setSent] = useState(false)
    const [skills, setSkills] = useState('')
    const [interests, setInterests] = useState([])

    const INTEREST_LIST = ['Tech & Numérique', 'Entrepreneuriat', 'Agriculture', 'Santé', 'Éducation', 'Arts & Culture', 'Environnement', 'Sport', 'Finance', 'Leadership']

    const toggleInterest = (item) => {
        setInterests(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
    }

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.join')}</span></div>
                    <h1>{t('join.title')}</h1>
                    <p>{t('join.subtitle')}</p>
                </div>
            </div>

            {/* Stats strip */}
            <div className={styles.statsStrip}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {[{ v: '5 000+', l: 'Membres' }, { v: '50+', l: 'Régions couvertes' }, { v: '100+', l: 'Mentors disponibles' }, { v: 'Gratuit', l: 'Accès total' }].map((s, i) => (
                            <div key={i} className={styles.statItem}>
                                <span className={styles.statV}>{s.v}</span>
                                <span className={styles.statL}>{s.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="section bg-gray">
                <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
                    {sent ? (
                        <div className={styles.successBox}>
                            <div className={styles.successIcon}>🎉</div>
                            <h2>{t('join.success')}</h2>
                            <p>Consultez votre boîte email pour les prochaines étapes. Bienvenue parmi nous !</p>
                            <Link href="/" className="btn btn-primary">Retour à l'accueil</Link>
                        </div>
                    ) : (
                        <div className={styles.formCard}>
                            <h2 style={{ marginBottom: '8px' }}>Formulaire d'inscription</h2>
                            <p style={{ marginBottom: '32px' }}>Tous les champs marqués * sont obligatoires.</p>
                            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label>{t('join.firstname')} *</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('join.lastname')} *</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('join.email')} *</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('join.phone')} *</label>
                                        <input type="tel" className="form-control" required placeholder="+235 xx xx xx xx" />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('join.region')} *</label>
                                        <select className="form-control" required>
                                            <option value="">Choisir...</option>
                                            {REGIONS.map(r => <option key={r}>{r}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>{t('join.profile')} *</label>
                                        <select className="form-control" required>
                                            <option value="">Choisir...</option>
                                            {PROFILES.map(p => <option key={p} value={p}>{t(`join.${p}`)}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>{t('join.skills')}</label>
                                    <textarea
                                        className="form-control"
                                        value={skills}
                                        onChange={e => setSkills(e.target.value)}
                                        placeholder="Ex: Développement web, Gestion de projet, Marketing digital..."
                                        rows={3}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>{t('join.interests')}</label>
                                    <div className={styles.interestGrid}>
                                        {INTEREST_LIST.map(item => (
                                            <button
                                                key={item}
                                                type="button"
                                                onClick={() => toggleInterest(item)}
                                                className={`${styles.interestBtn} ${interests.includes(item) ? styles.interestActive : ''}`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                        <input type="checkbox" required />
                                        <span>J'accepte la <Link href="/legal/privacy" style={{ color: 'var(--primary)' }}>politique de confidentialité</Link> et les <Link href="/legal/terms" style={{ color: 'var(--primary)' }}>conditions d'utilisation</Link> *</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                    {t('join.submit')} 🚀
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
