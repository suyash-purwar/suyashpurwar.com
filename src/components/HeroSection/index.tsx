import Image from "next/image";

import Highlight from "@/components/base/Highlight";
import SocialLinks from "@/components/base/SocialLinks";

import type { LinkData } from "@/types/index.type";

const links: LinkData[] = [
  { label: "linkedin", href: "https://www.linkedin.com/in/suyash-purwar/" },
  { label: "github", href: "https://github.com/suyash-purwar/" },
  { label: "twitter", href: "https://x.com/suyashpurwar06" },
  { label: "email", href: "mailto:suyashpurwar4035@gmail.com" },
] as const;

export default function Hero() {
  return (
    <section className="flex items-center py-20">
      <div>
        <Image src="/hero/hero.png" width={200} height={200} alt="Portrait of Suyash Purwar" />

        <p className="mt-10 md:text-lg">
          I have a strong interest in <Highlight>low-level systems</Highlight> and enjoy building software in <Highlight>C/C++</Highlight> from the ground up. Currently, I'm developing a library that implements an intrusive linked list, focusing on performance and design fundamentals.
        </p>

        <p className="mt-2 md:text-lg">
          I work as an <Highlight>SDE II (Backend) at HackerRank</Highlight>, where I'm part of the Screen team building recruiter-side experiences.
        </p>

        <p className="mt-2 md:text-lg">
          I've also recently started writing about core software engineering concepts beyond frameworks and tools, approaching problems from first principles and emphasising fundamentals over abstractions.
        </p>

        <div className="mt-4 sm:mt-8">
          <SocialLinks socialLinks={links} />
        </div>
      </div>
    </section >
  );
}