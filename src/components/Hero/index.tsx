import Image from "next/image";

import Highlight from "@/components/Highlight";

export default function Hero() {
  return (
    <section className="flex items-center mt-10 sm:min-h-screen sm:mt-0">
      <div>
        <Image src="/hero.png" width={200} height={200} alt="Portrait of Suyash Purwar" />

        <p className="mt-10 font-light md:text-lg">
          I have a strong interest in <Highlight>low-level systems</Highlight> and enjoy building software in <Highlight>C/C++</Highlight> from the ground up. Currently, I'm developing a library that implements an intrusive linked list, focusing on performance and design fundamentals.
        </p>

        <p className="mt-2 font-light md:text-lg">
          I work as an <Highlight>SDE II (Backend) at HackerRank</Highlight>, where I'm part of the Screen team building recruiter-side experiences.
        </p>

        <p className="mt-2 font-light md:text-lg">
          I've also recently started writing about core software engineering concepts beyond frameworks and tools, approaching problems from first principles and emphasising fundamentals over abstractions.
        </p>
      </div>
    </section >
  );
}