import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barfill = "0%";

  if (props.maxVal > 0) {
    barfill = Math.round((props.value / props.maxVal) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barfill }}></div>
      </div>
      <div className="chart-bar__lable">{props.lable}</div>
    </div>
  );
}

export default ChartBar;
