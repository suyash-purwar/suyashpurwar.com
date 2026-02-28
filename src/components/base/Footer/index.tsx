import Logo from "@/components/base/Logo";
import SocialLinks from "@/components/base/SocialLinks";

import type { LinkData } from "@/types/index.type";

const links: LinkData[] = [
  { label: "linkedin", href: "https://www.linkedin.com/in/suyash-purwar/" },
  { label: "github", href: "https://github.com/suyash-purwar/" },
  { label: "twitter", href: "https://x.com/suyashpurwar06" },
  { label: "email", href: "mailto:suyashpurwar4035@gmail.com" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t-1 border-gray-200 pt-8 md:py-15">
      <div className="flex flex-col gap-1 justify-between items-center sm:flex-row">
        <Logo />
        <SocialLinks socialLinks={links} />
      </div>

      <p className="text-[10px] text-center text-gray-400 font-medium mt-10 sm:text-left">01001001 00100000 01100001 01110000 01110000 01110010 01100101 01100011 01101001 01100001 01110100 01100101 00100000 01110100 01101000 01100101 00100000 01100101 01100110 01100110 01101111 01110010 01110100</p>
    </footer>
  );
}