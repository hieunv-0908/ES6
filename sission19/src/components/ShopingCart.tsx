import { useMemo, useState } from "react";

type Item = { id: number; name: string; price: number; quantity: number };

export default function ShoppingCart() {
  const [cartItems] = useState<Item[]>([
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  ]);

  const total = useMemo(
    () => cartItems.reduce((s, i) => s + i.price * i.quantity, 0),
    [cartItems]
  );

  return (
    <div
      style={{ maxWidth: 640, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Giỏ hàng</h2>
      <table
        width="100%"
        cellPadding={8}
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th align="left">Tên</th>
            <th align="right">Giá</th>
            <th align="right">SL</th>
            <th align="right">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((it) => (
            <tr key={it.id} style={{ borderTop: "1px solid #ddd" }}>
              <td>{it.name}</td>
              <td align="right">{it.price.toLocaleString("vi-VN")}</td>
              <td align="right">{it.quantity}</td>
              <td align="right">
                {(it.price * it.quantity).toLocaleString("vi-VN")}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ borderTop: "2px solid #000" }}>
            <td colSpan={3} align="right">
              <b>Tổng:</b>
            </td>
            <td align="right">
              <b>{total.toLocaleString("vi-VN")} ₫</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}