import React from "react";
import "./creditCard.css";
import { Carousel, Tooltip } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import cardImage from "../../../../assets/images/card.svg";
import yellowCardImage from "../../../../assets/images/card2.svg";

const CreditCard = () => {
  const divStyle = {
    backgroundImage: `url(${cardImage})`,
    // backgroundColor: "#535cc3",
  };

  const yellowCard = {
    backgroundImage: `url(${yellowCardImage})`,
    // backgroundColor: "#ff9a3e",
  };

  return (
    <Carousel
      style={{ width: "360px" }}
      dots={false}
      autoplay
      waitForAnimate={true}
    >
      <div>
        <div
          className="credit-card"
          style={divStyle}
          aria-label="GlobalLogic Credit Card"
        >
          <div className="credit-left">
            <p className="bankName">Bank of GlobalLogic</p>
            <div>
              <p className="bankBalance">Balance</p>
              <p className="balance">$12000.00</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p className="visa">VISA</p>
            <Tooltip
              title="Terms & Condition"
              aria-label="Tooltip for Terms & Conditions of GlobalLogic Credit Card"
            >
              <QuestionOutlined
                className="question"
                aria-label="Question icon"
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div>
        <div
          className="credit-card"
          style={yellowCard}
          aria-label="WorkForce Credit Card"
        >
          <div className="credit-left">
            <p className="bankName">Bank of WorkForce</p>
            <div>
              <p className="bankBalance">Balance</p>
              <p className="balance">$800.00</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p className="visa">VISA</p>
            <Tooltip
              title="Terms & Condition"
              aria-label="Tooltip for Terms & Conditions of WorkForce Credit Card"
            >
              <QuestionOutlined
                className="question"
                aria-label="Question icon"
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CreditCard;
