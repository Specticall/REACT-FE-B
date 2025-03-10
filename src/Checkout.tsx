import { useState } from "react";
import Checkout from "./Checkout";
import Form from "./Form";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("e-money");

  console.log({ name, email, phone, method });

  return (
    <div className="container">
      <Form
        name={name}
        phone={phone}
        email={email}
        method={method}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        setMethod={setMethod}
      />
      <Checkout />
    </div>
  );
}
