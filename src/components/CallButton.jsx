import { business } from "../data/business.js";
import "./CallButton.scss";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 10 8l-2 2c1.2 2.5 3.4 4.7 6 6l2-2 4.5 2.8c.4.3.6.8.4 1.3-.7 1.8-2.5 2.9-4.4 2.7C9.5 20.1 3.9 14.5 3.2 7.5 3 5.6 4.1 3.8 5.9 3.1c.5-.2 1 0 1.3.4Z" />
    </svg>
  );
}

export default function CallButton() {
  const primaryPhone = business.phones[0];

  return (
    <a
      className="call-button"
      href={primaryPhone.href}
      aria-label={`Call ${business.name} on ${primaryPhone.number}`}
    >
      <span className="call-button__pulse" aria-hidden="true" />

      <span className="call-button__icon">
        <PhoneIcon />
      </span>

      <span className="call-button__content">
        <small>Need service?</small>

        <strong>
          {primaryPhone.display ?? primaryPhone.number}
        </strong>
      </span>

      <span className="call-button__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}