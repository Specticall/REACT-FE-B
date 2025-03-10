import "./Form.css";
import PaymentDetails from "./PaymentDetails";
import BillingDetails from "./BillingDetails";

type Props = {
  name: string;
  email: string;
  phone: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  method: string;
};

export default function Form({
  name,
  phone,
  email,
  method,
  setName,
  setPhone,
  setEmail,
  setMethod,
}: Props) {
  return (
    <form className="form-container">
      <h2 className="form-title">CHECKOUT</h2>
      <BillingDetails
        name={name}
        phone={phone}
        email={email}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
      />
      <PaymentDetails setMethod={setMethod} method={method} />
    </form>
  );
}
