import { FiExternalLink } from "react-icons/fi";
import "./WebProjects.css";

export default function WebProjects() {
  const projects = [
    {
      id: 1,
      title: "✦ Globalinked",
      year: "2025",
      role: "Frontend Developer",
      description:
        "Monitoring system developed for the PUP Office of International Affairs. Built and deployed the live web version, with the original admin-side UI/UX prototype first designed in Figma.",
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
        "A web project inspired by the world of Chef Remy, Chef Colette, and Chef Gusteau: front-end design with interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://mxdtanuki.github.io/la-ratatouille",
      linkLabel: "View Live",
    },
    {
      id: 3,
      title: "✦ 2025 Calendar",
      year: "2024",
      role: "Developer",
      description:
        "A custom-designed interactive 2025 calendar web app built with clean UI and smooth functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://mxdtanuki.github.io/2025-calendar/",
      linkLabel: "View Live",
    },
  ];

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
          {projects.map((project, index) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
