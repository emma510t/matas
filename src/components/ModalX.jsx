"use client";
import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import FormX from "./FormX";

export default function ModalX() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [productTypes, setProductTypes] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [productTypeError, setProductTypeError] = useState("");
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const increase = () => {
    setPercent((prevPercent) => {
      if (prevPercent === 0 && productTypes.length > 0) {
        return 50;
      } else if (prevPercent === 0) {
        setProductTypeError("Du skal vælge mindst 1");
      } else if (prevPercent === 50 && productCategory.length > 0) {
        return 100;
      } else if (prevPercent === 50) {
        setProductTypeError("Du skal vælge 1");
      }
      return prevPercent;
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
      <div className="flex justify-center">
        <Button type="text" onClick={showModal}>
          <div className="underline font-semibold">TAG TESTEN</div>
        </Button>
      </div>
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={[
          <div key="back" className="flex justify-center">
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
            </Button>
            <Button
              key="submit"
              type="text"
              loading={loading}
              onClick={increase}
            >
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
            </Button>
          </div>,
        ]}
      >
        <div className="w-full aspect-[4/1] bg-matas-blue overflow-hidden">
          <img
            className="object-cover block"
            src="/img/oekologisk-hudpleje.jpg"
          ></img>
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Progress className="pt-7" percent={percent} />
        </div>
        <FormX
          percent={percent}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          productTypeError={productTypeError}
        ></FormX>
      </Modal>
    </>
  );
}
