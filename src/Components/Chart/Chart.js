import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValue = props.datapoints.map((datapoint) => datapoint.value);
  const maxDataPoint = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxVal={maxDataPoint}
          lable={datapoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
