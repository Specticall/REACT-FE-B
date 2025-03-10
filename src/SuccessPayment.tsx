import "./success-checkout.css";

export default function SuccessCheckout() {
  return (
    <div className="success-checkout">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#D87D4A" />
        <path
          d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
          stroke="white"
          stroke-width="4"
        />
      </svg>

      <h1 className="success-checkout__title">THANK YOUR FOR YOUR ORDER</h1>
      <p className="success-checkout__desc">
        You will recieve a confirmation email shortly
      </p>
      <button className="btn btn-primary success-checkout__home">
        Back to Home
      </button>
    </div>
  );
}
