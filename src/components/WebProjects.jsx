import { FiExternalLink, FiFigma, FiLayout } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiVercel } from "react-icons/si";
import { useState } from "react";
import "./WebProjects.css";

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  "React JS": <FaReact />,
  Figma: <FiFigma />,
  Vercel: <SiVercel />,
  "UI/UX": <FiLayout />,
};

export default function WebProjects() {
  const [openDemoId, setOpenDemoId] = useState(null);
  const projects = [
    {
      id: 1,
      title: "✦ Globalinked",
      year: "2025",
      role: "Frontend Developer",
      description:
        "change A monitoring system developed for the PUP Office of International Affairs. Implemented the frontend of the public web portal for a personal demo deployment used for portfolio presentation. Focused on translating designs into responsive React components and maintaining a consistent user experience across views.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX"],
      live: "https://mxdtanuki.github.io/globalinked-html/",
      linkLabel: "View Live",
      prototype:
        "https://www.figma.com/proto/HuHYYlYiqSXn07MQ22BZrn/globalinked-oia?t=j3qhxQHESUMbybfz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=19-2312&starting-point-node-id=1%3A8284",
      prototypeLabel: "View Prototype",
    },
    {
      id: 2,
      title: "✦ La Ratatouille",
      year: "2024",
      role: "Developer",
      description:
        "A restaurant landing page inspired by French cuisine and Pixar’s Ratatouille. Built as a frontend-only project with a single-page layout featuring menu browsing, ordering interface mockups, and contact sections. Focused on creating an elegant, animated UI that reflects a premium restaurant experience while translating a themed concept into a responsive web design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://mxdtanuki.github.io/la-ratatouille",
      linkLabel: "View Live",
    },
    {
      id: 3,
      title: "✦ Calendar App",
      year: "2024",
      role: "Developer",
      description:
        "An interactive calendar web application featuring a fully dynamic calendar view. Built with a clean UI and smooth navigation for browsing dates across different years.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://mxdtanuki.github.io/2025-calendar/",
      linkLabel: "View Live",
    },
    {
      id: 4,
      title: "✦ IMPRIMO",
      year: "2026",
      role: "Full-Stack Developer / UI-UX Designer",
      description:
        "A print-to-door network platform that connects customers and print shops in one system. Designed the full UI/UX system and developed the multi-role web app with dashboards for Customers, Shops, Admin, and Super Admin. Includes order management, payments & receipts, shop operations, and real-time workflow tracking.",
      technologies: [
        "React JS",
        "CSS",
        "JavaScript",
        "UI/UX",
        "Figma",
        "Vercel",
      ],
      live: "https://imprimo-ptdn.vercel.app/",
      linkLabel: "View Live",
      demoLabel: "Demo Logins",
      demoLogins: [
        { role: "Super Admin", creds: "super@imprimo.app / 123456789" },
        { role: "Admin", creds: "admin@imprimo.app / 123456789" },
        { role: "Customer", creds: "customer@imprimo.app / 123456789" },
        { role: "Shop", creds: "shop@imprimo.app / 123456789" },
      ],
    },
  ];

  const sortedProjects = projects.slice().sort((a, b) => {
    const ay = Number(a.year) || 0;
    const by = Number(b.year) || 0;
    if (by !== ay) return by - ay;
    return a.id - b.id;
  });

  return (
    <section id="web-projects" className="web-projects">
      <div className="web-projects__container">
        <div className="web-projects__title-wrapper">
          <span className="web-projects__pixel-star">✧</span>
          <h2 className="web-projects__title">Web Projects</h2>
          <span className="web-projects__pixel-star">✧</span>
        </div>
        <p className="web-projects__subtitle">
          a collection of things i've built & designed ♡
        </p>

        <div className="projects-grid">
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-card__inner">
                {/* Decorative corner dots */}
                <span className="project-card__dot project-card__dot--tl"></span>
                <span className="project-card__dot project-card__dot--tr"></span>
                <span className="project-card__dot project-card__dot--bl"></span>
                <span className="project-card__dot project-card__dot--br"></span>

                <div className="project-header">
                  <h3 className="project-header__title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-role">{project.role}</p>

                <div className="project-divider"></div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {techIcons[tech] && (
                        <span className="tech-badge__icon">
                          {techIcons[tech]}
                        </span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={16} />
                      <span>{project.linkLabel}</span>
                    </a>
                  )}
                  {project.prototype && (
                    <a
                      href={project.prototype}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={16} />
                      <span>{project.prototypeLabel}</span>
                    </a>
                  )}
                  {project.demoLogins && (
                    <button
                      type="button"
                      className="project-link demo-button"
                      onClick={() =>
                        setOpenDemoId(
                          openDemoId === project.id ? null : project.id,
                        )
                      }
                    >
                      <span>{project.demoLabel}</span>
                    </button>
                  )}
                </div>
                {project.demoLogins && (
                  <div
                    className={`demo-panel ${
                      openDemoId === project.id ? "demo-panel--open" : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="demo-panel__inner">
                      <h4 className="demo-panel__title">Demo Logins</h4>
                      <ul className="demo-panel__list">
                        {project.demoLogins.map((d, i) => (
                          <li key={i} className="demo-panel__item">
                            <strong>{d.role}:</strong> {d.creds}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
