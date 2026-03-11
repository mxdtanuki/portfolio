import { FiExternalLink, FiGithub, FiFigma } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Globalinked",
      description:
        "A public-facing platform designed and prototyped in Figma — connecting global communities through a clean, intuitive interface.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      year: "2025",
      links: [
        {
          label: "Prototype",
          url: "https://www.figma.com/proto/HuHYYlYiqSXn07MQ22BZrn/globalinked-oia?t=aEK9aCx4iPK4hmNo-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-14331&starting-point-node-id=1%3A8284",
          icon: "figma",
        },
      ],
    },
    {
      id: 2,
      title: "La Ratatouille",
      description:
        "A charming restaurant website bringing the warmth of French cuisine to the web with delightful design and smooth interactions.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      year: "2024",
      links: [
        {
          label: "Live",
          url: "https://mxdtanuki.github.io/la-ratatouille",
          icon: "external",
        },
        {
          label: "Code",
          url: "https://github.com/mxdtanuki/la-ratatouille",
          icon: "github",
        },
      ],
    },
    {
      id: 3,
      title: "2025 Calendar",
      description:
        "A pixel-perfect interactive calendar for 2025, crafted with clean code and a focus on usability and visual appeal.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      year: "2024",
      links: [
        {
          label: "Live",
          url: "https://mxdtanuki.github.io/2025-calendar/",
          icon: "external",
        },
        {
          label: "Code",
          url: "https://github.com/mxdtanuki/2025-calendar",
          icon: "github",
        },
      ],
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "figma":
        return <FiFigma size={14} />;
      case "github":
        return <FiGithub size={14} />;
      case "external":
      default:
        return <FiExternalLink size={14} />;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-year">⌗ {project.year}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pixel-decoration">
          ◆ ◇ ◆ ◇ ◆
        </div>
      </div>
    </section>
  );
}