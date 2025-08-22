import React, { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    productCode: "",
    productName: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(product); 
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Thêm mới sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã sản phẩm</label>
          <input
            type="text"
            name="productCode"
            value={product.productCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Giá</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Số lượng</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default ProductForm;
