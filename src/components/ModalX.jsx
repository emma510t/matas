"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
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
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Prøv test
      </Button>
      <Modal open={open} onCancel={handleCancel} title="Title">
        <FormX></FormX>
      </Modal>
    </>
  );
}
