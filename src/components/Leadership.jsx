import "./Leadership.css";

export default function Leadership() {
  const experiences = [
    {
      id: 1,
      organization: "PUP Global Ambassadors (PUP GLAM)",
      role: "Education & Training Committee Member",
      period: "March 2025",
      responsibilities: [
        "Help organize training initiatives",
        "Assist in educational workshops",
        "Support leadership development programs",
        "Promote global awareness among students",
      ],
    },
    {
      id: 2,
      organization: "AWS Cloud Club PUP",
      role: "Online Community Builder",
      period: "October 2024",
      responsibilities: [
        "Support online community engagement",
        "Promote collaboration among students interested in cloud computing",
        "Share learning resources and event updates",
      ],
    },
  ];

  const memberships = [
    "PUP Microsoft Student Community (2025)",
    "Junior Blockchain Education Consortium of the Philippines (2025)",
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <h2>Leadership & Organizations</h2>

        <div className="leadership-content">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3>{exp.organization}</h3>
              <p className="role">{exp.role}</p>
              <p className="period">{exp.period}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="memberships-section">
          <h3>Memberships</h3>
          <ul className="memberships-list">
            {memberships.map((membership, idx) => (
              <li key={idx}>{membership}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
