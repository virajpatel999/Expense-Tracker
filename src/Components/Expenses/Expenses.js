import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredArray = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpenseChart expenses={filteredArray} />
        <ExpenseList items={filteredArray} />
      </Card>
    </div>
  );
}

export default Expenses;
