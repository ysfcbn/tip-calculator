import { useState } from "react";
import BillInput from "./billInput";
import FriendInput from "./friendInput";
import Reset from "./Reset";
import ServiceInput from "./serviceInput";
import TotalCost from "./totalCost";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [firstTip, setFirstTip] = useState(0);
  const [secondTip, setSecondTip] = useState(0);

  const tip = bill * ((firstTip + secondTip) / 2 / 100);
  function handleReset() {
    setBill(0);
    setFirstTip(0);
    setSecondTip(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} onSetBill={setBill} />
      <ServiceInput firstTip={firstTip} onSetFirstTip={setFirstTip} />
      <FriendInput secondTip={secondTip} onSetSecondTip={setSecondTip} />
      <TotalCost bill={bill} tipTotal={+tip.toFixed(2)} />
      {bill > 0 && <Reset onHandleReset={handleReset} />}
    </div>
  );
}
