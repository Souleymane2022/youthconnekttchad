'use client'
import Link from 'next/link'
import styles from '../mentions/legal.module.css'

export default function PrivacyPage() {
    return (
        <>
            <div className="page-hero" style={{ padding: '64px 0 48px' }}>
                <div className="container page-hero-content">
                    <h1>Politique de Confidentialité</h1>
                </div>
            </div>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className={styles.legalContent}>
                        <h2>Données collectées</h2>
                        <p>YouthConnekt Tchad collecte les données suivantes :</p>
                        <ul>
                            <li>Données d'identification : nom, prénom, email, téléphone</li>
                            <li>Données professionnelles : région, profil, compétences</li>
                            <li>Données de navigation : cookies, adresse IP (anonymisée)</li>
                        </ul>

                        <h2>Finalité du traitement</h2>
                        <p>Les données sont collectées pour :</p>
                        <ul>
                            <li>La gestion de votre inscription à la plateforme</li>
                            <li>L'envoi de la newsletter et des notifications d'opportunités</li>
                            <li>L'amélioration de nos services et programmes</li>
                        </ul>

                        <h2>Vos droits</h2>
                        <p>Conformément aux lois en vigueur, vous disposez des droits suivants :</p>
                        <ul>
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification et de suppression</li>
                            <li>Droit d'opposition au traitement</li>
                        </ul>
                        <p>Pour exercer ces droits, contactez-nous à : <strong>privacy@youthconnekt-tchad.td</strong></p>

                        <h2>Conservation des données</h2>
                        <p>Vos données sont conservées 3 ans après votre dernière connexion à la plateforme.</p>

                        <h2>Cookies</h2>
                        <p>Le site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie de traçage commercial n'est utilisé.</p>
                    </div>
                    <Link href="/" className="btn btn-outline" style={{ marginTop: '32px' }}>← Retour à l'accueil</Link>
                </div>
            </section>
        </>
    )
}
