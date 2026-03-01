import Article from "@/components/base/ArticleCard";
import { getArticles } from "@/lib/articles";

export default async function ArticlesPage() {
  const articles = getArticles();

  const doArticlesExist = articles.length > 0;

  return (
    <main className="mx-auto flex flex-col gap-6 mt-10">
      <section>
        {!doArticlesExist ? (
          <p className="pt-60 text-center text-secondary font-medium text-2xl">
            Coming Soon...
          </p>
        ) : (
          <ul className="divide-y divide-neutral-200">
            {articles.map((article) => (
              <li key={article.slug} className="py-4">
                <Article {...article} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
