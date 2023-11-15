import { useState } from "react";
import { Checkbox } from "antd";
export default function FormX() {
  const [quiz, updateQuiz] = useState(1);
  return (
    <form>
      <Checkbox>Lotion</Checkbox>
      <Checkbox>Olie</Checkbox>
      <Checkbox>Serum</Checkbox>
      <Checkbox>Mousse</Checkbox>
    </form>
  );
}
