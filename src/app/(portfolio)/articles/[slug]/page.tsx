import { notFound } from "next/navigation"

import ArticleHeader from "@/components/base/ArticleHeader"
import { getArticleModule } from "@/lib/articles"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  try {
    const mod = await getArticleModule(slug)
    const Article = mod.default
    const { frontmatter } = mod

    if (!Article) {
      notFound()
    }

    return (
      <main className="mx-auto flex flex-col gap-8 py-6">
        <article>
          <ArticleHeader {...frontmatter} />

          <div className="max-w-3xl mx-auto text-">
            <Article />
          </div>
        </article>
      </main>
    )
  } catch {
    notFound()
  }
}

