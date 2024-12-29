import "./TransactionTable.css";

function TransactionTable() {
  const transactions = [
    { type: "Invoice", amount: 964.82, currency: "LRD" },
    { type: "Payment", amount: 686.5, currency: "WST" },
    { type: "Invoice", amount: 828.62, currency: "UGX" },
    { type: "Withdrawal", amount: 527.8, currency: "ALL" },
    { type: "Withdrawal", amount: 371.43, currency: "MUR" },
    { type: "Payment", amount: 862.44, currency: "AUD" },
    { type: "Withdrawal", amount: 907.0, currency: "GEL" },
    { type: "Withdrawal", amount: 352.52, currency: "UGX" },
  ];

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
