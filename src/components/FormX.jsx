import React, { useState } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({ percent }) {
  const content = () => {
    if (percent === 0) {
      return (
        <>
          <p className="uppercase text-xs">Hudpleje</p>
          <p className="font-semibold text-xl mb-2">Jeg leder efter</p>
          <p className="text-xs ">Vælg 1 og maks. 3</p>
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
            <Button
              className="flex justify-center items-center text-base"
              value="a"
            >
              Nyheder
            </Button>
            <Button
              className="flex justify-center items-center text-base"
              value="b"
            >
              Bestseller
            </Button>
            <Button
              className="flex justify-center items-center text-base"
              value="c"
            >
              Beijing
            </Button>
            <Button
              className="flex justify-center items-center text-base"
              value="d"
            >
              Chengdu
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p className="font-semibold text-xl mb-2">Materialistens tip</p>
          <p className="text-base mb-4">Kig efter ECOCERT-mærket, hvis du leder efter certificeret økologisk hudpleje, hårpleje og make-up.</p>
          <div className="flex justify-center">
            <Button className="text-base" onClick={() => {}}>
              Se dit resultat
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <form className="flex flex-col">{content()}</form>
    </>
  );
}
