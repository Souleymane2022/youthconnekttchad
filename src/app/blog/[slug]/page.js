'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { getBlogPost } from '@/data/blog'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

export default function BlogArticlePage({ params }) {
    const { t, lang } = useLanguage()
    const post = getBlogPost(params.slug)
    if (!post) return notFound()

    const title = lang === 'en' ? post.title_en : lang === 'ar' ? post.title_ar : post.title
    const content = post.content

    const handleShare = (net) => {
        const url = encodeURIComponent(window.location.href)
        const txt = encodeURIComponent(title)
        const urls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${txt}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            whatsapp: `https://wa.me/?text=${txt}%20${url}`,
        }
        window.open(urls[net], '_blank')
    }

    return (
        <>
            <div className="page-hero" style={{ paddingBottom: '40px' }}>
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <Link href="/">{t('nav.home')}</Link><span>›</span>
                        <Link href="/blog">{t('nav.blog')}</Link><span>›</span>
                        <span>{title}</span>
                    </div>
                    <div className={styles.tags}>
                        {post.tags.map(tag => <span key={tag} className={`badge ${styles.tagBadge}`}>{tag}</span>)}
                    </div>
                    <h1 style={{ maxWidth: '780px', margin: '12px auto' }}>{title}</h1>
                    <div className={styles.articleMeta}>
                        <span>🖊️ {post.author}</span>
                        <span>📅 {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span>⏱ {post.readTime} min de lecture</span>
                    </div>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '740px', margin: '0 auto' }}>
                    {/* Share */}
                    <div className={styles.shareBar}>
                        <span>{t('blog.share')} :</span>
                        {['facebook', 'twitter', 'linkedin', 'whatsapp'].map(net => (
                            <button key={net} onClick={() => handleShare(net)} className={styles.shareBtn}>
                                {net === 'facebook' ? 'f' : net === 'twitter' ? '𝕏' : net === 'linkedin' ? 'in' : '💬'}
                            </button>
                        ))}
                    </div>

                    {/* Article Body */}
                    <div className={styles.articleBody}>
                        {content.split('\n\n').map((para, i) => {
                            if (para.startsWith('**') && para.endsWith('**')) {
                                return <h3 key={i} className={styles.articleH3}>{para.replace(/\*\*/g, '')}</h3>
                            }
                            if (para.match(/^\*\*.+\*\*/)) {
                                const html = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
                            }
                            if (para.startsWith('- ')) {
                                const items = para.split('\n').filter(l => l.startsWith('- '))
                                return <ul key={i} className={styles.articleList}>{items.map((it, j) => <li key={j}>{it.substring(2)}</li>)}</ul>
                            }
                            if (/^\d\./.test(para)) {
                                const items = para.split('\n').filter(Boolean)
                                return <ol key={i} className={styles.articleList}>{items.map((it, j) => <li key={j}>{it.replace(/^\d\.\s/, '').replace(/\*\*(.+?)\*\*/g, '$1')}</li>)}</ol>
                            }
                            return <p key={i}>{para}</p>
                        })}
                    </div>

                    {/* Bottom Share */}
                    <div className={styles.shareBarBottom}>
                        <span>{t('blog.share')} :</span>
                        {['facebook', 'twitter', 'linkedin', 'whatsapp'].map(net => (
                            <button key={net} onClick={() => handleShare(net)} className={styles.shareBtn}>
                                {net === 'facebook' ? 'f' : net === 'twitter' ? '𝕏' : net === 'linkedin' ? 'in' : '💬'}
                            </button>
                        ))}
                    </div>

                    <Link href="/blog" className="btn btn-outline" style={{ marginTop: '32px' }}>← {t('common.back')} Blog</Link>
                </div>
            </section>
        </>
    )
}
