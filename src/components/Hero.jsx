import "./Hero.css";
import profilePhoto from "../assets/website/IMG_6642 - Copy.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-decorations">
        <span className="deco deco-star deco-1">✦</span>
        <span className="deco deco-star deco-2">★</span>
        <span className="deco deco-star deco-3">✧</span>
        <span className="deco deco-star deco-4">♡</span>
        <span className="deco deco-star deco-5">✦</span>
        <span className="deco deco-dot deco-6"></span>
        <span className="deco deco-dot deco-7"></span>
        <span className="deco deco-dot deco-8"></span>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="photo-wrapper">
              <div className="photo-ring ring-outer"></div>
              <div className="photo-ring ring-inner"></div>
              <img
                src={profilePhoto}
                alt="Mikylla Samantha M. Palaming"
                className="profile-photo"
              />
              <div className="photo-badge">
                <span>✿</span>
              </div>
            </div>
            <div className="photo-caption">~ hello world ~</div>
          </div>

          <div className="hero-right">
            {/* Portfolio tag removed as requested */}

            <h1 className="hero-name">
              <span className="name-line">Mikylla Samantha</span>
              <span className="name-line name-accent">M. Palaming</span>
            </h1>

            <p className="hero-title">
              <span className="title-bracket">&#123;</span>
              Frontend Developer & Graphic Designer
              <span className="title-bracket">&#125;</span>
            </p>

            <div className="hero-divider">
              <span className="divider-star">✦</span>
              <span className="divider-line"></span>
              <span className="divider-star">✦</span>
            </div>

            <p className="hero-description">
              Information Technology student from the Polytechnic University of
              the Philippines with experience in frontend development, UI
              design, and digital content creation.
            </p>

            <div className="hero-focus">
              <span className="focus-item">
                <span className="focus-icon">◈</span>
                responsive web interfaces
              </span>
              <span className="focus-item">
                <span className="focus-icon">◈</span>
                frontend development
              </span>
              <span className="focus-item">
                <span className="focus-icon">◈</span>
                creative digital design
              </span>
            </div>

            <div className="cta-buttons">
              <a href="#web-projects" className="btn btn-primary">
                <span className="btn-text">View Web Projects</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="#graphic-designs" className="btn btn-secondary">
                <span className="btn-text">View Graphic Designs</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint removed as requested */}
    </section>
  );
}
