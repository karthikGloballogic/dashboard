import React, { useEffect, useState } from "react";
import "./Transactions.css";
import {
  QuestionOutlined,
  EllipsisOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Dropdown, Modal, Input, Select } from "antd";
import ListCard from "./components/listCard/ListCard";
import CreditCard from "./components/creditCard/creditCard";
import { makeRequest } from "../../network/api";

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
  const [type, setType] = useState("debit");
  const [nameStatus, setNameStatus] = useState("");
  const [amountStatus, setAmountStatus] = useState("");
  const [typeStatus, setTypeStatus] = useState("");

  useEffect(() => {
    getTransactionList();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!name) {
      // Display an error message
      setNameStatus("error");
      return;
    }

    if (!amount) {
      // Display an error message
      setAmountStatus("error");
      return;
    }

    if (!type) {
      // Display an error message
      setTypeStatus("error");
      return;
    }

    let payload = {
      name: name,
      amount: amount,
      type: type,
      id: list.length,
    };
    // setList((prev) => {
    //   return [...prev, payload];
    // });

    try {
      const response = await makeRequest("createTransaction", "POST", {
        name,
        amount: parseInt(amount),
        type,
      });
      getTransactionList();

      setIsModalOpen(false);
      setName("");
      setAmount("");
      setType("");
      setNameStatus("");
      setAmountStatus("");
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle error as needed
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNameStatus("");
    setAmountStatus("");
    setName("");
    setAmount("");
    setType("");
  };

  // const handleChange = (value) => {
  //   setType(value);
  // };

  const handleChange = (value) => {
    setType(value.target.value);
  };

  const getTransactionList = async () => {
    try {
      const response = await makeRequest("transactionList");
      setList(response);
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle error as needed
    }
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
          {/* <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            aria-label="Recent Transactions Menu"
          > */}
          <a href="#" onClick={showModal} aria-label="Open Transactions Menu">
            <EllipsisOutlined tabIndex={0} onClick={showModal} />
          </a>
          {/* </Dropdown> */}
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
            placeholder={nameStatus.length > 0 ? "Error" : "Transaction Name"}
            style={{ marginBottom: "10px", marginTop: "6px" }}
            value={name}
            onChange={(val) => setName(val.target.value)}
            status={name.length < 1 ? nameStatus : ""}
          />
          <label htmlFor="transactionAmount">Amount</label>
          <Input
            id="transactionAmount"
            placeholder={amountStatus.length > 0 ? "Error" : "Amount"}
            style={{ marginBottom: "10px", marginTop: "6px" }}
            value={amount}
            type="number"
            min={1}
            status={amount.length < 1 ? amountStatus : ""}
            onChange={(val) => setAmount(val.target.value)}
          />
          <label htmlFor="transactionType">Type</label>
          {/* <Select
            id="transactionType"
            defaultValue="Select"
            style={{
              width: "100%",
              marginTop: "6px",
            }}
            status={typeStatus}
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
          /> */}
          <select
            id="transactionType"
            className="select"
            aria-label="Transaction Type"
            onChange={handleChange}
          >
            <option value="credit" aria-label="credit">
              Credit
            </option>
            <option value="debit" aria-label="debit">
              Debit
            </option>
          </select>
        </Modal>
      </div>
    </aside>
  );
};

export default Transactions;
