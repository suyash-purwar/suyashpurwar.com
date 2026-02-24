import Header from '@/components/base/Header';
import Project from '@/components/ProjectsSection/Project';

import type { ProjectData } from './type';

const projects: ProjectData[] = [
  {
    title: "HackerCode",
    descriptionParagraphs: [
      "HackerCode is a VS Code extension which allows to solve HackerRank challenge from VS Code itself allowing users to leverage the in-built debugger, VCS, extensive snippet support, and customisation.",
      "This project landed me an internship at HackerRank as an SDE Intern."
    ],
    imageSrc: "/project-hackercode.png",
    imageAlt: "HackerCode Project Image",
    links: [
      { label: "Github", href: "https://github.com/suyash-purwar/hackerrank-vscode" },
      { label: "Docs", href: "https://github.com/suyash-purwar/hackerrank-vscode/blob/master/README.md" }
    ]
  },
  {
    title: "Ayra",
    descriptionParagraphs: [
      "Ayra is a natural language language bot that lives in your WhatsApp. It assists parents of college students by offering an accessible and intuitive platform to monitor their child's performance and receive important updates from their institutions. Bot can communicate in English and Hinglish."
    ],
    imageSrc: "/project-ayra.png",
    imageAlt: "Ayra Project Image",
    links: [
      { label: "Github", href: "https://github.com/suyash-purwar/ayra" },
      { label: "Docs", href: "https://github.com/suyash-purwar/ayra/blob/master/README.md" }
    ]
  }
]

export default function ProjectsSection() {
  return (
    <section className="pt-20 pt-30" >
      <div className="mb-8 md:mb-25">
        <Header title="Things I've built" />
      </div>

      {projects.map((project, index) => (
        <div key={index} className="mb-10 md:mb-12">
          <Project
            title={project.title}
            descriptionParagraphs={project.descriptionParagraphs}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            links={project.links}
          />
        </div>
      ))}

    </section>
  )
}