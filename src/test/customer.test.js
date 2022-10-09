import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Customer from "../components/customer/customer";

const mockedData = 
  {
    name: "Patrik",
    transactions: [
      {
        id: 1,
        date: "03-24-2022",
        amount: "175",
      },
      {
        id: 2,
        date: "03-18-2022",
        amount: "35",
      },
      {
        id: 3,
        date: "04-16-2022",
        amount: "140",
      },
      {
        id: 4,
        date: "05-20-2022",
        amount: "220",
      },
    ],
  };

test("Should render customer reward in table", async () => {
  const result = render(<Customer customer={mockedData} />);
  expect(result.container.querySelector("#Patrik")).toBeTruthy();
});
