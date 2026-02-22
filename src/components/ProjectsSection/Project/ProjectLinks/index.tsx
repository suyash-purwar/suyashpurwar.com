import Link from "next/link";

import type { LinkData } from '@/types/index.type';

type ProjectLinksProps = {
  projectLinks: LinkData[]
}

function Dot() {
  return (
    <span
      className="mx-3 h-1 w-1 shrink-0 rounded-full bg-secondary"
      aria-hidden
    />
  );
}

export default function ProjectLinks({ projectLinks }: ProjectLinksProps) {
  return (
    <ul className="underline flex flex-wrap items-center text-sm italic font-medium text-secondary tracking-wider">
      {projectLinks.map((item, i) => (
        <li key={item.label} className="flex items-center">
          {i > 0 && <Dot />}
          <Link
            href={item.href}
            className="text-medium no-underline hover:text-primary focus:text-primary focus:outline-none"
            target="_blank"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
