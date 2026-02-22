import type { LinkData } from "@/types/index.type"

export type ProjectData = {
  title: string;
  descriptionParagraphs: string[];
  imageSrc: string;
  imageAlt: string;
  links: LinkData[];
}