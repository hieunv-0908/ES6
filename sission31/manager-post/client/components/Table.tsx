import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    image: string;
    date: string;
    status: string;
}

function Table() {
    const [data, setData] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get<Post[]>("http://localhost:3000/post");
                setData(res.data);
                console.log("Lấy thành công dữ liệu");
            } catch (err: any) {
                console.error("Có lỗi khi lấy dữ liệu:", err);
                setError("Không thể tải dữ liệu");
            }
        }

        fetchData();
    }, []);

    if (error) return <div>{error}</div>;
    if (data.length === 0) return <div>Đang tải...</div>;

    return (
        <div style={{ margin: "20px", overflowX: "auto", width: "100%" }}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <thead>
                    <tr>
                        <th style={thStyle}>STT</th>
                        <th style={thStyle}>Tiêu đề</th>
                        <th style={thStyle}>Hình ảnh</th>
                        <th style={thStyle}>Ngày viết</th>
                        <th style={thStyle}>Trạng thái</th>
                        <th style={thStyle}>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td style={tdStyle}>{index + 1}</td>
                            <td style={tdStyle}>{item.title}</td>
                            <td style={tdStyle}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    }}
                                />
                            </td>
                            <td style={tdStyle}>{item.date}</td>
                            <td style={tdStyle}>
                                <span
                                    style={{
                                        padding: "4px",
                                        borderRadius: "6px",
                                        fontSize: "14px",
                                        backgroundColor: "#e6f7e6",
                                        color: "#2e8b57",
                                        border: "1px solid #2e8b57",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {item.status.toString()}
                                </span>
                            </td>
                            <td style={{ ...tdStyle, display: "flex", gap: "4px" }}>
                                <button style={{ ...btnStyle, backgroundColor: "#f0ad4e" }}>
                                    Chỉnh
                                </button>
                                <button style={{ ...btnStyle, backgroundColor: "#5bc0de" }}>
                                    Xem
                                </button>
                                <button style={{ ...btnStyle, backgroundColor: "#d9534f" }}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const thStyle: React.CSSProperties = {
    padding: "12px",
    border: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
    padding: "12px",
    border: "1px solid #ddd",
};

const btnStyle: React.CSSProperties = {
    border: "none",
    padding: "6px 12px",
    margin: "0 2px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    color: "white",
};

export default Table;
