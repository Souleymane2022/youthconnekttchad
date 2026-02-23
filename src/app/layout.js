import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
    metadataBase: new URL('https://youthconnekt-tchad.td'),
    title: {
        default: 'YouthConnekt Tchad — Autonomisation de la Jeunesse Tchadienne',
        template: '%s | YouthConnekt Tchad'
    },
    description: 'YouthConnekt Tchad est le programme national d\'autonomisation des jeunes. Accédez aux opportunités, formations, bourses et programmes d\'entrepreneuriat.',
    keywords: ['Tchad', 'jeunesse', 'opportunités', 'bourses', 'entrepreneuriat', 'formation', 'emploi', 'YouthConnekt'],
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://youthconnekt-tchad.td',
        siteName: 'YouthConnekt Tchad',
        title: 'YouthConnekt Tchad — Connecter la jeunesse aux opportunités',
        description: 'Programme national d\'autonomisation des jeunes tchadiens. Bourses, formations, entrepreneuriat et bien plus.',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YouthConnekt Tchad',
        description: 'Programme national d\'autonomisation des jeunes tchadiens.'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr" dir="ltr" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.variable}>
                <LanguageProvider>
                    <Header />
                    <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
