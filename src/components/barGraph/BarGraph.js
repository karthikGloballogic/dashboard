import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import "./BarGraph.css";

const BarGraph = ({ name, income, desc, color }) => {
  const data = {
    points: [100, 30, 100, 80, 60, 100, 100],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  };

  return (
    <div className="barGraph" role="figure" aria-label={name}>
      <div className="graph-header">
        <h4 className="barGraph-name">{name}</h4>
        <EllipsisOutlined />
      </div>
      <div>
        <span className="graph-desc" aria-label={`${income} ${desc}`}>
          <b>${income}</b>
          {"  " + desc}
        </span>
      </div>

      {/*Graph Bars  */}
      <div className="graph-bar" role="bar container">
        <div className="bars-container">
          {data.points.map((item, index) => {
            return (
              <div className="bar-holder" key={index} role="bar percentage">
                <span
                  className="bar"
                  style={{ backgroundColor: color, height: `${item}px` }}
                >
                  &nbsp;
                </span>
                <p className="label">{data.labels[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
