import Link from "next/link";

import type { LinkData } from '@/types/index.type';

type SocialLinksProps = {
  socialLinks: LinkData[]
}

function Dot() {
  return (
    <span
      className="mx-2 h-1 w-1 shrink-0 rounded-full bg-primary md:mx-4"
      aria-hidden
    />
  );
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap items-center font-light italic text-gray-600 sm:text-base md:mt-4">
      {socialLinks.map((item, i) => (
        <li key={item.label} className="flex items-center">
          {i > 0 && <Dot />}
          <Link
            href={item.href}
            className="lowercase no-underline hover:text-primary focus:text-primary focus:outline-none"
            target="_blank"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
