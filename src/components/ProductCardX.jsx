"use client";
import { Card } from "antd";

export default function ProductCardX({ children, name }) {
  return (
    <Card
      className="rounded-lg"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://images.matas.dk/trs/w730//Assets_v3/600001-700000/653001-654000/653601-653700/653653/product_v1_x2.jpg" className="rounded-t-lg" id="rounded" />}
    >
      {children}
    </Card>
  );
}
