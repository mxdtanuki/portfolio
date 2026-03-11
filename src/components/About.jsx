import {
  FiStar,
  FiUsers,
  FiCode,
  FiPenTool,
  FiMonitor,
  FiChevronDown,
} from "react-icons/fi";
import "./About.css";

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
                    {category.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="skill-tag"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <span className="tag-bullet">◈</span>
                        {item}
                      </span>
                    ))}
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
