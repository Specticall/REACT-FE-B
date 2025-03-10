type Props = {
  name: string;
  email: string;
  phone: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
};

export default function BillingDetails({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
}: Props) {
  return (
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
  );
}
