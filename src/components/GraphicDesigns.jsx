import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FiEye,
  FiX,
  FiImage,
  FiInfo,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./GraphicDesigns.css";

// Import theme GIFs
import proudPurpleGif from "../assets/proud purple.gif";
import darkestNightGif from "../assets/darkest night.gif";
import vermillionHexGif from "../assets/vermillion hex.gif";

// Import Proud Purple images
import pp1 from "../assets/proud purple/1.jpg";
import pp2 from "../assets/proud purple/2.jpg";
import pp3 from "../assets/proud purple/3.png";
import pp4 from "../assets/proud purple/4.jpg";
import pp5 from "../assets/proud purple/5.jpg";
import pp6 from "../assets/proud purple/6.png";
import pp7 from "../assets/proud purple/7.png";
import pp8 from "../assets/proud purple/8.jpg";
import pp9 from "../assets/proud purple/9.jpg";

// Import Darkest Night images
import dn1 from "../assets/darkest night/1.png";
import dn2 from "../assets/darkest night/2.jpg";
import dn3 from "../assets/darkest night/3.png";
import dn4 from "../assets/darkest night/4.png";
import dn5 from "../assets/darkest night/5.png";
import dn6 from "../assets/darkest night/6.jpg";
import dn7 from "../assets/darkest night/7.png";
import dn8 from "../assets/darkest night/8.jpg";
import dn9 from "../assets/darkest night/11.jpg";
import dn10 from "../assets/darkest night/10.jpg";
import dn10b from "../assets/darkest night/tumblr_93026f63a0ad04346a7f9dcffab78643_064729a2_1280.gif";
import dn11 from "../assets/darkest night/9.jpg";
import dn12 from "../assets/darkest night/12.jpg";
import dn13 from "../assets/darkest night/13.jpg";
import dn14 from "../assets/darkest night/14.png";

// Import Vermillion Hex images
import vh1 from "../assets/vermillion hex/1.jpg";
import vh2 from "../assets/vermillion hex/2.jpg";
import vh3 from "../assets/vermillion hex/3.jpg";
import vh4 from "../assets/vermillion hex/4.jpg";
import vh5 from "../assets/vermillion hex/5.jpg";
import vh6 from "../assets/vermillion hex/6.jpg";
import vh7 from "../assets/vermillion hex/7.jpg";
import vh8 from "../assets/vermillion hex/8.jpg";
import vh9 from "../assets/vermillion hex/9.jpg";
import vh10 from "../assets/vermillion hex/10.jpg";
import vh11 from "../assets/vermillion hex/11.jpg";
import vh12 from "../assets/vermillion hex/12.jpg";
import vh15 from "../assets/vermillion hex/13.jpg";
import vh14 from "../assets/vermillion hex/14.png";
import vh13 from "../assets/vermillion hex/15.jpg";
import vh16 from "../assets/vermillion hex/16.jpg";

