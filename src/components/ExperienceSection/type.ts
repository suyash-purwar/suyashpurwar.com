export type ExperienceRole = {
  title: string;
  dateRange: string;
  highlights: string[];
};

export type Experience = {
  companyName: string;
  companyMeta: string;
  logoSrc: string;
  logoAlt: string;
  roles: ExperienceRole[];
};

