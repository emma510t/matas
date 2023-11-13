"use client";
import { Button, Card, Modal, Checkbox } from "antd";
import React, { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button danger>Button</Button>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <p>hej</p>
        <Button onClick={showModal}>prøv vores quiz</Button>
      </Card>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button key="link" href="https://google.com" type="primary" loading={loading} onClick={handleOk}>
            Search on Google
          </Button>,
        ]}
      >
        <Checkbox>Checkbox</Checkbox>
      </Modal>
    </>
  );
}
