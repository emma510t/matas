"use client";
import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import FormX from "./FormX";

export default function ModalX() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 50;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 50;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Prøv test
      </Button>
      <Modal
        open={open}
        title="Title"
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="text" onClick={decline}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Button>,
          <Button key="submit" type="text" loading={loading} onClick={increase}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Button>,
        ]}
      >
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Progress percent={percent} />
        </div>
        <FormX percent={percent}></FormX>
      </Modal>
    </>
  );
}
