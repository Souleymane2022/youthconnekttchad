'use client'
import Link from 'next/link'
import styles from '../mentions/legal.module.css'

export default function TermsPage() {
    return (
        <>
            <div className="page-hero" style={{ padding: '64px 0 48px' }}>
                <div className="container page-hero-content">
                    <h1>Conditions d'Utilisation</h1>
                </div>
            </div>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className={styles.legalContent}>
                        <h2>Acceptation des conditions</h2>
                        <p>En utilisant la plateforme YouthConnekt Tchad, vous acceptez les présentes conditions d'utilisation dans leur intégralité.</p>

                        <h2>Accès à la plateforme</h2>
                        <p>La plateforme est accessible gratuitement à tout jeune de 15 à 35 ans de nationalité tchadienne ou résidant au Tchad.</p>

                        <h2>Responsabilités de l'utilisateur</h2>
                        <ul>
                            <li>Fournir des informations exactes et à jour</li>
                            <li>Ne pas utiliser la plateforme à des fins illicites ou contraires à l'éthique</li>
                            <li>Respecter les droits des autres utilisateurs</li>
                            <li>Ne pas diffuser de contenu offensant, discriminatoire ou fautif</li>
                        </ul>

                        <h2>Propriété des contenus</h2>
                        <p>Les contenus publiés par YouthConnekt Tchad (articles, opportunités, événements) sont la propriété de l'organisation. Les utilisateurs peuvent les partager avec mention de la source.</p>

                        <h2>Limitation de responsabilité</h2>
                        <p>YouthConnekt Tchad n'est pas responsable des opportunités tierces publiées sur la plateforme. Il appartient à l'utilisateur de vérifier leur authenticité avant de postuler.</p>

                        <h2>Modification des conditions</h2>
                        <p>YouthConnekt Tchad se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs seront informés par email de tout changement majeur.</p>

                        <h2>Contact</h2>
                        <p>Pour toute question relative à ces conditions : <strong>legal@youthconnekt-tchad.td</strong></p>
                    </div>
                    <Link href="/" className="btn btn-outline" style={{ marginTop: '32px' }}>← Retour à l'accueil</Link>
                </div>
            </section>
        </>
    )
}
