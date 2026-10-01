import { business } from "../data/business.js";
import "./Services.scss";

function ServiceIcon({ type }) {
  const icons = {
    dth: (
      <>
        <path d="M6 17h12" />
        <path d="M12 13v4" />
        <path d="M7 6.5a7 7 0 0 1 10 0" />
        <path d="M9.5 9a3.5 3.5 0 0 1 5 0" />
        <circle cx="12" cy="11.5" r="1" />
      </>
    ),
    "led-tv": (
      <>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </>
    ),
    repair: (
      <>
        <path d="m14.5 6.5 3-3 3 3-3 3" />
        <path d="m13 8 3 3" />
        <path d="m5 19 6.5-6.5" />
        <path d="M4 20h3l8-8" />
      </>
    ),
    solar: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M12 2v2" />
        <path d="M5 8H3" />
        <path d="M21 8h-2" />
        <path d="m6.5 3.5 1.4 1.4" />
        <path d="m17.5 3.5-1.4 1.4" />
        <path d="M5 15h14l-2 6H7l-2-6Z" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function getWhatsAppUrl(serviceTitle) {
  const message = `Hello Om Banna Sa DTH Service,

Mujhe ${serviceTitle} ke liye service chahiye.

Please details share kijiye.`;

  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(
    message,
  )}`;
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="services__heading">
            <span className="services__eyebrow">
              Our Services
            </span>

            <h2>
              One reliable contact.
              <span>Multiple home services.</span>
            </h2>
          </div>

          <div className="services__intro">
            <p>
              DTH se lekar LED TV fitting aur solar installation tak,
              essential services ek hi trusted local contact se.
            </p>

            <a href={business.phones[0].href}>
              Need help now?
              <strong>Call {business.phones[0].number}</strong>
            </a>
          </div>
        </div>

        <div className="services__grid">
          {business.services.map((service, index) => (
            <article
              className={`service-card service-card--${service.id}`}
              key={service.id}
            >
              <div className="service-card__top">
                <div className="service-card__icon">
                  <ServiceIcon type={service.id} />
                </div>

                <span className="service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="service-card__content">
                <span className="service-card__eyebrow">
                  {service.eyebrow}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              {service.id === "dth" && (
                <div className="service-card__tags">
                  {business.dthServices.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}

              {service.id === "solar" && (
                <div className="service-card__tags">
                  {business.solar.suitableFor.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}

              <a
                className="service-card__cta"
                href={getWhatsAppUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book on WhatsApp</span>
                <strong aria-hidden="true">↗</strong>
              </a>
            </article>
          ))}
        </div>

        <div className="services__bottom">
          <div className="services__bottomMark">
            <span>ॐ</span>
          </div>

          <div className="services__bottomContent">
            <span>Direct service</span>

            <strong>
              No complicated booking process.
            </strong>

            <p>
              Call directly, explain your requirement and get assistance
              for installation, setup or repair.
            </p>
          </div>

          <a href={business.phones[0].href}>
            Call now
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}