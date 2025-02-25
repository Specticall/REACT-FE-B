import Item from "./Item";

export default function App() {
  return (
    <div className="checkout">
      <div className="checkout-list">
        <h2 className="checkout__title">SUMMARY</h2>
        <Item title="ZX9 Headphones" count={10} price={600} isDiscount />
        <Item title="YX1 Earphone" count={4} price={100} />
        <Item title="XYZ Speaker" count={1} price={300} />
        <Item title="Keyboard" count={2} price={1000} />
        <div className="checkout-details">
          <div className="checkout-details__item">
            <p className="checkout-details__desc">TOTAL</p>
            <p className="checkout-details__accent">$1797</p>
          </div>
          <div className="checkout-details__item">
            <p className="checkout-details__desc">SHIPPING</p>
            <p className="checkout-details__accent">$50</p>
          </div>
          <div className="checkout-details__item">
            <p className="checkout-details__desc">TAX (10%)</p>
            <p className="checkout-details__accent">$184.70</p>
          </div>
          <div className="checkout-details__item checkout-details-total">
            <p className="checkout-details__desc">GRAND TOTAL</p>
            <p className="checkout-details__accent">$2031.70</p>
          </div>
          <button className="btn btn-primary">CONTINUE & PAY</button>
        </div>
      </div>
    </div>
  );
}
