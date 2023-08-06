import React, { useState } from "react";
import karthik from "../../assets/images/karthikEdited.jpg";
import {
  HomeOutlined,
  BarChartOutlined,
  SettingOutlined,
  CreditCardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Navigation.css";

const Navigation = (props) => {
  const [actionNav, setActiveNav] = useState("home");

  return (
    <div className="navigation-container" aria-label="Side Navigation">
      <div className="profile-container">
        <img
          src={karthik}
          alt="profile pic"
          tabIndex={0}
          role="img"
          aria-label="Profile picture"
        />
      </div>
      <nav className="navigation-links">
        <a
          href="./home"
          className="link"
          title="Home"
          onClick={() => setActiveNav("home")}
          style={{
            backgroundColor: actionNav === "home" ? "#efeff9" : "white",
          }}
        >
          <HomeOutlined
            style={{ color: "#535cc3" }}
            className="navigation-icon"
          />
        </a>
        <a
          href="./reports"
          className="link"
          title="Reports"
          onClick={() => setActiveNav("reports")}
          style={{
            backgroundColor: actionNav === "reports" ? "#efeff9" : "white",
          }}
        >
          <BarChartOutlined
            style={{ color: "black" }}
            className="navigation-icon"
          />
        </a>
        <a
          href="./payment"
          className="link"
          title="Payments"
          onClick={() => setActiveNav("payments")}
          style={{
            backgroundColor: actionNav === "payments" ? "#efeff9" : "white",
          }}
        >
          <CreditCardOutlined
            style={{ color: "black" }}
            className="navigation-icon"
          />
        </a>
        <a
          href="./settings"
          className="link"
          title="Settings"
          onClick={() => setActiveNav("settings")}
          style={{
            backgroundColor: actionNav === "settings" ? "#efeff9" : "white",
          }}
        >
          <SettingOutlined
            style={{ color: "black" }}
            className="navigation-icon"
          />
        </a>
      </nav>
      <div className="logout-container">
        <a href="./logout">
          <LogoutOutlined
            style={{ color: "black" }}
            className="navigation-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
