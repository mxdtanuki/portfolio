import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-border-top" />
      <div className="footer-sparkles">
        <span className="sparkle sparkle-1">✦</span>
        <span className="sparkle sparkle-2">·</span>
        <span className="sparkle sparkle-3">✦</span>
        <span className="sparkle sparkle-4">·</span>
        <span className="sparkle sparkle-5">✦</span>
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-quote">
              ˚ ༘ ⋆ If you fail to plan, you plan to fail ⋆ ˚ ༘
            </p>
          </div>

          <div className="footer-center">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/mikylla-samantha-palaming-47430b296/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <span className="social-divider">✧</span>
              <a
                href="https://github.com/mxdtanuki"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <span className="social-divider">✧</span>
              <a
                href="mailto:p.mikyllasamantha@gmail.com"
                className="social-icon"
                title="Email"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-copyright">
              &copy; {currentYear} &middot; Mikylla Samantha ♡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}