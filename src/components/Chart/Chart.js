import React, { Component } from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const barValuesArray = props.expenseBars.map(expense => expense.value); // get values array from Expense Object
  const totalMax = Math.max(...barValuesArray);
  return (
    <div className='chart'>
      {props.expenseBars.map((bar) => (
        <ChartBar
          key={bar.label}
          label={bar.label}
          value={bar.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
