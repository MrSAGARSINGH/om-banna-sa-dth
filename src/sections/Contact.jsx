import { business } from "../data/business.js";
import "./Contact.scss";

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

export default function Contact() {
  const [primaryPhone, secondaryPhone] = business.phones;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__glow" aria-hidden="true" />

          <div className="contact__content">
            <span className="contact__eyebrow">
              Need Service?
            </span>

            <h2>
              Service chahiye?
              <span>Direct call kijiye.</span>
            </h2>

            <p>
              DTH connection, recharge, repair, LED TV fitting ya solar
              installation ke liye directly contact karein.
            </p>

            <div className="contact__primaryAction">
              <a href={primaryPhone.href}>
                <span className="contact__phoneIcon">
                  <PhoneIcon />
                </span>

                <span className="contact__phoneText">
                  <small>Primary contact</small>

                  <strong>
                    {primaryPhone.display ?? primaryPhone.number}
                  </strong>
                </span>

                <span className="contact__arrow">↗</span>
              </a>
            </div>

            <div className="contact__trust">
              <span>Direct local service</span>
              <i />
              <span>Installation & repair</span>
              <i />
              <span>DTH · TV · Solar</span>
            </div>
          </div>

          <div className="contact__details">
            <div className="contact__card contact__card--owner">
              <span className="contact__cardLabel">
                Service Contact
              </span>

              <div className="contact__ownerMark">
                ॐ
              </div>

              <div>
                <strong>{business.owner}</strong>
                <p>{business.name}</p>
              </div>
            </div>

            <a
              className="contact__card contact__card--phone"
              href={secondaryPhone.href}
            >
              <div className="contact__cardIcon">
                <PhoneIcon />
              </div>

              <div>
                <span>Alternate Number</span>

                <strong>
                  {secondaryPhone.display ?? secondaryPhone.number}
                </strong>
              </div>

              <b>↗</b>
            </a>

            <a
              className="contact__card contact__card--location"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__cardIcon">
                <LocationIcon />
              </div>

              <div>
                <span>Location</span>
                <strong>{business.address}</strong>
                <p>Open in Google Maps</p>
              </div>

              <b>↗</b>
            </a>
          </div>
        </div>

        <div className="contact__footerLine">
          <span>Om Banna Sa DTH Service</span>

          <div>
            <span>DTH</span>
            <i />
            <span>LED TV</span>
            <i />
            <span>Solar</span>
          </div>
        </div>
      </div>
    </section>
  );
}