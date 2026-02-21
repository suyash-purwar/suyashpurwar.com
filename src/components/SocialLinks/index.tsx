import Link from "next/link";

const links = [
  { label: "linkedin", href: "https://www.linkedin.com/in/suyash-purwar/" },
  { label: "twitter", href: "https://x.com/suyashpurwar06" },
  { label: "github", href: "https://github.com/suyash-purwar/" },
  { label: "email", href: "mailto:suyashpurwar4035@gmail.com" },
] as const;

function Dot() {
  return (
    <span
      className="mx-2 h-1 w-1 shrink-0 rounded-full bg-primary md:mx-4"
      aria-hidden
    />
  );
}

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center font-light text-sm italic text-gray-600 sm:text-base md:mt-4">
      {links.map((item, i) => (
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
