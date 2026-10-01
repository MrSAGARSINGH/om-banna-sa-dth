import { business } from "../data/business.js";
import "./Hero.scss";

function ServiceIcon({ type }) {
  if (type === "dth") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19h14M12 15v4M6.5 5.5a8 8 0 0 1 11 0M9 8a4.5 4.5 0 0 1 6 0M11.2 10.5a1.4 1.4 0 0 1 1.6 0" />
      </svg>
    );
  }

  if (type === "tv") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5 6.8 15M17.2 9l2.6-1.5" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 10 8l-2 2c1.2 2.5 3.4 4.7 6 6l2-2 4.5 2.8c.4.3.6.8.4 1.3-.7 1.8-2.5 2.9-4.4 2.7C9.5 20.1 3.9 14.5 3.2 7.5 3 5.6 4.1 3.8 5.9 3.1c.5-.2 1 0 1.3.4Z" />
    </svg>
  );
}

export default function Hero() {
  const primaryPhone = business.phones[0];

  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__decor hero__decor--one" />
        <div className="hero__decor hero__decor--two" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--yellow" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__availability">
            <i />
            Home service available
          </div>

          <h1 className="hero__title">
            DTH, LED TV
            <span>& Solar Services.</span>
          </h1>

          <p className="hero__headline">
            Reliable installation and service for your home.
          </p>

          <p className="hero__description">
            New DTH connection, recharge, repair, LED TV fitting and solar
            installation — direct service from one trusted local contact.
          </p>

          <div className="hero__actions">
            <a className="hero__call" href={primaryPhone.href}>
              <span className="hero__callIcon">
                <PhoneIcon />
              </span>

              <span className="hero__callText">
                <small>Call for service</small>
                <strong>{primaryPhone.display ?? primaryPhone.number}</strong>
              </span>

              <span className="hero__callArrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a className="hero__servicesButton" href="#services">
              <span>View all services</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>

          <div className="hero__quickServices">
            <span>New DTH Connection</span>
            <span>Recharge & Repair</span>
            <span>LED TV Fitting</span>
            <span>Solar Installation</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__servicePanel">
            <div className="hero__panelTop">
              <div>
                <span>Services</span>
                <strong>Everything in one place.</strong>
              </div>

              <div className="hero__live">
                <i />
                Direct contact
              </div>
            </div>

            <div className="hero__serviceList">
              <article className="hero__serviceCard hero__serviceCard--blue">
                <div className="hero__serviceIcon">
                  <ServiceIcon type="dth" />
                </div>

                <div>
                  <span>Entertainment</span>
                  <h2>DTH Services</h2>
                  <p>Connection · Recharge · Repair</p>
                </div>

                <span className="hero__arrow">01</span>
              </article>

              <article className="hero__serviceCard hero__serviceCard--dark">
                <div className="hero__serviceIcon">
                  <ServiceIcon type="tv" />
                </div>

                <div>
                  <span>Installation</span>
                  <h2>LED TV Fitting</h2>
                  <p>Home · Shop · Office</p>
                </div>

                <span className="hero__arrow">02</span>
              </article>

              <article className="hero__serviceCard hero__serviceCard--yellow">
                <div className="hero__serviceIcon">
                  <ServiceIcon type="solar" />
                </div>

                <div>
                  <span>Energy</span>
                  <h2>Solar Solutions</h2>
                  <p>Installation · Setup · Support</p>
                </div>

                <span className="hero__arrow">03</span>
              </article>
            </div>

            <div className="hero__panelFooter">
              <div>
                <span>Service contact</span>
                <strong>{business.owner}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{business.address}</strong>
              </div>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero__brandStrip">
            <span>Supported DTH</span>

            <div>
              {business.brands.slice(0, 4).map((brand) => (
                <strong key={brand}>{brand}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bottomLine" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}