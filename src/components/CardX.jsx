"use client";
import { Card } from "antd";

export default function CardX({ children, name }) {
  return (
    <Card className="rounded-lg" hoverable style={{ width: 240 }} cover={<img alt="example" src={name} className="rounded-t-lg" id="rounded" />}>
      {children}
    </Card>
  );
}
