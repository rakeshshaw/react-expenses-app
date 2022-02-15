import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const filterHandler = (selectedValue) => {
    console.log(selectedValue);
    setFilter(selectedValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onSelected={filterHandler} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
      {/* <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      /> */}
    </Card>
  );
};

export default Expenses;
