import React from "react";
import { CoinData } from "../interfaces";
import "../App.css";

interface CoinRowProps {
  coin: CoinData;
}

const CoinRow: React.FC<CoinRowProps> = ({ coin }) => {
  const renderAmount = (amount: number, index: number) => {
    let className = "";
    if (index === 0) {
      className = "same";
    } else {
      className =
        amount > coin.amount[index - 1]
          ? "increase"
          : amount < coin.amount[index - 1]
          ? "decrease"
          : "same";
    }
    return <td className={className}>${amount}</td>;
  };

  return (
    <tr>
      <td>{coin.name}</td>
      {coin.amount.map((amount: number, index: number) =>
        renderAmount(amount, index)
      )}
    </tr>
  );
};

export default CoinRow;
