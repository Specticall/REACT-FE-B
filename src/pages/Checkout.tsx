import { useState } from "react";
import Form from "../components/Form";
import CheckoutSummary from "../components/CheckoutSummary";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("e-money");
  const navigate = useNavigate();

  const submit = () => {
    console.log("SUBMIT");
    if (!name || !email || !phone || !method) {
      return;
    }
    navigate("/checkout/success");
  };

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
      <CheckoutSummary onSubmit={submit} />
    </div>
  );
}
