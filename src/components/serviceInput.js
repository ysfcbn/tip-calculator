export default function ServiceInput({ firstTip, onSetFirstTip }) {
  return (
    <div className="input">
      <span>How did you like the service?</span>
      <select
        type="text"
        value={firstTip}
        onChange={(e) => onSetFirstTip(+e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amzing! (20%)</option>
      </select>
    </div>
  );
}
