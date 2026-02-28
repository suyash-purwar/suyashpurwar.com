import { notFound } from "next/navigation"

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
          {frontmatter?.title && (
            <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {frontmatter.title}
            </h1>
          )}
          <Article />
        </article>
      </main>
    )
  } catch {
    notFound()
  }
}

