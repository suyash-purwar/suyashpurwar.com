import Header from "@/components/base/Header"
import Article from "@/components/base/Article";

import type { ArticleData } from "./type";

const articles: ArticleData[] = [
  {
    slug: "multithread-tcp-server-thread-pool-go",
    title: "Multi-threaded TCP server with Thread Pool in Go",
    description: "Lorem ipsum dolor sit exercitation ullamco laboris nisi ut aliqui amet, consectetur adipiscing elit, sed do eiusmod tempor incstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageSrc: "multithreaded-tcp-server-thread-pool-go.png",
    imageAlt: "Multi-threaded TCP server with Thread Pool in Go",
    date: "31st Jan, 2026",
    duration: 34
  },
  {
    slug: "multithread-tcp-server-thread-pool-go",
    title: "Multi-threaded TCP server with Thread Pool in Go",
    description: "Lorem ipsum dolor sit amet, adipiscing elit, sed do consectetur adipiscing elit, sed do eiusmod tempor incstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageSrc: "multithreaded-tcp-server-thread-pool-go.png",
    imageAlt: "Multi-threaded TCP server with Thread Pool in Go",
    date: "31st Jan, 2026",
    duration: 34
  },
  {
    slug: "multithread-tcp-server-thread-pool-go",
    title: "Multi-threaded TCP server with Thread Pool in Go",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incstrud exercitation ullamco laboris nisi ut aliquip ex adipiscing elit, sed do ea commodo consequat...",
    imageSrc: "multithreaded-tcp-server-thread-pool-go.png",
    imageAlt: "Multi-threaded TCP server with Thread Pool in Go",
    date: "31st Jan, 2026",
    duration: 34
  }
];

export default function ArticlesSection() {
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