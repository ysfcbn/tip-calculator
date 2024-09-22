export default function TotalCost({ bill, tipTotal }) {
  return (
    <div
      style={{ margin: "20px 0 0 0", fontSize: "1.5rem", fontWeight: "bolder" }}
    >
      {`You pay $${bill + tipTotal} ($${bill} + $${tipTotal} tip)`}
    </div>
  );
}
