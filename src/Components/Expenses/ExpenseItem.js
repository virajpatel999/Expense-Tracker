import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const click = () => {
    setTitle("NewTitle");
    console.log("Clicked!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
          <button onClick={click}>Edit</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
