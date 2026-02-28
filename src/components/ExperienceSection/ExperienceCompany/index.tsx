import ExperienceLogo from "@/components/ExperienceSection/ExperienceCompany/ExperienceLogo";
import ExperienceRole from "@/components/ExperienceSection/ExperienceCompany/ExperienceRole";

import type { Experience as ExperienceType } from "@/components/ExperienceSection/type";

type ExperienceCompanyProps = ExperienceType;

export default function ExperienceCompany({
  companyName,
  companyMeta,
  logoSrc,
  logoAlt,
  roles,
}: ExperienceCompanyProps) {
  return (
    <div>
      <div className="flex items-start gap-2 md:gap-4">
        <ExperienceLogo companyName={companyName} logoSrc={logoSrc} logoAlt={logoAlt} />

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-secondary md:text-xl">{companyName}</h3>
          <p className="mt-1 text-sm font-light text-gray-600">{companyMeta}</p>

          <div className="mt-4 space-y-4">
            {roles.map((role, idx) => (
              <ExperienceRole key={`${companyName}-${role.title}-${idx}`} {...role} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

