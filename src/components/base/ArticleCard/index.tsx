import Image from 'next/image';
import Link from 'next/link';

import ArticleInfo from '@/components/base/ArticleCard/ArticleInfo';

import type { ArticleSummary as ArticleProps } from '@/lib/articles';

export default function Article({ slug, title, description, banner, bannerAlt, date, duration }: ArticleProps) {

  const getImageUrl = (filename: string) => {
    return `/articles/${filename}`;
  }

  return (
    <Link
      href={`/articles/${slug}`}
      className="group block"
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-8">
        <div className="order-2 color-grey md:order-1 md:col-span-2">
          <h6 className="font-semibold text-lg mb-1">{title}</h6>

          <p>{description}</p>

          <ArticleInfo date={date} duration={duration} />
        </div>
        <div className="order-1 relative w-full aspect-video md:order-2">
          <Image
            src={getImageUrl(banner)}
            alt={bannerAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}