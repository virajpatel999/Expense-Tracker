import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Bday Party",
    amount: 2200,
    date: new Date(2021, 7, 21)
  },
  {
    id: "e2",
    title: "Gym",
    amount: 1500,
    date: new Date(2023, 8, 15)
  },
  {
    id: "e3",
    title: "Monitor",
    amount: 11000,
    date: new Date(2022, 10, 20)
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
