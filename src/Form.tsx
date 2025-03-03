import "./Form.css";
import cod from "/cod.png";

export default function Form() {
  return (
    <form className="form-container">
      <h2 className="form-title">CHECKOUT</h2>
      <div className="margin-top-12 grid-layout grid-cols-2 gap-y-6 gap-4">
        <p className="text-accent col-span-2">BILLING DETAILS</p>
        <div>
          <p className="margin-bottom-2">Name</p>
          <input
            type="text"
            placeholder="Alexia Ward"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-sm"
          />
        </div>
        <div>
          <p className="margin-bottom-2">Email Address</p>
          <input
            type="text"
            placeholder="alexel@gmail.com"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
        <div>
          <p className="margin-bottom-2">Phone Number</p>
          <input
            type="text"
            placeholder="+62 0812 1024 8515"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
      </div>
      <div className="margin-top-12 grid-layout grid-cols-2 gap-y-6 gap-4">
        <p className="text-accent col-span-2">SHIPPING INFO</p>
        <div className="col-span-2">
          <p className="margin-bottom-2">Address</p>
          <input
            type="text"
            placeholder="1137 Williams Avenue"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-sm"
          />
        </div>
        <div>
          <p className="margin-bottom-2">ZIP Code</p>
          <input
            type="text"
            placeholder="10001"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
        <div>
          <p className="margin-bottom-2">City</p>
          <input
            type="text"
            placeholder="Jakarta"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
        <div>
          <p className="margin-bottom-2">Country</p>
          <input
            type="text"
            placeholder="Indonesia"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
      </div>
      <div className="margin-top-12 grid-layout grid-cols-2 gap-y-6 gap-4">
        <p className="text-accent col-span-2">PAYMENT DETAILS</p>
        <p className="row-span-2">Payment Method</p>
        <div className="padding-x-6 padding-y-4 border rounded-md flex items-center gap-4 border-accent hover-border-accent transition-all duration-100 cursor-pointer payment__input">
          <div className="width-6 height-6 rounded-full border-slate-200 border overflow-hidden padding-1 payment__input--radio">
            <div className="bg-accent rounded-full width-full height-full"></div>
          </div>
          e-Money
        </div>
        <div className="padding-x-6 padding-y-4 border border-slate-200 rounded-md flex items-center gap-4 hover-border-accent transition-all duration-100 cursor-pointer payment__input">
          <div className="width-6 height-6 rounded-full border-slate-200 border overflow-hidden padding-1 payment__input--radio"></div>
          Cash on Delivery
        </div>
        <div>
          <p className="margin-bottom-2">e-Money Number</p>
          <input
            type="text"
            placeholder="+293284374"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
        <div>
          <p className="margin-bottom-2">e-Money PIN</p>
          <input
            type="text"
            placeholder="5435"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
          />
        </div>
        <div className="col-span-2 flex gap-6 items-center cod">
          <img src={cod} alt="" />
          <p className="text-slate-400 !font-normal cod__content">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      </div>
    </form>
  );
}
