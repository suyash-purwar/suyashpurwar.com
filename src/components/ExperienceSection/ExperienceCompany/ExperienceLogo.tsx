import Image from "next/image";

type ExperienceLogoProps = {
  companyName: string;
  logoSrc: string;
  logoAlt: string;
};

export default function ExperienceLogo({ companyName, logoSrc, logoAlt }: ExperienceLogoProps) {

  return (
    <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-sm bg-white">
      <Image
        src={logoSrc}
        alt={logoAlt ?? `${companyName} logo`}
        fill
        className="object-contain p-1"
        sizes="40px"
      />
    </div>
  );
}

