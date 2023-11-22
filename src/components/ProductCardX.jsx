"use client";
import { Card } from "antd";

export default function ProductCardX({ children, image }) {
  return (
    <Card
      className="rounded-lg"
      hoverable
      style={{ width: 240 }}
      cover={
        <div id="image_container">
          <img src={image} className="rounded-t-lg" id="rounded" />
        </div>
      }
    >
      {children}
    </Card>
  );
}
