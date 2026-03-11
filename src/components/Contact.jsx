import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const contactItems = [
    {
      icon: <FiMail size={18} />,
      label: "Email",
      value: "Send me a message",
      href: "mailto:p.mikyllasamantha@gmail.com",
      isLink: true,
    },
    {
      icon: <FiPhone size={18} />,
      label: "Phone",
      value: "+639 91 994 2742",
      href: "tel:+639919942742",
      isLink: true,
    },
    {
      icon: <FiMapPin size={18} />,
      label: "Location",
      value: "Pasig City, Metro Manila, PH",
      isLink: false,
    },
  ];

  const socials = [
    {
      icon: <FiLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mikylla-samantha-palaming-47430b296/",
      desc: "Let's connect professionally",
    },
    {
      icon: <FiGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/mxdtanuki",
      desc: "Technical work and experiments",
    },
  ];

  return (
    <section id="contact" className="contact">
      {/* Background decorations */}
      <div className="contact-bg-decor">
        <span className="contact-dot contact-dot-1">✦</span>
        <span className="contact-dot contact-dot-2">♡</span>
        <span className="contact-dot contact-dot-3">✧</span>
        <span className="contact-dot contact-dot-4">·</span>
        <span className="contact-dot contact-dot-5">✦</span>
        <span className="contact-dot contact-dot-6">♡</span>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-label">✦ let's connect ✦</span>
          <h2>Get In Touch</h2>
          <div className="contact-divider">
            <span className="c-divider-dot">·</span>
            <span className="c-divider-dot">·</span>
            <span className="c-divider-line" />
            <span className="c-divider-star">♡</span>
            <span className="c-divider-line" />
            <span className="c-divider-dot">·</span>
            <span className="c-divider-dot">·</span>
          </div>
          <p className="contact-subtitle">
            I'd love to hear from you! Feel free to reach out for any inquiries,
            collaborations, or just to say hi.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <div className="info-card-accent" />
            <div className="info-card-inner">
              <div className="info-card-header">
                <span className="info-star">✧</span>
                <h3>Reach Me At</h3>
              </div>

              <div className="contact-details">
                {contactItems.map((item) =>
                  item.isLink ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contact-item"
                    >
                      <div className="contact-item-icon">{item.icon}</div>
                      <div className="contact-item-text">
                        <h4>{item.label}</h4>
                        <span>{item.value}</span>
                      </div>
                      <span className="contact-item-arrow">→</span>
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="contact-item contact-item-static"
                    >
                      <div className="contact-item-icon">{item.icon}</div>
                      <div className="contact-item-text">
                        <h4>{item.label}</h4>
                        <span>{item.value}</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="social-card">
            <div className="social-card-accent" />
            <div className="social-card-inner">
              <div className="social-card-header">
                <span className="info-star">✧</span>
                <h3>Find Me Online</h3>
              </div>

              <div className="social-grid">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-card-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-card-icon">{social.icon}</div>
                    <div className="social-card-text">
                      <span className="social-card-name">{social.label}</span>
                      <span className="social-card-desc">{social.desc}</span>
                    </div>
                    <FiExternalLink size={14} className="social-card-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="availability-wrapper">
          <div className="availability-badge">
            <span className="avail-pulse" />
            <span className="avail-text">
              Open to opportunities & collaborations ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
