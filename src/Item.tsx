type Props = {
  title: string;
  count: number;
  price: number;
  isDiscount?: boolean;
};
// number, string, boolean
export default function Item({ title, count, price, isDiscount }: Props) {
  const discountedPrice = price * 0.5;
  return (
    <div className="checkout-item">
      <img
        className="checkout-item__img"
        src="https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="checkout-item__info">
        <p className="checkout-item__name">
          {title} {isDiscount && "(50% OFF)"}
        </p>
        <p className="checkout-item__price">
          {isDiscount ? discountedPrice : price} x {count} = ${" "}
          {(isDiscount ? discountedPrice : price) * count * 0.5}
        </p>
      </div>
      {/* <p className="checkout-item__count">{count}x</p> */}
      <div className="counter">
        <button className="counter-btn">+</button>
        <p className="counter-content">0</p>
        <button className="counter-btn">-</button>
      </div>
    </div>
  );
}
