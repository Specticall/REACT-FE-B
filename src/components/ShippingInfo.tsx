export default function ShippingInfo() {
  return (
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
  );
}
