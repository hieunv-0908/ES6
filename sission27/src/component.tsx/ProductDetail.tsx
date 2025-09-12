import React from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

type productType = {
    id: string;
    name: string;
    price: number;
    description: string;
};

type outletType = {
    products: productType[];
};

export default function ProductDetail() {
    const { products } = useOutletContext<outletType>();
    const { id } = useParams();
    const navigate = useNavigate()

    const productDetail = products.find((p) => p.id === id);

    if (!productDetail) {
        return <p className="text-red-500">Sản phẩm không tồn tại</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{productDetail.name}</h2>
            <p className="text-gray-600 mb-2">{productDetail.description}</p>
            <p className="text-blue-600 font-bold text-xl">
                {productDetail.price.toLocaleString("vi-VN")} ₫
            </p>
            <p className="text-blue-600 font-bold text-xl" onClick={()=>navigate(-1)}>
                Trở về list
            </p>
        </div>
    );
}
