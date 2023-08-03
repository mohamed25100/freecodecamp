function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price; // Change 'const' to 'let'
  let change = [];

  const totalCid = cid.reduce((total, [, amount]) => total + amount, 0);

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    const [unit, availableAmount] = cid[i];
    const unitValue = currencyUnitValues[unit];
    const maxUnitsToUse = Math.floor(availableAmount / unitValue);
    const unitsToUse = Math.floor(changeDue / unitValue);

    if (unitsToUse > 0) {
      const changeAmount = Math.min(unitsToUse, maxUnitsToUse) * unitValue;
      change.push([unit, changeAmount]);
      changeDue = (changeDue - changeAmount).toFixed(2);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
