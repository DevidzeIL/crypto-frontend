// src/components/CoinTable.tsx
import React, { useState } from "react";
import CoinRow from "./CoinRow";
import { CoinData } from "../interfaces";
import "../App.css";

const mockData: CoinData[] = [
  {
    name: "Coin 1",
    amount: [5, 8, 10, 14, 3, 1],
  },
  {
    name: "Coin 2",
    amount: [1, 231, 540, 1, 3, 10],
  },
  {
    name: "Coin 3",
    amount: [2, 1, 20, 2, 2, 1],
  },
];

const CoinTable: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>(mockData);

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>start</th>
          <th>1h</th>
          <th>3h</th>
          <th>8h</th>
          <th>12h</th>
          <th>24h</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <CoinRow key={coin.name} coin={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
