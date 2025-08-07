type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

const listProduct: Product[] = [
  {
    id: "P001",
    name: "Áo thun",
    price: 200000,
    category: {
      id: "C001",
      name: "Thời trang",
    },
    discount: 0.1,
  },
  {
    id: "P002",
    name: "Giày thể thao",
    price: 500000,
    category: {
      id: "C002",
      name: "Giày dép",
    },
  },
  {
    id: "P003",
    name: "Balo laptop",
    price: 300000,
    category: {
      id: "C003",
      name: "Phụ kiện",
    },
    discount: 0.15,
  },
];

function getFinalPrice(product: Product): number {
  const discount = product.discount ?? 0;
  return product.price * (1 - discount);
}

function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(
    `Sản phẩm: ${product.name} - Danh mục: ${product.category.name} - Giá: ${finalPrice} VNĐ`
  );
}
