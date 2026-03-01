import Header from "@/components/base/Header";
import Article from "@/components/base/ArticleCard";
import { getArticles } from "@/lib/articles";

export default function ArticlesSection() {
  const articles = getArticles()

  return (
    <section className="pt-15 md:pt-30">
      <div className="mb-8 md:mb-25">
        <Header title="Recent Articles" />
      </div>

      <div className="space-y-6 md:space-y-10">
        {articles.map((article, index) => (
          <div key={article.slug + index}>
            <Article {...article} />
          </div>
        ))}
      </div>
    </section>
  );
}