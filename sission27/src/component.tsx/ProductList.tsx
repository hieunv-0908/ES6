import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom";

type productType = {
  id: string;
  name: string;
  price: number;
  description: string;
};

type outletType = {
  products: productType[];
};

export default function ProductList() {
  const { products } = useOutletContext<outletType>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string>(searchParams.get("q") || "");

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = () => {
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  const query = searchParams.get("q");

  const productById = query && products.find((p) => p.id === query);

  const productByName = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  if (query) {
    if (productById) {
      const p = productById;
      return (
        <div className="p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{p.name}</h2>
          <p className="text-gray-700 mb-4">{p.description}</p>
          <p className="text-blue-600 font-bold mb-4">{p.price.toLocaleString("vi-VN")} ₫</p>
          <button
            onClick={() => setSearchParams({})}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Quay lại danh sách
          </button>
        </div>
      );
    }

    if (productByName.length > 0) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Kết quả tìm kiếm cho "{query}"</h2>
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Nhập tên sản phẩm"
              className="border rounded px-3 py-2 flex-1"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Tìm
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productByName.map((p) => (
              <div
                key={p.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-gray-600">{p.description}</p>
                <p className="text-blue-600 font-bold mt-2">{p.price.toLocaleString("vi-VN")} ₫</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 max-w-xl mx-auto">
        <p className="text-red-500 font-bold mb-4">Không tìm thấy sản phẩm nào!</p>
        <button
          onClick={() => setSearchParams({})}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Quay lại danh sách
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập tên sản phẩm hoặc id"
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Tìm
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-blue-600 font-bold mt-2">{p.price.toLocaleString("vi-VN")} ₫</p>
          </div>
        ))}
      </div>
    </div>
  );
}
