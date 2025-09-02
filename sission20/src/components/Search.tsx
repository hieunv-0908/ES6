import React, { useReducer, ChangeEvent } from "react";

type State = {
  status: boolean;
  keyword: string;
  results: typeof data;
};

type Action =
  | { type: "None" }
  | { type: "Search"; payload: string };

const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "None":
      return { status: false, keyword: "", results: [] };
    case "Search":
      const keyword = action.payload.toLowerCase();
      const results = data.filter(
        (d) =>
          d.name.toLowerCase().includes(keyword) ||
          d.description.toLowerCase().includes(keyword)
      );
      return { status: true, keyword: action.payload, results };
    default:
      return state;
  }
};

export default function Search() {
  const [state, dispatch] = useReducer(reducer, {
    status: false,
    keyword: "",
    results: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      dispatch({ type: "None" });
    } else {
      dispatch({ type: "Search", payload: value });
    }
  };

  return (
    <div>
      <h1>Tìm kiếm sản phẩm</h1>
      <input
        type="text"
        name="search"
        placeholder="Nhập từ khoá tìm kiếm"
        onChange={handleChange}
      />
      <span>
        {" "}
        {state.status
          ? `${state.results.length} kết quả được tìm thấy`
          : "Chưa tìm kiếm"}{" "}
      </span>
      <div className="containerItem">
        {state.status &&
          state.results.map((d) => (
            <div key={d.id}>
              <strong>{d.name}</strong> - <span>{d.description}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
