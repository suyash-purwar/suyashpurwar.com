import Link from "next/link"

import Navigation from "@/components/base/Navigation"
import Footer from "@/components/base/Footer"
import { getArticles } from "@/lib/articles"

export default async function ArticlesPage() {
  const articles = getArticles()

  return (
    <>
      <Navigation segment="articles" segmentLink="/articles" />

      <main className="mx-auto flex flex-col gap-6 py-6">
        <section>
          {articles.length === 0 ? (
            <p className="text-neutral-600">
              No articles yet. Add an MDX file under{" "}
              <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs">
                content/articles
              </code>{" "}
              to get started.
            </p>
          ) : (
            <ul className="divide-y divide-neutral-200">
              {articles.map((article) => (
                <li key={article.slug} className="py-4">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group block"
                  >
                    <h2 className="text-base font-medium tracking-tight group-hover:text-black">
                      {article.title ?? article.slug}
                    </h2>
                    {(article.description || article.date) && (
                      <p className="mt-1 text-sm text-neutral-600">
                        {article.description}
                        {article.description && article.date && " · "}
                        {article.date && (
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString(
                              "en-IN",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </time>
                        )}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
