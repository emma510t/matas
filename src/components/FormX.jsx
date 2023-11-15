import React, { useState } from "react";
import { Checkbox, Radio } from "antd";

export default function FormX() {
  const [quiz, updateQuiz] = useState(1);

  function updater() {
    updateQuiz((o) => o + 1);
  }

  const content = () => {
    if (quiz === 1) {
      return (
        <>
          <Checkbox>Lotion</Checkbox>
          <Checkbox>Olie</Checkbox>
          <Checkbox>Serum</Checkbox>
          <Checkbox>Mousse</Checkbox>
        </>
      );
    } else if (quiz === 2) {
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
