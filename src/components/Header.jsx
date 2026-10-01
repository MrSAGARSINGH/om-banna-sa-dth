import { useEffect, useState } from "react";
import { business } from "../data/business.js";
import "./Header.scss";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solar", href: "#solar" },
  { label: "DTH Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 10 8l-2 2c1.2 2.5 3.4 4.7 6 6l2-2 4.5 2.8c.4.3.6.8.4 1.3-.7 1.8-2.5 2.9-4.4 2.7C9.5 20.1 3.9 14.5 3.2 7.5 3 5.6 4.1 3.8 5.9 3.1c.5-.2 1 0 1.3.4Z" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const primaryPhone = business.phones[0];

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 820) {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`header ${
        isScrolled ? "header--scrolled" : ""
      } ${isOpen ? "header--menu-open" : ""}`}
    >
      <div className="container header__inner">
        <a
          className="header__brand"
          href="#home"
          onClick={closeMenu}
          aria-label={`${business.name} home`}
        >
          <span className="header__brandMark">
            <span className="header__brandGlow" />
            <strong>ॐ</strong>
          </span>

          <span className="header__brandText">
            <strong>Om Banna Sa</strong>

            <small>
              <span />
              DTH · LED TV · Solar
            </small>
          </span>
        </a>

        <nav
          className="header__desktopNav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              className="header__navLink"
              href={item.href}
              key={item.href}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__availability">
            <i />
            Service available
          </div>

          <a
            className="header__phone"
            href={primaryPhone.href}
            aria-label={`Call ${business.name}`}
          >
            <span className="header__phoneIcon">
              <PhoneIcon />
            </span>

            <span className="header__phoneText">
              <small>Call for service</small>

              <strong>
                {primaryPhone.display ?? primaryPhone.number}
              </strong>
            </span>

            <span
              className="header__phoneArrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <button
            className={`header__menuButton ${
              isOpen ? "is-open" : ""
            }`}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`header__mobileMenu ${
          isOpen ? "is-open" : ""
        }`}
      >
        <div className="container header__mobileInner">
          <div className="header__mobileTop">
            <span>
              <i />
              Direct local service
            </span>

            <strong>{business.address}</strong>
          </div>

          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={item.href}
                onClick={closeMenu}
                style={{
                  "--menu-index": index,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item.label}</strong>

                <b aria-hidden="true">↘</b>
              </a>
            ))}
          </nav>

          <div className="header__mobileContact">
            <div>
              <span>Direct service contact</span>

              <strong>{business.owner}</strong>

              <small>DTH · LED TV · Solar</small>
            </div>

            <a
              href={primaryPhone.href}
              onClick={closeMenu}
            >
              <PhoneIcon />

              <span>
                <small>Call now</small>

                <strong>
                  {primaryPhone.display ?? primaryPhone.number}
                </strong>
              </span>

              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}