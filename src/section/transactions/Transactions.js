import React, { useState } from "react";
import "./Transactions.css";
import {
  QuestionOutlined,
  EllipsisOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Tooltip, Dropdown, Modal, Input, Select } from "antd";
import ListCard from "./components/listCard/ListCard";
import CreditCard from "./components/creditCard/creditCard";

const sampleData = {
  name: "Mobile Recharge",
  amount: "100",
  type: "debit",
  id: 0,
};

const Transactions = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([sampleData]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    let payload = {
      name: name,
      amount: amount,
      type: type,
      id: list.length,
    };
    setList((prev) => {
      return [...prev, payload];
    });

    setIsModalOpen(false);
    setName("");
    setAmount("");
    setType("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    setType(value);
  };

  const items = [
    {
      key: "1",
      label: <a href="#">View Transactions</a>,
    },
    {
      key: "2",
      label: (
        <a href="#" onClick={showModal}>
          Add Transaction
        </a>
      ),
    },
  ];

  return (
    <aside className="transactions" aria-label="Transactions">
      <div className="transactions-header">
        <h4>Your Card</h4>
        <CreditCard />
      </div>
      <div className="transactions-body">
        <div className="recent-header">
          <h4>Recent Transactions</h4>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            aria-label="Recent Transactions Menu"
          >
            <a href="#" onClick={showModal} aria-label="Open Transactions Menu">
              <EllipsisOutlined tabIndex={0} />
            </a>
          </Dropdown>
        </div>
        <div className="recent-transaction-body">
          {list.map((item, index) => {
            return <ListCard data={item} key={index} />;
          })}
        </div>
        <Modal
          title="Add Transaction"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          aria-label="Add Transaction Modal"
          okButtonProps={{
            style: { backgroundColor: "#0e6ff7" },
          }}
        >
          <label htmlFor="transactionName">Name</label>
          <Input
            id="transactionName"
            placeholder="Transaction Name"
            style={{ marginBottom: "10px", marginTop: "6px" }}
            value={name}
            onChange={(val) => setName(val.target.value)}
          />
          <label htmlFor="transactionAmount">Amount</label>
          <Input
            id="transactionAmount"
            placeholder="Amount"
            style={{ marginBottom: "10px", marginTop: "6px" }}
            value={amount}
            onChange={(val) => setAmount(val.target.value)}
          />
          <label htmlFor="transactionType">Type</label>
          <Select
            id="transactionType"
            defaultValue="Debit"
            style={{
              width: "100%",
              marginTop: "6px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "debit",
                label: "Debit",
              },
              {
                value: "credit",
                label: "Credit",
              },
            ]}
            aria-label="Transaction Type Select"
          />
        </Modal>
      </div>
    </aside>
  );
};

export default Transactions;
