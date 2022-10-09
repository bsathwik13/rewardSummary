import { useEffect, useState } from "react";
import "./customer.css";
import estimateAmount from "../../utility/estimateReward";

export default function Customer(props) {
  const { name, transactions } = props.customer;

  const [transactionWithReward, setTranWithReward] = useState([]);
  const [total, setTotal] = useState(0);
  const [monthlyReward, setMonthlyReward] = useState({});

  useEffect(() => {

    function calculateMonthlyAmount()  {
      let totalReward = 0;
      let monthlyReward = {};
      const newTxns = transactions.map((txn) => {
        const txnMonth = new Date(txn.date).toLocaleString("en-us", {
          month: "short",
          year: "numeric",
        });
        const reward = estimateAmount(txn.amount);
        totalReward = totalReward + reward;
        monthlyReward[txnMonth] = monthlyReward[txnMonth]
          ? monthlyReward[txnMonth] + reward
          : reward;
        return {
          ...txn,
          reward: reward,
        };
      });
      setMonthlyReward(monthlyReward);
      setTotal(totalReward);
      setTranWithReward(newTxns);
     }

    calculateMonthlyAmount();
  }, [transactions]);




  return (
    <div className="customer">
      <div>
        {" "}
        <h3 id={name}> Customer - {name} </h3>{" "}
      </div>
      <table className="cust-table">
        <tbody>
          <tr>
            <th>Transaction Date</th>
            <th>Transaction Amount</th>
            <th>Reward Per Txn</th>
          </tr>

          {transactionWithReward.map((txn) => {
            return (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td>{txn.amount}</td>
                <td>{txn.reward}</td>
              </tr>
            );
          })}
          <tr className="highlight">
            <td colSpan="2">Total Reward</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <table className="cust-table month-reawrd">
        <tbody>
          <tr>
            <th>Month</th>
            <th>Total Reward monthly</th>
          </tr>

          {Object.entries(monthlyReward).map(([month, reward], i) => {
            return (
              <tr key={month}>
                <td>{month}</td>
                <td>{reward}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