export default function GraphicDesigns() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showCredits, setShowCredits] = useState(false);
  const savedScrollYRef = useRef(0);
  const isScrollLockedRef = useRef(false);

  const themes = [
    {
      id: 1,
      name: "Proud Purple",
      description:
        "A bold collection featuring rich purple tones, regal vibes, and elegant compositions",
      colorClass: "theme-purple",
      colors: ["#7B2D8E", "#9B59B6", "#D2B4DE", "#F0E6F6"],
      emoji: proudPurpleGif,
      images: [
        { src: pp1, credits: null },
        {
          src: pp2,
          credits: [
            {
              text: "Background by ",
              artist: "六七質",
              link: "https://www.pixiv.net/users/57629",
            },
            {
              text: "Raven Roth's visual by ",
              artist: "InkSilvery",
              link: "https://www.deviantart.com/27smiles",
            },
          ],
        },
        {
          src: pp3,
          credits: [
            {
              text: "Raven's visual by ",
              artist: "w-e-z",
              link: "https://www.deviantart.com/w-e-z",
            },
            {
              text: "Background by ",
              artist: "六七質",
              link: "https://www.pixiv.net/users/57629",
            },
          ],
        },
        { src: pp4, credits: null },
        {
          src: pp5,
          credits: [
            {
              text: "Raven's visual by ",
              artist: "he1lfire",
              link: "https://www.deviantart.com/he1lfire",
            },
            {
              text: "Background by ",
              artist: "六七質",
              link: "https://www.pixiv.net/users/57629",
            },
          ],
        },
        { src: pp6, credits: null },
        { src: pp7, credits: null },
        {
          src: pp8,
          credits: [
            {
              text: '"Be My Goth Valentine", illustrated by ',
              artist: "IrenHorrors",
              link: "https://www.deviantart.com/irenhorrors",
            },
          ],
        },
        {
          src: pp9,
          credits: [
            {
              text: "Raven Roth's visual by ",
              artist: "georgearts",
              link: "https://linktr.ee/Georgetarts",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Darkest Night",
      description:
        "Dark and moody designs with deep reds, smoky greys, and midnight black aesthetics",
      colorClass: "theme-dark",
      colors: ["#1A1A1A", "#8B0000", "#4A4A4A", "#2C2C2C"],
      emoji: darkestNightGif,
      images: [
        {
          src: dn1,
          credits: [
            {
              text: "Art illustrated by ",
              artist: "鬼舞炭",
              link: "https://www.pixiv.net/en/tags/%E9%AC%BC%E8%88%9E%E7%82%AD",
            },
          ],
        },
        { src: dn2, credits: null },
        {
          src: dn3,
          credits: [
            {
              text: "Art illustrated by ",
              artist: "ごーと",
              link: "https://x.com/22karakara_Y",
            },
          ],
        },
        {
          src: dn4,
          credits: [
            {
              text: "Art illustrated by ",
              artist: "hakusetu",
              link: "https://www.pixiv.net/en/users/9224174",
            },
          ],
        },
        {
          src: dn5,
          credits: [
            {
              text: "Art on the right illustrated by ",
              artist: "kuma666",
              link: "https://www.pixiv.net/en/users/2912905",
            },
            {
              text: "Art on the left illustrated by ",
              artist: "kuma666",
              link: "https://www.pixiv.net/en/users/1763823",
            },
          ],
        },
        {
          src: dn6,
          credits: [
            {
              text: "Art on the middle illustrated by ",
              artist: "MERO.I",
              link: "http://twitter.com/kalmiarkgk",
            },
          ],
        },
        {
          src: dn7,
          credits: [
            {
              text: "Art on the middle illustrated by ",
              artist: "ミライ",
              link: "https://www.pixiv.net/en/users/57729093",
            },
            {
              text: "Art on the upper left, bottom left, and bottom middle illustrated by ",
              artist: "ポストロ",
              link: "https://www.pixiv.net/en/users/5373198",
            },
          ],
        },
        {
          src: dn8,
          credits: [
            {
              text: "Art on the right illustrated by ",
              artist: "-YS",
              link: "https://www.pixiv.net/users/2368056",
            },
            {
              text: "Art on the left illustrated by ",
              artist: "PP",
              link: "https://www.pixiv.net/users/49949467",
            },
            {
              text: "BG illustrated by ",
              artist: "Alayna Danner",
              link: "https://www.pixiv.net/users/17806282",
            },
          ],
        },
        { src: dn9, credits: null },
        { src: dn10, credits: null },
        { src: dn10b, credits: null },
        { src: dn11, credits: null },
        { src: dn12, credits: null },
        { src: dn13, credits: null },
        {
          src: dn14,
          credits: [
            {
              text: "Chibi Muzan illustrated by ",
              artist: "やつわたぬき",
              link: "https://x.com/watanuki41A",
            },
            {
              text: "Chibi Hisoka illustrated by ",
              artist: "やつ",
              link: "https://x.com/6161Si",
            },
          ],
        },
      ],
      customLayout: "darkest",
    },
    {
      id: 3,
      name: "Vermillion Hex",
      description:
        "Soft and warm palette blending peachy tones, light reds, and gentle grey accents",
      colorClass: "theme-vermillion",
      colors: ["#E8736C", "#FFDAB9", "#F4978E", "#B8B8B8"],
      emoji: vermillionHexGif,
      images: [
        { src: vh1, credits: null },
        { src: vh2, credits: null },
        { src: vh3, credits: null },
        { src: vh4, credits: null },
        { src: vh5, credits: null },
        { src: vh6, credits: null },
        { src: vh7, credits: null },
        {
          src: vh8,
          credits: [
            {
              text: "Artwork on the left and middle illustrated by ",
              artist: "さくぽん",
              link: "https://www.pixiv.net/users/18083862",
            },
            {
              text: "Artwork on the rightmost side illustrated by ",
              artist: "雨谷 星奈",
              link: "https://www.pixiv.net/users/18083862",
            },
          ],
        },
        { src: vh9, credits: null },
        { src: vh10, credits: null },
        { src: vh11, credits: null },
        { src: vh12, credits: null },
        { src: vh14, credits: null, layout: "wide" },
        { src: vh13, credits: null },
        { src: vh15, credits: null },
        { src: vh16, credits: null },
      ],
      customLayout: "vermillion",
    },
  ];

  const selectedThemeData = themes.find((t) => t.id === selectedTheme);

  const openLightbox = (index) => {
    setLightboxImage(index);
    setShowCredits(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    if (selectedThemeData && selectedThemeData.images.length > 0) {
      const totalImages = selectedThemeData.images.length;
      setShowCredits(false);
      setLightboxImage((prev) => {
        if (direction === "next") {
          return (prev + 1) % totalImages;
        } else {
          return (prev - 1 + totalImages) % totalImages;
        }
      });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxImage === null) return;
    const totalImages = selectedThemeData?.images.length || 0;
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        setShowCredits(false);
        setLightboxImage((prev) => (prev + 1) % totalImages);
      } else if (e.key === "ArrowLeft") {
        setShowCredits(false);
        setLightboxImage((prev) => (prev - 1 + totalImages) % totalImages);
      } else if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxImage, selectedThemeData]);

  // Scroll lock — NO cleanup here so dependency changes don't flash/jump
  useEffect(() => {
    const isModalOpen = selectedTheme !== null || lightboxImage !== null;

    if (isModalOpen && !isScrollLockedRef.current) {
      savedScrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.classList.add("gd-modal-open");
      isScrollLockedRef.current = true;
    } else if (!isModalOpen && isScrollLockedRef.current) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.classList.remove("gd-modal-open");
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, savedScrollYRef.current);
      html.style.scrollBehavior = prev;
      isScrollLockedRef.current = false;
    }
  }, [lightboxImage, selectedTheme]);

  // Separate unmount-only cleanup
  useEffect(() => {
    return () => {
      if (isScrollLockedRef.current) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.classList.remove("gd-modal-open");
        window.scrollTo(0, savedScrollYRef.current);
        isScrollLockedRef.current = false;
      }
    };
  }, []);

  return (
    <>
    <section
      id="graphic-designs"
      className="graphic-designs"
    >
      <div className="gd-grid-overlay"></div>

      <div className="gd-bg-decor">
        <span className="gd-dot gd-dot-1">✦</span>
        <span className="gd-dot gd-dot-2">✧</span>
        <span className="gd-dot gd-dot-3">♡</span>
        <span className="gd-dot gd-dot-4">✦</span>
        <span className="gd-dot gd-dot-5">✧</span>
        <span className="gd-dot gd-dot-6">♡</span>
      </div>

      <div className="gd-blob gd-blob-1"></div>
      <div className="gd-blob gd-blob-2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="gd-header">
          <span className="gd-label">
            <span className="gd-label-star">✦</span>
            creative works
            <span className="gd-label-star">✦</span>
          </span>
          <h2>
            Graphic <span className="gd-heading-accent">Designs</span>
          </h2>
          <div className="gd-divider">
            <span className="gd-divider-dot">·</span>
            <span className="gd-divider-dot">·</span>
            <span className="gd-divider-line" />
            <span className="gd-divider-star">✧</span>
            <span className="gd-divider-line" />
            <span className="gd-divider-dot">·</span>
            <span className="gd-divider-dot">·</span>
          </div>
          <p className="gd-subtitle">
            Explore my creative design work organized by color themes
            <span className="gd-subtitle-heart"> ♡</span>
          </p>
        </div>

        {/* Themes Grid */}
        <div className="themes-grid">
          {themes.map((theme, themeIdx) => (
            <div
              key={theme.id}
              className={`theme-card ${theme.colorClass}`}
              onClick={() => setSelectedTheme(theme.id)}
              style={{ animationDelay: `${themeIdx * 0.15}s` }}
            >
              <div className="theme-card-accent" />
              <div className="theme-card-pattern"></div>
              <div className="theme-palette">
                {theme.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="palette-dot"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className="theme-card-content">
                <div className="theme-emoji-wrapper">
                  <img
                    src={theme.emoji}
                    alt={theme.name}
                    className="theme-emoji"
                  />
                  <div className="theme-emoji-ring"></div>
                </div>
                <div className="theme-number">
                  <span className="number-label">theme</span>
                  <span className="number-value">0{theme.id}</span>
                </div>
                <h3>{theme.name}</h3>
                <p>{theme.description}</p>
                <button className="theme-button">
                  <FiEye size={14} />
                  <span>View Gallery</span>
                  {theme.images.length > 0 && (
                    <span className="btn-count">{theme.images.length}</span>
                  )}
                  <span className="btn-arrow">→</span>
                </button>
              </div>
              <span className="theme-corner-star">✧</span>
              <span className="theme-corner-star theme-corner-star-bl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modal portal */}
    {selectedTheme && selectedThemeData && createPortal(
      <div className="gallery-modal" onClick={() => setSelectedTheme(null)}>
            <div
              className={`modal-content ${selectedThemeData.colorClass}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-accent" />
              <div className="modal-corner modal-corner-tl"></div>
              <div className="modal-corner modal-corner-br"></div>
              <button
                className="close-modal"
                onClick={() => setSelectedTheme(null)}
              >
                <FiX size={18} />
              </button>
              <div className="modal-inner">
                <div className="modal-header">
                  <div className="modal-emoji-wrapper">
                    <img
                      src={selectedThemeData.emoji}
                      alt={selectedThemeData.name}
                      className="modal-emoji"
                    />
                  </div>
                  <div className="modal-title-group">
                    <span className="modal-theme-label">
                      theme 0{selectedThemeData.id}
                    </span>
                    <h3>{selectedThemeData.name}</h3>
                  </div>
                </div>
                <div className="modal-palette">
                  {selectedThemeData.colors.map((color, idx) => (
                    <div key={idx} className="modal-palette-item">
                      <span
                        className="modal-palette-dot"
                        style={{ background: color }}
                      />
                      <span className="modal-palette-hex">{color}</span>
                    </div>
                  ))}
                </div>
                <div className="modal-separator" />

                {selectedThemeData.images &&
                selectedThemeData.images.length > 0 ? (
                  <>
                    <div className="gallery-grid-header">
                      <span className="gallery-count">
                        <span className="gallery-count-number">
                          {selectedThemeData.images.length}
                        </span>{" "}
                        designs
                      </span>
                      <span className="gallery-hint">
                        <FiEye size={11} />
                        click to enlarge
                      </span>
                    </div>

                    {/* Custom layouts */}
                    {selectedThemeData.customLayout === "vermillion" ? (
                      <div className="gallery-grid-custom vermillion-layout">
                        <div className="gallery-standard-section">
                          {selectedThemeData.images
                            .slice(0, 12)
                            .map((image, idx) => (
                              <div
                                key={idx}
                                className="gallery-item"
                                onClick={() => openLightbox(idx)}
                              >
                                <img
                                  src={image.src}
                                  alt={`${selectedThemeData.name} design ${idx + 1}`}
                                  loading="lazy"
                                />
                                <div className="gallery-item-overlay">
                                  <span className="gallery-item-number">
                                    #{String(idx + 1).padStart(2, "0")}
                                  </span>
                                  <FiEye
                                    size={14}
                                    className="gallery-item-eye"
                                  />
                                </div>
                                {image.credits && (
                                  <span className="gallery-item-credit-indicator">
                                    <FiInfo size={10} />
                                  </span>
                                )}
                              </div>
                            ))}
                        </div>

                        <div className="gallery-wide-row">
                          <div
                            className="gallery-item gallery-item-wide"
                            onClick={() => openLightbox(12)}
                          >
                            <img
                              src={selectedThemeData.images[12].src}
                              alt={`${selectedThemeData.name} design 14`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-number">#14</span>
                              <FiEye size={14} className="gallery-item-eye" />
                            </div>
                          </div>
                        </div>

                        <div className="gallery-standard-section gallery-final-row">
                          <div
                            className="gallery-item"
                            onClick={() => openLightbox(13)}
                          >
                            <img
                              src={selectedThemeData.images[13].src}
                              alt={`${selectedThemeData.name} design 13`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-number">#13</span>
                              <FiEye size={14} className="gallery-item-eye" />
                            </div>
                          </div>
                          <div
                            className="gallery-item"
                            onClick={() => openLightbox(14)}
                          >
                            <img
                              src={selectedThemeData.images[14].src}
                              alt={`${selectedThemeData.name} design 15`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-number">#15</span>
                              <FiEye size={14} className="gallery-item-eye" />
                            </div>
                          </div>
                          <div
                            className="gallery-item"
                            onClick={() => openLightbox(15)}
                          >
                            <img
                              src={selectedThemeData.images[15].src}
                              alt={`${selectedThemeData.name} design 16`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-number">#16</span>
                              <FiEye size={14} className="gallery-item-eye" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : selectedThemeData.customLayout === "darkest" ? (
                      <div className="gallery-grid-custom darkest-layout">
                        <div className="gallery-standard-section">
                          {selectedThemeData.images
                            .slice(0, 9)
                            .map((image, idx) => (
                              <div
                                key={idx}
                                className="gallery-item"
                                onClick={() => openLightbox(idx)}
                              >
                                <img
                                  src={image.src}
                                  alt={`${selectedThemeData.name} design ${idx + 1}`}
                                  loading="lazy"
                                />
                                <div className="gallery-item-overlay">
                                  <span className="gallery-item-number">
                                    #{String(idx + 1).padStart(2, "0")}
                                  </span>
                                  <FiEye
                                    size={14}
                                    className="gallery-item-eye"
                                  />
                                </div>
                                {image.credits && (
                                  <span className="gallery-item-credit-indicator">
                                    <FiInfo size={10} />
                                  </span>
                                )}
                              </div>
                            ))}
                        </div>

                        <div className="gallery-special-section darkest-special-section">
                          <div className="gallery-darkest-left">
                            <div
                              className="gallery-item gallery-item-tall gallery-item-dn10"
                              onClick={() => openLightbox(9)}
                            >
                              <img
                                src={selectedThemeData.images[9].src}
                                alt={`${selectedThemeData.name} design 10`}
                                loading="lazy"
                              />
                              <div className="gallery-item-overlay">
                                <span className="gallery-item-number">#10</span>
                                <FiEye size={14} className="gallery-item-eye" />
                              </div>
                            </div>

                            <div className="gallery-item-dn10b">
                              <img
                                src={selectedThemeData.images[10].src}
                                alt={`${selectedThemeData.name} design 11`}
                                loading="lazy"
                              />
                            </div>
                          </div>

                          <div className="gallery-darkest-right">
                            {[11, 12, 13, 14].map((imageIndex) => (
                              <div
                                key={imageIndex}
                                className="gallery-item"
                                onClick={() => openLightbox(imageIndex)}
                              >
                                <img
                                  src={selectedThemeData.images[imageIndex].src}
                                  alt={`${selectedThemeData.name} design ${imageIndex + 1}`}
                                  loading="lazy"
                                />
                                <div className="gallery-item-overlay">
                                  <span className="gallery-item-number">
                                    #{String(imageIndex + 1).padStart(2, "0")}
                                  </span>
                                  <FiEye
                                    size={14}
                                    className="gallery-item-eye"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="gallery-grid">
                        {selectedThemeData.images.map((image, idx) => (
                          <div
                            key={idx}
                            className="gallery-item"
                            onClick={() => openLightbox(idx)}
                          >
                            <img
                              src={image.src}
                              alt={`${selectedThemeData.name} design ${idx + 1}`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-number">
                                #{String(idx + 1).padStart(2, "0")}
                              </span>
                              <FiEye size={14} className="gallery-item-eye" />
                            </div>
                            {image.credits && (
                              <span className="gallery-item-credit-indicator">
                                <FiInfo size={10} />
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="modal-gallery-placeholder">
                    <FiImage size={32} className="placeholder-icon" />
                    <p className="modal-note">
                      Gallery content will be added here
                    </p>
                    <span className="placeholder-sparkle">✦ coming soon ✦</span>
                  </div>
                )}
              </div>
            </div>
          </div>,
      document.body
    )}

    {/* Lightbox portal */}
    {lightboxImage !== null && selectedThemeData && createPortal(
      <div className="lightbox" onClick={closeLightbox}>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft size={20} />
            </button>

            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedThemeData.images[lightboxImage].src}
                alt={`${selectedThemeData.name} design ${lightboxImage + 1}`}
              />
              <div className="lightbox-info">
                <span className="lightbox-theme-name">
                  {selectedThemeData.name}
                </span>
                <span className="lightbox-divider-dot">·</span>
                <span className="lightbox-counter">
                  {lightboxImage + 1} / {selectedThemeData.images.length}
                </span>
              </div>

              {selectedThemeData.images[lightboxImage].credits && (
                <div className="lightbox-credits-container">
                  <button
                    className={`lightbox-credits-btn ${showCredits ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCredits(!showCredits);
                    }}
                    aria-label="Show art credits"
                  >
                    <FiInfo size={14} />
                  </button>

                  {showCredits && (
                    <div
                      className="lightbox-credits-tooltip"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="credits-label">✦ Art Credits</span>
                      <div className="credits-list">
                        {selectedThemeData.images[lightboxImage].credits.map(
                          (credit, idx) => (
                            <p key={idx} className="credit-item">
                              {credit.text}
                              <a
                                href={credit.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credit-link"
                              >
                                {credit.artist}
                              </a>
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              aria-label="Next image"
            >
              <FiChevronRight size={20} />
            </button>

            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FiX size={18} />
            </button>
          </div>,
      document.body
    )}
    </>
  );
}
