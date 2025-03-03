import Item from "./Item";

const itemList = [
  {
    title: "ZX9 Headphones",
    count: 10,
    price: 60,
    isDiscount: true,
  },
  {
    title: "YX1 Earphone",
    count: 4,
    price: 100,
    isDiscount: false,
  },
  {
    title: "XYZ Speaker",
    count: 2,
    price: 1000,
    isDiscount: false,
  },
];

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-list">
        <h2 className="checkout__title">SUMMARY</h2>
        {itemList.map(function (item) {
          return (
            <Item
              title={item.title}
              price={item.price}
              isDiscount={item.isDiscount}
            />
          );
        })}
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
