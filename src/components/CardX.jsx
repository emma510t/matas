import { Card } from "antd";

export default function CardX({ children, name }) {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={name} />}>
      {children}
    </Card>
  );
}
