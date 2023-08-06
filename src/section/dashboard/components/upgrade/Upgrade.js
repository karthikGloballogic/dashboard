import React, { useState } from "react";
import { Input, Modal, message } from "antd";
import "./Upgrade.css";

const Upgrade = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState("");

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

  const handleOk = () => {
    setEmail("");
    setIsModalOpen(false);
    success();
  };

  const handleCancel = () => {
    setEmail("");
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
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
      </Modal>
    </div>
  );
};

export default Upgrade;
