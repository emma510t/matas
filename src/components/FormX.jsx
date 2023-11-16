import React, { useState } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({ percent }) {
  const content = () => {
    if (percent === 0) {
      return (
        <>
          <Checkbox>Lotion</Checkbox>
          <Checkbox>Olie</Checkbox>
          <Checkbox>Serum</Checkbox>
          <Checkbox>Mousse</Checkbox>
        </>
      );
    } else if (percent === 50) {
      return (
        <>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="a">Nyheder</Radio.Button>
            <Radio.Button value="b">Bestseller</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </>
      );
    } else {
      return (
        <>
          <p className="font-semibold text-xl mb-2">Materialistens tip</p>
          <p className="text-base mb-4">
            Kig efter ECOCERT-mærket, hvis du leder efter certificeret økologisk
            hudpleje, hårpleje og make-up.
          </p>
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
      <form>{content()}</form>
    </>
  );
}
