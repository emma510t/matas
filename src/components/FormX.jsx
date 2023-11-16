import React, { useState } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({ percent }) {
  const content = () => {
    if (percent === 0) {
      return (
        <>
          <p className="uppercase text-xs leading-7">Hudpleje</p>
          <p className="font-semibold text-xl mb-2 leading-5">Jeg leder efter</p>
          <p className="text-xs ">Vælg 1 og maks. 3</p>
          <div className="flex flex-col mt-2 gap-2">
            <Checkbox className=" text-base">Lotion</Checkbox>
            <Checkbox className=" text-base">Olie</Checkbox>
            <Checkbox className=" text-base">Serum</Checkbox>
            <Checkbox className=" text-base">Mousse</Checkbox>
          </div>
        </>
      );
    } else if (percent === 50) {
      return (
        <>
          <p className="uppercase text-xs leading-7">Hudpleje</p>
          <p className="font-semibold text-xl mb-2 leading-5">Jeg leder efter et produkt i</p>
          <p className="text-xs ">Vælg 1</p>
          <div className="grid grid-cols-2 gap-1.5 mt-2">
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
      return (
        <>
          <p className="font-semibold text-xl mb-2">Materialistens tip</p>
          <p className="text-base mb-4">Kig efter ECOCERT-mærket, hvis du leder efter certificeret økologisk hudpleje, hårpleje og make-up.</p>
          <div className="flex justify-center">
            <Button className="text-base bg-matas-blue text-white" onClick={() => {}}>
              Se dit resultat
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <form className="flex flex-col gap-1">{content()}</form>
    </>
  );
}
