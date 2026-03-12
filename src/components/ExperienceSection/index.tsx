import Header from "@/components/base/Header";

import ExperienceCompany from "@/components/ExperienceSection/ExperienceCompany";

import type { Experience } from "@/components/ExperienceSection/type";

const experiences: Experience[] = [
  {
    companyName: "HackerRank",
    companyMeta: "2 years 3 months",
    logoSrc: "/experience/hackerrank.png",
    logoAlt: "HackerRank logo",
    roles: [
      {
        title: "SDE II",
        dateRange: "Mar 2026 - Present",
        highlights: [
          "Leading the improvements in Leaked Question Detection and Auto Replacement service.",
        ],
      },
      {
        title: "SDE I",
        dateRange: "Jan 2025 - Feb 2026",
        highlights: [
          "Led the development and integration of a new microservice responsible for assessing code quality in candidate's submissions, which is now a core part of our platform.",
          "Made the Code Quality service resilient by increasing the service throughput 11x by increasing worker concurrency and queue-size based autoscaling.",
          "Setup observability, monitoring, and alerting for the Code Quality service using New Relic, Grafana, Honeybadger, and Opsgenie.",
          "Worked on multiple POCs to optimise for LLM cost, assessment accuracy, and fairness."
        ],
      },
      {
        title: "SDE Intern",
        dateRange: "Jan 2024 - Dec 2024",
        highlights: [
          "Independently setup the foundations for our Code Quality microservice and rolled out the first version of product.",
          "Revamped the flow for sending out assessment invites to the candidates by improving error messaing, and better UI/UX.",
          "Optimised the initial platform load time by prefetching the content from server.",
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
        ],
      },
    ],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-30 2xl:pt-40">
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