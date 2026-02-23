'use client'
import Link from 'next/link'
import styles from './legal.module.css'

export default function MentionsLegales() {
    return (
        <>
            <div className="page-hero" style={{ padding: '64px 0 48px' }}>
                <div className="container page-hero-content">
                    <h1>Mentions Légales</h1>
                </div>
            </div>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className={styles.legalContent}>
                        <h2>Éditeur du site</h2>
                        <p><strong>Nom</strong> : YouthConnekt Tchad<br />
                            <strong>Statut juridique</strong> : [Forme juridique à compléter]<br />
                            <strong>Adresse</strong> : Avenue Charles de Gaulle, N'Djamena, Tchad<br />
                            <strong>Email</strong> : contact@youthconnekt-tchad.td<br />
                            <strong>Téléphone</strong> : +235 66 00 00 00</p>

                        <h2>Directeur de publication</h2>
                        <p>[Nom du Directeur Exécutif], Directeur Exécutif de YouthConnekt Tchad</p>

                        <h2>Hébergement</h2>
                        <p>Le site est hébergé par :<br />
                            <strong>[Nom de l'hébergeur]</strong><br />
                            [Adresse de l'hébergeur]</p>

                        <h2>Propriété intellectuelle</h2>
                        <p>L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété de YouthConnekt Tchad ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>

                        <h2>Responsabilité</h2>
                        <p>YouthConnekt Tchad s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne peut garantir leur exhaustivité. L'organisation se réserve le droit de modifier le contenu à tout moment sans préavis.</p>
                    </div>
                    <Link href="/" className="btn btn-outline" style={{ marginTop: '32px' }}>← Retour à l'accueil</Link>
                </div>
            </section>
        </>
    )
}
