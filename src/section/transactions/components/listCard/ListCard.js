import React from "react";
import { DollarOutlined, MobileOutlined } from "@ant-design/icons";
import "./ListCard.css";

const ListCard = ({ data }) => {
  return (
    <div
      className="transaction-card"
      key={data.id}
      aria-label={`Transaction on ${data.date}`}
      role="listitem"
    >
      <div style={{ display: "flex", gap: "13px" }}>
        {data.type === "debit" ? (
          <div
            className="transaction-icon-cover"
            style={{ backgroundColor: "#ffe4db" }}
          >
            <MobileOutlined
              className="transaction-icon"
              aria-label="Mobile Icon for Debit Transaction"
            />
          </div>
        ) : (
          <div
            className="transaction-icon-cover"
            style={{ backgroundColor: "#e1f6df" }}
          >
            <DollarOutlined
              className="transaction-icon"
              style={{ color: "#60ce6f" }}
              aria-label="Dollar Icon for Credit Transaction"
            />
          </div>
        )}

        <div className="transaction-description">
          <p className="transaction-name">{data.name}</p>
          <p className="transaction-date">June 20, 2022</p>
        </div>
      </div>
      <div className="transaction-charges">
        {data.type === "credit" ? (
          <p
            className="transaction-price"
            style={{ color: "green" }}
            aria-label={`Debit Amount: $${data.amount}`}
          >
            {`+$${data.amount}`}
          </p>
        ) : (
          <p
            className="transaction-price"
            style={{ color: "#dc3353" }}
            aria-label={`Credit Amount: $${data.amount}`}
          >
            {`-$${data.amount}`}
          </p>
        )}

        <p className="transaction-type">Data</p>
      </div>
    </div>
  );
};

export default ListCard;
