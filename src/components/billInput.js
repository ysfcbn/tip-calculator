export default function BillInput({ onSetBill, bill }) {
  return (
    <div className="input">
      <span>How much was the bill?</span>
      <input
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
        type="text"
        placeholder="0"
      />
    </div>
  );
}
