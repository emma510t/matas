"use client";
import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import FormX from "./FormX";

export default function ModalX() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [percent, setPercent] = useState(0);
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
        onCancel={decline}
        onOk={increase}
        okText={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        }
        cancelText="Forrige"
        okType="text"
        cancelType="text"
        title="Title"
      >
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Progress percent={percent} />
        </div>
        <FormX increase={increase}></FormX>
      </Modal>
    </>
  );
}
