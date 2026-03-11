import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WebProjects from "./components/WebProjects";
import GraphicDesigns from "./components/GraphicDesigns";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const revealSelectors = [
      "section",
      ".skill-category",
      ".project-card",
      ".theme-card",
      ".contact-item",
      ".social-icon",
      ".leadership-hover-card",
    ];

    const revealElements = document.querySelectorAll(revealSelectors.join(","));

    revealElements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min((index % 6) * 90, 450)}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            activeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <WebProjects />
      <GraphicDesigns />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
