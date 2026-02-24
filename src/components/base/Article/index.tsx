import Image from 'next/image';

import ArticleInfo from '@/components/base/Article/ArticleInfo';

import type { ArticleData as ArticleProps } from '@/components/ArticlesSection/type';


export default function Article({ title, description, imageSrc, imageAlt, date, duration }: ArticleProps) {

  const getImageUrl = (filename: string) => {
    return `/articles/${filename}`;
  }

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-8">
      <div className="order-2 color-grey md:order-1 md:col-span-2">
        <h6 className="font-semibold text-lg mb-1">{title}</h6>

        <p>{description}</p>

        <ArticleInfo date={date} duration={duration} />
      </div>
      <div className="order-1 relative w-full aspect-video md:order-2">
        <Image
          src={getImageUrl(imageSrc)}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}