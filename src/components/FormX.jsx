import React, { useState } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({ percent }) {
  const content = () => {
    if (percent === 0) {
      return (
        <>
          <Checkbox className=" text-base">Lotion</Checkbox>
          <Checkbox className=" text-base">Olie</Checkbox>
          <Checkbox className=" text-base">Serum</Checkbox>
          <Checkbox className=" text-base">Mousse</Checkbox>
        </>
      );
    } else if (percent === 50) {
      return (
        <>
          <div className="grid grid-cols-2 gap-1.5">
            <Button className="flex justify-center items-center text-base" value="a">
              Nyheder
            </Button>
            <Button className="flex justify-center items-center text-base" value="b">
              Bestseller
            </Button>
            <Button className="flex justify-center items-center text-base" value="c">
              Beijing
            </Button>
            <Button className="flex justify-center items-center text-base" value="d">
              Chengdu
            </Button>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <form className="flex flex-col">{content()}</form>
    </>
  );
}
