import React, { Component, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    // console.log(expense);
    props.onAddExpense(newExpense);
    setIsNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isNewExpense && <button onClick={()=>setIsNewExpense(true)}>Add New Expense</button>}
      {isNewExpense && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={()=>setIsNewExpense(false)}/>}
    </div>
  );
};

export default NewExpense;
