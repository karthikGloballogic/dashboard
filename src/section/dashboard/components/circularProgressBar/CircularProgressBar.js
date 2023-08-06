import React, { useEffect, useState } from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ percentage, color, degree }) => {
  const [offset, setOffset] = useState(0);

  const strokeWidth = 5;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progress = (circumference * (100 - percentage)) / 100;
    setOffset(progress);
  }, [percentage, circumference]);

  return (
    <span
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label={`Progress: ${percentage}%`}
    >
      <svg
        className="progress-ring"
        height="50"
        width="50"
        aria-hidden="true"
        // style={{ transform: `rotate(${degree}deg)` }}
      >
        <circle
          className="progress-ring-circle"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
          role="presentation"
        />
        <circle
          className="progress-ring-circle progress-bar"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
          style={{
            stroke: color,
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
          role="presentation"
        />
      </svg>
    </span>
  );
};

export default CircularProgressBar;
