"use client";
import { Card } from "antd";

export default function CardX({ children, name }) {
  return (
    <Card
      className="w-44 md:w-60 rounded-lg"
      hoverable
      cover={
        <img alt="example" src={name} className="rounded-t-lg" id="rounded" />
      }
    >
      {children}
    </Card>
  );
}
