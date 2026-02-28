import type { ComponentType } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

export type ArticleFrontmatter = {
  title?: string
  description?: string
  date?: string
  [key: string]: unknown
}

export type ArticleSummary = {
  slug: string
} & ArticleFrontmatter

export type ArticleModule = {
  default: ComponentType;
  frontmatter?: ArticleFrontmatter;
};

/**
 * Returns all articles with frontmatter only (no MDX compilation).
 * Sorted by date descending when present.
 */
export function getArticles(): ArticleSummary[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return []
  }

  const entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
  const files = entries.filter(
    (entry) => entry.isFile() && /\.(md|mdx)$/.test(entry.name)
  )

  const articles: ArticleSummary[] = files.map((entry) => {
    const slug = entry.name.replace(/\.(md|mdx)$/, '')
    const filePath = path.join(ARTICLES_DIR, entry.name)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)
    return { slug, ...(data as ArticleFrontmatter) }
  })

  articles.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

  return articles
}

export async function getArticleModule(slug: string): Promise<ArticleModule> {
  const mod = await import(`../../content/articles/${slug}.mdx`);
  return mod as ArticleModule;
}

