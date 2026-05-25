import {
  FiStar,
  FiUsers,
  FiCode,
  FiPenTool,
  FiMonitor,
  FiChevronDown,
  FiFigma,
  FiTerminal,
} from "react-icons/fi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiCanva,
  SiOpenai,
  SiR,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./About.css";

// Custom C language icon
const CIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m19.12 6.42-7.35-4.24a1.74 1.74 0 0 0-1.54 0L2.88 6.42a1.74 1.74 0 0 0-.77 1.34v8.48a1.56 1.56 0 0 0 .23.76 1.7 1.7 0 0 0 .54.58l7.35 4.24a1.74 1.74 0 0 0 1.54 0l7.35-4.24a1.7 1.7 0 0 0 .54-.58 1.56 1.56 0 0 0 .23-.76V7.76a1.56 1.56 0 0 0-.23-.76 1.7 1.7 0 0 0-.54-.58M11 15a3 3 0 0 0 2.57-1.48L16.13 15a5.93 5.93 0 1 1 0-5.93l-2.56 1.48A3 3 0 1 0 11 15" />
  </svg>
);

// Custom Claude AI icon
const ClaudeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 509.64"
    fill="currentColor"
  >
    <path d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z" />
    <path
      fillRule="nonzero"
      clipRule="evenodd"
      fill="white"
      d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"
    />
  </svg>
);

// Custom Picsart icon
const PicsartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.999 0h-.012c-2.21 0-4.3.863-5.888 2.432-.15.148-.428.458-.428.458-.096.11-.188.22-.276.334l-.036.047a8.683 8.683 0 0 0-1.836 5.016v15.41a.32.32 0 0 0 .05.17.304.304 0 0 0 .254.133h2.881a.303.303 0 0 0 .305-.304v-7.843c0-.054.037-.08.053-.087a.1.1 0 0 1 .104.008 8.293 8.293 0 0 0 4.815 1.525c1.32 0 2.547-.305 3.68-.86 2.847-1.392 4.812-4.356 4.812-7.793 0-4.78-3.796-8.645-8.478-8.645zm-.013 13.994c-2.841 0-5.152-2.396-5.152-5.34 0-2.946 2.31-5.342 5.152-5.342 2.841 0 5.152 2.396 5.152 5.341 0 2.945-2.31 5.341-5.152 5.341z" />
  </svg>
);

// Custom PixelLab icon
const PixelLabIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.46 43.5v-39m7.74 39v-39m0 23.4h7.64a11.7 11.7 0 0 0 0-23.4H10.46" />
  </svg>
);

const skillIcons = {
  // Design Software
  Canva: SiCanva,
  Figma: FiFigma,
  Picsart: PicsartIcon,
  PixelLab: PixelLabIcon,
  // Web Development
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  // Programming & Dev Tools
  Python: FaPython,
  C: CIcon,
  R: SiR,
  SQL: FaDatabase,
  Bash: FiTerminal,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": BiLogoVisualStudio,
  // AI & Software Tools
  ChatGPT: SiOpenai,
  "GitHub Copilot": FaGithub,
  "Claude AI": ClaudeIcon,
  "Microsoft 365": FaMicrosoft,
  "Google Workspace": FaGoogle,
};

