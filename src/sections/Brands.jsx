import { business } from "../data/business.js";
import "./Brands.scss";

function DishIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 17c14 0 25 11 25 25-14 0-25-11-25-25Z" />
      <path d="M36 36 20 52" />
      <path d="M14 52h18" />
      <path d="M43 14c4 2 7 5 9 9" />
      <path d="M46 7c7 3 12 8 15 15" />
      <circle cx="42" cy="22" r="2" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 18a10 10 0 0 1 10-10" />
      <path d="M9 18a6 6 0 0 1 6-6" />
      <path d="M13 18a2 2 0 0 1 2-2" />
      <circle cx="15" cy="18" r="1" />
    </svg>
  );
}

function getBrandShortName(brand) {
  const map = {
    "Tata Play": "TATA",
    "Airtel Digital TV": "airtel",
    "Dish TV": "dish",
    d2h: "d2h",
    "Sun Direct": "SUN",
    "Videocon d2h": "VD2H",
    "DD Free Dish": "DD",
  };

  return map[brand] ?? brand.slice(0, 4).toUpperCase();
}

function getWhatsAppUrl() {
  const message = `Hello Om Banna Sa DTH Service,

Mujhe DTH connection/service ke regarding information chahiye.

Please details share kijiye.`;

  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(
    message,
  )}`;
}

export default function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="brands__background" aria-hidden="true">
        <div className="brands__gridPattern" />
        <div className="brands__glow brands__glow--blue" />
        <div className="brands__glow brands__glow--yellow" />
      </div>

      <div className="container">
        <div className="brands__header">
          <div>
            <span className="brands__eyebrow">
              Supported DTH Platforms
            </span>

            <h2>
              One service.
              <span>All major DTH networks.</span>
            </h2>
          </div>

          <p>
            New connection, recharge, channel setup, signal issue aur
            repairing ke liye leading DTH platforms par direct assistance.
          </p>
        </div>

        <div className="brands__layout">
          <div className="brands__feature">
            <div className="brands__featureTop">
              <span>Complete DTH Support</span>

              <div className="brands__live">
                <i />
                Service available
              </div>
            </div>

            <div className="brands__visual">
              <div className="brands__orbit brands__orbit--outer" />
              <div className="brands__orbit brands__orbit--middle" />

              <div className="brands__signal brands__signal--one" />
              <div className="brands__signal brands__signal--two" />
              <div className="brands__signal brands__signal--three" />

              <div className="brands__dish">
                <DishIcon />
              </div>

              <span className="brands__satellite brands__satellite--one">
                HD
              </span>

              <span className="brands__satellite brands__satellite--two">
                DTH
              </span>

              <span className="brands__satellite brands__satellite--three">
                TV
              </span>
            </div>

            <div className="brands__featureContent">
              <span>DTH SERVICE</span>

              <h3>
                Connection se repair tak.
              </h3>

              <p>
                Ek hi number par DTH installation, recharge, channel
                package, setup aur signal troubleshooting.
              </p>
            </div>

            <div className="brands__features">
              {business.dthServices.map((item) => (
                <span key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>

            <a
              className="brands__whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <small>Need DTH service?</small>
                <strong>Chat on WhatsApp</strong>
              </span>

              <b aria-hidden="true">↗</b>
            </a>
          </div>

          <div className="brands__platforms">
            <div className="brands__platformTop">
              <div>
                <span>Supported Networks</span>
                <strong>{business.brands.length} DTH platforms</strong>
              </div>

              <SignalIcon />
            </div>

            <div className="brands__platformGrid">
              {business.brands.map((brand, index) => (
                <article
                  className={`platform-card ${
                    index === 0 ? "platform-card--featured" : ""
                  }`}
                  key={`${brand}-${index}`}
                >
                  <div className="platform-card__meta">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <i />
                  </div>

                  <div className="platform-card__mark">
                    {getBrandShortName(brand)}
                  </div>

                  <div className="platform-card__content">
                    <h3>{brand}</h3>

                    <p>
                      Connection · Recharge · Setup
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get ${brand} service on WhatsApp`}
                  >
                    Get service
                    <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="brands__ticker" aria-hidden="true">
          <div className="brands__tickerTrack">
            {[...business.brands, ...business.brands].map(
              (brand, index) => (
                <span key={`${brand}-${index}`}>
                  {brand}
                  <b>✦</b>
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}