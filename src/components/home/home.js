import { useEffect, useState } from "react";
import axios from "axios";

import Customer from "../customer/customer";

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomerList();
  }, []);

  const fetchCustomerList = async () => {
    const result = await axios.get("./assets/transactions.json");
    setCustomers(result.data);
  };
  return (
    <div id="home" className="home">
      {customers.map((customer) => {
        return <Customer id={customer.name} key={customer.name} customer={customer} />;
      })}
    </div>
  );
}
