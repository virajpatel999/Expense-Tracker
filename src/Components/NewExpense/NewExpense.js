import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEdit, setIsEdit] = useState(false);

  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10).toString()
    };
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };

  const startEdit = () => {
    setIsEdit(true);
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEdit}>Add New Expense</button>}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
}

export default NewExpense;
