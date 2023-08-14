import React, { useState } from "react";
import { Input, Modal, message } from "antd";
import "./Upgrade.css";
import { makeRequest } from "../../../../network/api";

const Upgrade = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Upgraded to Premium",
      duration: 5,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const isValidEmail = (email) => {
    // Basic email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleOk = async () => {
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    try {
      const response = await makeRequest("subscribe", "POST", { email });

      setEmail("");
      setStatus("");
      setIsModalOpen(false);
      success();
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle error as needed
    }
  };

  const handleCancel = () => {
    setEmail("");
    setStatus("");
    setIsModalOpen(false);
  };

  return (
    <div className="upgarde">
      <div className="upgrade-descritpion">
        <h2 className="upgrade-mainText">
          Get Exclusive discounts for any payment method
        </h2>
        <p className="upgrade-secoundaryText">
          by upgrading your plan to premium
        </p>
      </div>
      <button className="upgradeButton" onClick={showModal}>
        Upgrade Now
      </button>
      {contextHolder}
      <Modal
        title="Upgrade to premium"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "#0e6ff7" },
        }}
      >
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder={status.length > 0 ? "Error" : "Email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email"
          status={status}
        />
      </Modal>
    </div>
  );
};

export default Upgrade;
