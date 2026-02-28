import type { Metadata } from "next"
import { notFound } from "next/navigation"

import Navigation from "@/components/base/Navigation"
import Footer from "@/components/base/Footer"
import { getArticleModule } from "@/lib/articles"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const mod = await getArticleModule(slug)
    const { frontmatter } = mod
    return {
      title: frontmatter?.title ?? slug,
      description: frontmatter?.description,
    }
  } catch {
    return { title: "Article" }
  }
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
      <>
        <Navigation segment="articles" segmentLink="/articles" />

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

        <Footer />
      </>
    )
  } catch {
    notFound()
  }
}