export default function About() {
  const designSoftware = [
    "Canva",
    "Figma",
    "Superimpose",
    "PixelLab",
    "Phonto",
    "Polarr",
    "Picsart",
  ];

  const webSkills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];
  const programmingAndDevTools = [
    "R",
    "Python",
    "C",
    "SQL",
    "Bash",
    "Git",
    "GitHub",
    "VS Code",
  ];
  const aiAndSoftwareTools = [
    "ChatGPT",
    "GitHub Copilot",
    "Claude AI",
    "Microsoft 365",
    "Google Workspace",
  ];
  // Sort organizations by date (latest first)
  const organizations = [
    {
      name: "PUP Global Ambassadors (PUP GLAM)",
      detail: "Education & Training Committee Member — March 2025",
      date: new Date("2025-03-01"),
    },
    {
      name: "PUP Microsoft Student Community",
      detail: "Member — 2025",
      date: new Date("2025-01-01"),
    },
    {
      name: "Junior Blockchain Education Consortium of the Philippines",
      detail: "Member — 2025",
      date: new Date("2025-01-01"),
    },
    {
      name: "AWS Cloud Club PUP",
      detail: "Online Community Builder — October 2024",
      date: new Date("2024-10-01"),
    },
  ].sort((a, b) => b.date - a.date);

  const skillCategories = [
    {
      title: "Design Software",
      icon: <FiPenTool size={18} />,
      items: designSoftware,
    },
    {
      title: "Web Development",
      icon: <FiCode size={18} />,
      items: webSkills,
    },
    {
      title: "Programming & Dev Tools",
      icon: <FiMonitor size={18} />,
      items: programmingAndDevTools,
    },
    {
      title: "AI & Software Tools",
      icon: <FiStar size={18} />,
      items: aiAndSoftwareTools,
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-grid-overlay"></div>

      <div className="about-bg-decor">
        <span className="bg-dot bg-dot-1">✦</span>
        <span className="bg-dot bg-dot-2">♡</span>
        <span className="bg-dot bg-dot-3">✧</span>
        <span className="bg-dot bg-dot-4">✦</span>
        <span className="bg-dot bg-dot-5">✧</span>
        <span className="bg-dot bg-dot-6">♡</span>
      </div>

      <div className="about-blob about-blob-1"></div>
      <div className="about-blob about-blob-2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">
            <span className="label-star">✦</span>
            get to know me
            <span className="label-star">✦</span>
          </span>
          <h2>
            About <span className="heading-accent">Me</span>
          </h2>
          <div className="section-divider">
            <span className="divider-dot">·</span>
            <span className="divider-dot">·</span>
            <span className="divider-line" />
            <span className="divider-star">✧</span>
            <span className="divider-line" />
            <span className="divider-dot">·</span>
            <span className="divider-dot">·</span>
          </div>
        </div>

        <div className="about-content">
          {/* Bio Card */}
          <div className="bio-card">
            <div className="bio-card-accent" />
            <div className="bio-card-corner bio-corner-tl"></div>
            <div className="bio-card-corner bio-corner-br"></div>
            <div className="bio-card-inner">
              <div className="bio-greeting">
                <span className="greeting-wave">♡</span>
                <span className="greeting-text">Hello there!</span>
                <span className="greeting-line"></span>
              </div>
              <p className="bio-text">
                I am an Information Technology student at the{" "}
                <span className="highlight">
                  Polytechnic University of the Philippines
                </span>{" "}
                with interests in frontend development, graphic design, and
                creative digital experiences.
              </p>
              <p className="bio-text">
                I enjoy building{" "}
                <span className="highlight">responsive web interfaces</span> and
                designing visual content that balances{" "}
                <span className="highlight">functionality and aesthetics</span>.
              </p>
              <div className="bio-tags">
                <span className="bio-tag">☁ creative thinker</span>
                <span className="bio-tag">✎ detail-oriented</span>
                <span className="bio-tag">♡ passionate learner</span>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="leadership-section">
            <div className="leadership-header">
              <span className="leadership-icon-wrapper">
                <FiUsers size={18} className="leadership-icon" />
              </span>
              <h3>Leadership & Organizations</h3>
            </div>

            <div className="leadership-hover-card" tabIndex="0">
              <div className="leadership-card-ribbon" />
              <div className="leadership-card-pattern"></div>
              <p className="leadership-summary">
                <FiStar size={14} className="summary-star" />
                <span>
                  Active member in PUP Global Ambassadors, AWS Cloud Club PUP,
                  PUP Microsoft Student Community, and Junior Blockchain
                  Education Consortium of the Philippines
                </span>
              </p>

              <div className="leadership-hint">
                <FiChevronDown size={14} className="hint-chevron" />
                <span>hover to see details</span>
              </div>

              <div className="leadership-hover-details">
                <div className="details-divider" />
                {organizations.map((org) => (
                  <div key={org.name} className="org-item">
                    <div className="org-info">
                      <span className="org-name">{org.name}</span>
                      <span className="org-detail">{org.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <div className="skills-section-header">
              <span className="section-label">
                <span className="label-star">✦</span>
                what i work with
                <span className="label-star">✦</span>
              </span>
              <h3>
                Skills & <span className="heading-accent">Tools</span>
              </h3>
            </div>

            <div className="skills-grid">
              {skillCategories.map((category, catIdx) => (
                <div
                  key={category.title}
                  className="skill-category"
                  style={{ animationDelay: `${catIdx * 0.1}s` }}
                >
                  <div className="skill-category-number">0{catIdx + 1}</div>
                  <div className="skill-category-header">
                    <span className="skill-icon">{category.icon}</span>
                    <h4>{category.title}</h4>
                  </div>
                  <div className="skill-category-border" />
                  <div className="skill-tags">
                    {category.items.map((item, idx) => {
                      const IconComponent = skillIcons[item];
                      return (
                        <span
                          key={idx}
                          className="skill-tag"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          {IconComponent ? (
                            <span className="skill-tag__icon">
                              <IconComponent />
                            </span>
                          ) : (
                            <span className="tag-bullet">◈</span>
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
