import { business } from "../data/business.js";
import "./Solar.scss";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

export default function Solar() {
  return (
    <section className="solar" id="solar">
      <div className="container">
        <div className="solar__panel">
          <div className="solar__visual" aria-hidden="true">
            <div className="solar__sun">
              <span />
              <i className="solar__ray solar__ray--1" />
              <i className="solar__ray solar__ray--2" />
              <i className="solar__ray solar__ray--3" />
              <i className="solar__ray solar__ray--4" />
            </div>

            <div className="solar__scene">
              <div className="solar__panelGraphic">
                <div className="solar__cells">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <div className="solar__stand">
                <span />
                <span />
              </div>

              <div className="solar__ground" />
            </div>

            <div className="solar__floatingCard solar__floatingCard--top">
              <span>Solar installation</span>
              <strong>Home · Shop · Office</strong>
            </div>

            <div className="solar__floatingCard solar__floatingCard--bottom">
              <span>Service by</span>
              <strong>{business.owner}</strong>
            </div>
          </div>

          <div className="solar__content">
            <span className="solar__eyebrow">
              Solar Solutions
            </span>

            <h2>
              Power your space
              <span>with solar.</span>
            </h2>

            <p className="solar__lead">
              {business.solar.description}
            </p>

            <div className="solar__places">
              {business.solar.suitableFor.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="solar__benefits">
              {business.solar.benefits.map((benefit) => (
                <div className="solar__benefit" key={benefit}>
                  <span className="solar__check">
                    <CheckIcon />
                  </span>

                  <p>{benefit}</p>
                </div>
              ))}
            </div>

            <div className="solar__actions">
              <a
                className="solar__primary"
                href={business.phones[1].href}
              >
                <span>
                  <small>Talk about solar</small>
                  <strong>
                    {business.phones[1].display ??
                      business.phones[1].number}
                  </strong>
                </span>

                <b aria-hidden="true">↗</b>
              </a>

              <a
                className="solar__secondary"
                href="#contact"
              >
                Request service
              </a>
            </div>
          </div>
        </div>

        <div className="solar__bottom">
          <span>Solar Installation</span>
          <i />

          <span>Home</span>
          <i />

          <span>Shop</span>
          <i />

          <span>Office</span>
          <i />

          <span>Factory</span>
        </div>
      </div>
    </section>
  );
}