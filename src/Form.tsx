import "./Form.css";
import PaymentDetails from "./PaymentDetails";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("e-money");

  console.log({ name, email, phone, method });

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p className="margin-bottom-2">Email Address</p>
          <input
            type="text"
            placeholder="alexel@gmail.com"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="margin-bottom-2">Phone Number</p>
          <input
            type="text"
            placeholder="+62 0812 1024 8515"
            className="border border-slate-200 width-full padding-x-6 padding-y-4 rounded-md"
            value={phone}
            onChange={function (e) {
              setPhone(e.target.value);
            }}
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
      <PaymentDetails setMethod={setMethod} method={method} />
    </form>
  );
}
