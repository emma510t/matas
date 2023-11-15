import { Card } from "antd";

export default function CardX(props, { children }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={props.name} />}
    >
      {children}
    </Card>
  );
}
