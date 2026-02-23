'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import { blogPosts } from '@/data/blog'
import styles from './page.module.css'

export default function BlogPage() {
    const { t, lang } = useLanguage()
    const [search, setSearch] = useState('')
    const [activeTag, setActiveTag] = useState(null)

    const allTags = [...new Set(blogPosts.flatMap(p => p.tags))]

    const filtered = blogPosts.filter(p => {
        const title = lang === 'en' ? p.title_en : lang === 'ar' ? p.title_ar : p.title
        const excerpt = lang === 'en' ? p.excerpt_en : p.excerpt
        const matchSearch = !search || title.toLowerCase().includes(search.toLowerCase()) ||
            excerpt.toLowerCase().includes(search.toLowerCase())
        const matchTag = !activeTag || p.tags.includes(activeTag)
        return matchSearch && matchTag
    })

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <div className="breadcrumb"><Link href="/">{t('nav.home')}</Link><span>›</span><span>{t('nav.blog')}</span></div>
                    <h1>{t('blog.title')}</h1>
                    <p>{t('blog.subtitle')}</p>
                </div>
            </div>

            <section className="section bg-gray">
                <div className="container">
                    {/* Search */}
                    <div className={styles.searchRow}>
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={t('blog.search')}
                            className="form-control"
                            style={{ maxWidth: '480px' }}
                        />
                    </div>

                    {/* Tags */}
                    <div className={styles.tagsRow}>
                        <button
                            className={`${styles.tagBtn} ${!activeTag ? styles.tagActive : ''}`}
                            onClick={() => setActiveTag(null)}
                        >Tous</button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                className={`${styles.tagBtn} ${activeTag === tag ? styles.tagActive : ''}`}
                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            >{tag}</button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid-3">
                        {filtered.map(post => {
                            const title = lang === 'en' ? post.title_en : lang === 'ar' ? post.title_ar : post.title
                            const excerpt = lang === 'en' ? post.excerpt_en : post.excerpt
                            return (
                                <Link href={`/blog/${post.slug}`} key={post.id} className={`card ${styles.blogCard}`}>
                                    <div className={styles.blogImg}>
                                        <span className={styles.blogImgEmoji}>✍️</span>
                                    </div>
                                    <div className={styles.blogBody}>
                                        <div className={styles.blogMeta}>
                                            <span className={styles.blogDate}>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            <span className={styles.blogRead}>👁 {post.readTime} {t('blog.read_time')}</span>
                                        </div>
                                        <h3 className={styles.blogTitle}>{title}</h3>
                                        <p className={styles.blogExcerpt}>{excerpt}</p>
                                        <div className={styles.blogTags}>
                                            {post.tags.slice(0, 2).map(tag => <span key={tag} className="tag">{tag}</span>)}
                                        </div>
                                        <span className={styles.readMore}>{t('blog.read_more')} →</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-center" style={{ padding: '60px', color: 'var(--gray-600)' }}>{t('common.no_results')}</p>
                    )}
                </div>
            </section>
        </>
    )
}
