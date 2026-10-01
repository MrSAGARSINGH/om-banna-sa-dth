import { business } from "../data/business.js";
import "./Footer.scss";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 10 8l-2 2c1.2 2.5 3.4 4.7 6 6l2-2 4.5 2.8c.4.3.6.8.4 1.3-.7 1.8-2.5 2.9-4.4 2.7C9.5 20.1 3.9 14.5 3.2 7.5 3 5.6 4.1 3.8 5.9 3.1c.5-.2 1 0 1.3.4Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#home">
              <span className="footer__logoMark">ॐ</span>

              <span className="footer__logoText">
                <strong>Om Banna Sa</strong>
                <small>DTH Service</small>
              </span>
            </a>

            <p>
              DTH connection, repair, recharge, LED TV fitting and solar
              installation through one direct local service contact.
            </p>

            <div className="footer__services">
              <span>DTH</span>
              <i />
              <span>LED TV</span>
              <i />
              <span>Solar</span>
            </div>
          </div>

          <div className="footer__nav">
            <span className="footer__title">Explore</span>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#solar">Solar</a>
            <a href="#brands">DTH Brands</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__contact">
            <span className="footer__title">Contact</span>

            {business.phones.map((phone) => (
              <a
                className="footer__contactItem"
                href={phone.href}
                key={phone.number}
              >
                <span className="footer__contactIcon">
                  <PhoneIcon />
                </span>

                <span>
                  <small>Call</small>
                  <strong>{phone.display ?? phone.number}</strong>
                </span>
              </a>
            ))}

            <a
              className="footer__contactItem"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer__contactIcon">
                <LocationIcon />
              </span>

              <span>
                <small>Location</small>
                <strong>{business.address}</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="footer__cta">
          <div>
            <span>Need installation or repair?</span>

            <strong>
              Talk directly with {business.owner}.
            </strong>
          </div>

          <a href={business.phones[0].href}>
            Call now
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>

          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.address}
            <span>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}