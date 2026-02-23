'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import styles from './page.module.css'

const photos = [
    { id: 1, caption: 'Forum YouthConnekt 2025', emoji: '🏛️' },
    { id: 2, caption: 'Cérémonie de remise de prix', emoji: '🏆' },
    { id: 3, caption: 'Hackathon DigitChad', emoji: '💻' },
    { id: 4, caption: 'Atelier entrepreneuriat féminin', emoji: '👩‍💼' },
    { id: 5, caption: 'Formation numérique', emoji: '📱' },
    { id: 6, caption: 'Réseautage post-forum', emoji: '🤝' },
    { id: 7, caption: 'Pitch de startups', emoji: '🚀' },
    { id: 8, caption: 'Mentorat individuel', emoji: '💬' },
]

const videos = [
    { id: 1, title: 'Lancement du YouthConnekt Forum 2025', embedId: 'dQw4w9WgXcQ' },
    { id: 2, title: 'Témoignage: Malam, lauréat du Hackathon', embedId: 'dQw4w9WgXcQ' },
    { id: 3, title: 'Présentation du Programme d\'Incubation', embedId: 'dQw4w9WgXcQ' },
]

const pressReleases = [
    { id: 1, title: 'YouthConnekt Tchad atteint 5000 jeunes accompagnés', date: '2025-12-10', type: 'PDF' },
    { id: 2, title: 'Partenariat stratégique avec l\'Union Européenne', date: '2025-09-15', type: 'PDF' },
    { id: 3, title: 'Résultats du Hackathon DigitChad 2025', date: '2025-04-20', type: 'PDF' },
]

export default function MediaPage() {
    const { t } = useLanguage()

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.media')}</span></div>
                    <h1>{t('media.title')}</h1>
                    <p>{t('media.subtitle')}</p>
                </div>
            </div>

            {/* Photos */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('media.photos')}</h2>
                    </div>
                    <div className={styles.photoGrid}>
                        {photos.map(p => (
                            <div key={p.id} className={styles.photoItem}>
                                <div className={styles.photoInner}>
                                    <span className={styles.photoEmoji}>{p.emoji}</span>
                                </div>
                                <p className={styles.photoCaption}>{p.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('media.videos')}</h2>
                    </div>
                    <div className="grid-3">
                        {videos.map(v => (
                            <div key={v.id} className={styles.videoCard}>
                                <div className={styles.videoThumb}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${v.embedId}`}
                                        title={v.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        className={styles.videoIframe}
                                    />
                                </div>
                                <p className={styles.videoTitle}>{v.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="divider"></div>
                        <h2>{t('media.press')}</h2>
                    </div>
                    <div className={styles.pressList}>
                        {pressReleases.map(pr => (
                            <a key={pr.id} href="#" className={styles.pressItem}>
                                <div className={styles.pressIcon}>📄</div>
                                <div className={styles.pressInfo}>
                                    <strong>{pr.title}</strong>
                                    <span>{new Date(pr.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <span className={styles.pressDownload}>⬇ {pr.type}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="section bg-white">
                <div className="container">
                    <div className={styles.kitBox}>
                        <div>
                            <h2>Kit Média</h2>
                            <p>Logos officiels, charte graphique, visuels et ressources pour les médias et partenaires.</p>
                        </div>
                        <a href="#" className="btn btn-primary btn-lg">⬇ Télécharger le Kit Média</a>
                    </div>
                </div>
            </section>
        </>
    )
}
