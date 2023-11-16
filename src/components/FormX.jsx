import React, { useState } from "react";
import { Checkbox, Radio } from "antd";

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
      return <></>;
    }
  };

  return (
    <>
      <form>{content()}</form>
    </>
  );
}
