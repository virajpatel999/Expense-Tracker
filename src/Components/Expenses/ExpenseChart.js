import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
  const chartDatapoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 }
  ];

  for (const expense of props.expenses) {
    chartDatapoints[expense.date.getMonth()].value += expense.amount;
  }

  return <Chart datapoints={chartDatapoints} />;
}

export default ExpenseChart;
