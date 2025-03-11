import codImage from "/cod.png";
type Props = {
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  method: string;
};
export default function PaymentDetails({ method, setMethod }: Props) {
  return (
    <div className="payment-details margin-top-12 grid-layout grid-cols-2 gap-y-6 gap-4">
      <p className="text-accent col-span-2">PAYMENT DETAILS</p>
      <p className="row-span-2">Payment Method</p>
      <div
        onClick={function () {
          setMethod("e-money");
        }}
        className="padding-x-6 padding-y-4 border rounded-md flex items-center gap-4 border-accent hover-border-accent transition-all duration-100 cursor-pointer payment__input"
      >
        <div
          className="width-6 height-6 rounded-full border-slate-200 border overflow-hidden padding-1 payment__input--radio"
          style={{
            // method === "e-money" && "orange"
            background: method === "e-money" ? "orange" : "",
          }}
        >
          <div className="bg-accent rounded-full width-full height-full"></div>
        </div>
        e-Money
      </div>
      <div
        onClick={function () {
          setMethod("cod");
        }}
        className="padding-x-6 padding-y-4 border border-slate-200 rounded-md flex items-center gap-4 hover-border-accent transition-all duration-100 cursor-pointer payment__input"
      >
        <div
          className="width-6 height-6 rounded-full border-slate-200 border overflow-hidden padding-1 payment__input--radio"
          style={{
            background: method === "cod" ? "orange" : "",
          }}
        ></div>
        Cash on Delivery
      </div>
      {method === "e-money" && (
        <div>
          <p className="margin-bottom-2">e-Money Number</p>
          <input
            type="text"
            placeholder="+293284374"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
      )}
      {method === "e-money" && (
        <div>
          <p className="margin-bottom-2">e-Money PIN</p>
          <input
            type="text"
            placeholder="5435"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
      )}
      {method === "cod" && (
        <div className="col-span-2 flex gap-6 items-center cod">
          <img src={codImage} alt="" />
          <p className="text-slate-400 !font-normal cod__content">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}
