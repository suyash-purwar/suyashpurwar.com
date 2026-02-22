import Image from "next/image";

import type { ProjectData as ProjectProps } from "../type";
import ProjectLinks from "./ProjectLinks";

export default function Project({ title, descriptionParagraphs, imageSrc, imageAlt, links }: ProjectProps) {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <div className="col-span-2 color-grey">
        <h5 className="mb-4 font-medium text-xl">{title}</h5>

        {descriptionParagraphs.map((description, index) => (
          <p className="mb-2" key={index}>{description}</p>
        ))}

        <div className="mt-1">
          <ProjectLinks projectLinks={links} />
        </div>
      </div>
      <div className="relative w-full aspect-video">
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