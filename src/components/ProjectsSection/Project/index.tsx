import Image from "next/image";

import type { ProjectData as ProjectProps } from "../type";
import ProjectLinks from "./ProjectLinks";

export default function Project({ title, descriptionParagraphs, imageSrc, imageAlt, links }: ProjectProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-8">
      <div className="order-2 color-grey md:order-1 md:col-span-2">
        <h6 className="mb-2 font-semibold text-lg md:mb-4">{title}</h6>

        {descriptionParagraphs.map((description, index) => (
          <p className="mb-2" key={index}>{description}</p>
        ))}

        <div className="mt-3">
          <ProjectLinks projectLinks={links} />
        </div>
      </div>
      <div className="order-1 relative w-full aspect-video md:order-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}