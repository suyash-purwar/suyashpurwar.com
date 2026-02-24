import Header from "@/components/base/Header";

import ExperienceCompany from "@/components/ExperienceSection/ExperienceCompany";

import type { Experience } from "@/components/ExperienceSection/type";

const experiences: Experience[] = [
  {
    companyName: "HackerRank",
    companyMeta: "Internship • 7 mos",
    logoSrc: "/experience/hackerrank.png",
    logoAlt: "HackerRank logo",
    roles: [
      {
        title: "SDE Intern II",
        dateRange: "July 2024 - Present",
        highlights: [
          "Managed multiple projects and mentored 6 co-interns on new projects.",
          "Scaled HackerDraw to handle a large number of users, added features such as real-time collaboration, user access management etc.",
          "Started new initiatives in the company which laid the foundation of an entirely new 'Labs Team' inside the company",
        ],
      },
      {
        title: "SDE Intern I",
        dateRange: "Jan 2024 - June 2024",
        highlights: [
          "I worked in a team of over eight people to build and provision scalable business infrastructure and customer solutions centered towards ed-tech industry.",
          "I worked on a part of the flutter based mobile app, and on the entire web platform.",
          "I designed & built user referral & user engagement analytic system for both of them to keep track of the watch seconds & position for each user, and derive enriched insights from those.",
        ],
      },
    ],
  },
  {
    companyName: "Pennywise India",
    companyMeta: "Internship • 4 mos",
    logoSrc: "/experience/pennywise.png",
    logoAlt: "Pennywise India logo",
    roles: [
      {
        title: "Backend Developer",
        dateRange: "June 2021 - September 2021",
        highlights: [
          "Implemented backend for the user onboarding flow using MySQL, NodeJS, and AWS services.",
          "Developed a JWT based authentication/authorization system for the backend.",
          "Contributing to the frontend wire-framing for the user onboarding flow.",
          "Integrating third party APIs (Augmont and Paytm) with the backend.",
          "Managing and deploying the application on AWS.",
        ],
      },
    ],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-15 md:pt-30">
      <div className="mb-8 md:mb-25">
        <Header title="Experience" />
      </div>

      <div className="space-y-12 md:space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceCompany key={`${experience.companyName}-${index}`} {...experience} />
        ))}
      </div>
    </section>
  );
}