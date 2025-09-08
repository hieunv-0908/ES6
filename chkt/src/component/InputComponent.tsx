import React, { useState } from 'react'

type listType = {
    id: number;
    name: string;
}

type propsType = {
    list: listType[];
    setList: React.Dispatch<React.SetStateAction<listType[]>>;
}

export default function InputComponent({ list, setList }: propsType) {
    const [valueTemp, setValueTemp] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTemp(e.target.value);
    }

    const handleAdd = () => {
        const trimmed = valueTemp.trim();
        if (!trimmed) return;

        const newItem: listType = {
            id: Date.now(),
            name: trimmed,
        };

        setList([...list, newItem]);
        setValueTemp("");
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <input
                type="text"
                value={valueTemp}
                className="bg-[#333333] rounded-[8px] w-full h-[60px] pb-5 pl-2 text-zinc-50 border-none outline-0"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Nhập công việc..."
            />
            {!valueTemp.trim() && (
                <span className="text-red-600 mt-2 font-bold">
                    Nội dung không được bỏ trống
                </span>
            )}
        </div>
    )
}
