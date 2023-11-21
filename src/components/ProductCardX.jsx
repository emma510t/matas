"use client";
import { Card } from "antd";

export default function ProductCardX({ children, image }) {
  return (
    <Card className="rounded-lg" hoverable style={{ width: 240 }} cover={<img alt="example" src={image} className="rounded-t-lg" id="rounded" />}>
      {children}
    </Card>
  );
}
