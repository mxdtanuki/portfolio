import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      icon: FiCode,
      title: "Frontend",
      skills: [
        "React",
        "Vue.js",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      icon: FiServer,
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      icon: FiDatabase,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"],
    },
    {
      icon: FiTool,
      title: "Tools & Practices",
      skills: ["Git", "Docker", "CI/CD", "Testing", "Agile", "AWS"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div key={idx} className="skill-category">
                <div className="skill-header">
                  <IconComponent size={32} />
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
