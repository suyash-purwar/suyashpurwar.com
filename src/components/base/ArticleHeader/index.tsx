import Image from "next/image";

import { ArticleFrontmatter } from "@/lib/articles";
import ArticleInfo from "../ArticleCard/ArticleInfo";

export default function ArticleHeader({ title, duration, date, banner, bannerAlt }: ArticleFrontmatter) {
  const getImageUrl = (filename: string) => {
    return `/articles/${filename}`;
  }

  return (
    <header className="py-15">
      <div className="pb-15">
        <h1 className="text-3xl text-center font-semibold sm:text-4xl">
          {title}
        </h1>
        <div className="flex justify-center">
          <ArticleInfo date={date} duration={duration} />
        </div>
      </div>

      <Image src={getImageUrl(banner)} alt={bannerAlt} width="500" height="500" className="block w-full" />
    </header>
  );
}