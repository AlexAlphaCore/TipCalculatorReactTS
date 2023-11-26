// app.tsx
import React, { useState } from 'react';
import './styles.css';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(parseFloat(e.target.value) || 0);
  };

  const handleTipPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(parseFloat(e.target.value) || 0);
  };

  const calculateTotalAmount = () => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const total = billAmount + tipAmount;
    setTotalAmount(total);
  };

  return (
    <div>
      <h1>Tip Calculator</h1>
      <div>
        <label htmlFor="billAmount">Bill Amount:</label>
        <input type="number" id="billAmount" value={billAmount} onChange={handleBillAmountChange} />
      </div>
      <div>
        <label htmlFor="tipPercentage">Tip Percentage:</label>
        <input type="number" id="tipPercentage" value={tipPercentage} onChange={handleTipPercentageChange} />
      </div>
      <button onClick={calculateTotalAmount}>Calculate Tip</button>
      <div>
        <h2>Total Amount: {totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default TipCalculator;
