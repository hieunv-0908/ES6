import React from "react";
import { Outlet } from "react-router-dom";

type productType = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export const products: productType[] = [
    {
      id: "1",
      name: "Laptop Dell XPS 13",
      price: 36000000,
      description: "Laptop cao cấp, thiết kế mỏng nhẹ, hiệu năng mạnh mẽ.",
    },
    {
      id: "2",
      name: "iPhone 14 Pro",
      price: 30000000,
      description: "Điện thoại flagship của Apple với màn hình ProMotion và camera chất lượng cao.",
    },
    {
      id: "3",
      name: "Samsung Galaxy S22",
      price: 25000000,
      description: "Smartphone cao cấp của Samsung với hiệu năng mạnh mẽ và camera sắc nét.",
    },
    {
      id: "4",
      name: "Tai nghe Sony WH-1000XM4",
      price: 7000000,
      description: "Tai nghe chống ồn nổi tiếng với chất lượng âm thanh xuất sắc.",
    },
    {
      id: "5",
      name: "Apple Watch Series 8",
      price: 12000000,
      description: "Đồng hồ thông minh Apple Watch với nhiều tính năng theo dõi sức khỏe.",
    },
  ];

export default function Products() {
  return (
    <div>
      <Outlet context={{products}}/>
    </div>
  );
}