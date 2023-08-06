import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Upgrade from "./components/upgrade/Upgrade";
import {
  CreditCardOutlined,
  EllipsisOutlined,
  FireOutlined,
  GiftOutlined,
  MobileOutlined,
  ShoppingOutlined,
  StockOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";
import CircularProgressBar from "./components/circularProgressBar/CircularProgressBar";
import BarGraph from "../../components/barGraph/BarGraph";

const Dashboard = (props) => {
  return (
    <main className="dashboard" aria-label="Main Content">
      <div className="dashboard-header">
        <h1>Overview</h1>
        <SearchBar />
      </div>

      {/* Subscription */}
      <Upgrade />

      {/* Menu */}
      <div className="quick-access" aria-label="Quick Access">
        <h3>Quick Access</h3>
        <div className="quick-menu">
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Transfer"
            role="button"
          >
            <CreditCardOutlined className="quick-link-icon" />
            <p className="quick-link-text">Transfer</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Data"
            role="button"
          >
            <MobileOutlined className="quick-link-icon" />
            <p className="quick-link-text">Data</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Gas"
            role="button"
          >
            <FireOutlined className="quick-link-icon" />
            <p className="quick-link-text">Gas</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Stocks"
            role="button"
          >
            <StockOutlined className="quick-link-icon" />
            <p className="quick-link-text">Stocks</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Shopping"
            role="button"
          >
            <ShoppingOutlined className="quick-link-icon" />
            <p className="quick-link-text">Shopping</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Electricity"
            role="button"
          >
            <ThunderboltOutlined className="quick-link-icon" />
            <p className="quick-link-text">Electricity</p>
          </div>
          <div
            className="quick-link"
            tabIndex={0}
            aria-label="Gifts"
            role="button"
          >
            <GiftOutlined className="quick-link-icon" />
            <p className="quick-link-text">Gifts</p>
          </div>
        </div>
      </div>

      {/* Graphs */}
      <div className="graph-container">
        <BarGraph
          name={"Expense"}
          desc={"Money out for this week"}
          income={"230.00"}
          color={"#ff9a3e"}
          aria-label="Expense Graph"
        />
        <BarGraph
          name={"Income"}
          desc={"Income on this week"}
          income={"1050.00"}
          color={"#535bc8"}
          aria-label="Income Graph"
        />
      </div>

      {/* Bottom Section */}
      <div className="spending-container" aria-label="Spending Overview">
        <div>
          <div className="spending-header">
            <h4>Spening Overview</h4>
            <EllipsisOutlined />
          </div>
          <div className="spending-overview">
            <CircularProgressBar
              percentage={25}
              color={"#fe5575"}
              // degree={"90"}
            />
            <p className="desc">25% use of hobies</p>
            <p className="transaction-debt-credit">-$500.00</p>
          </div>
          <div className="spending-overview">
            <CircularProgressBar percentage={50} color={"#fcad4b"} />
            <p className="desc">50% use for ATM</p>
            <p className="transaction-debt-credit">-$500.00</p>
          </div>
        </div>
        <div>
          <div className="spending-header">
            <h4>Income Overview</h4>
            <EllipsisOutlined />
          </div>
          <div className="spending-overview">
            <CircularProgressBar
              percentage={75}
              color={"#6acd83"}
              degree={"90"}
            />
            <p className="desc">75% from grphois</p>
            <p className="transaction-debt-credit" style={{ color: "#2e7d32" }}>
              +$500.00
            </p>
          </div>
          <div className="spending-overview">
            <CircularProgressBar percentage={100} color={"#32d1f7"} />
            <p className="desc">100% from friends</p>
            <p className="transaction-debt-credit" style={{ color: "#2e7d32" }}>
              +$500.00
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
