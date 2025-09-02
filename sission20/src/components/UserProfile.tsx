import React, { useState } from 'react'

export default function UserProfile() {
    const [form, setForm] = useState({ userName: '', email: '', status: false });
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleChange = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setForm(prev=>({
            ...prev,status:!form.status,
        }))
    }
    return (
        <div>
            <span>Thông tin người dùng</span>
            <br />
            <form action="#" onSubmit={handleChange}>
                <input onChange={handleInput} type="text" name="userName" placeholder='Nhập tên' />
                <input onChange={handleInput} type="email" name="email" placeholder='Nhập email' />
                <button>Gửi</button>
            </form>
            <div style={{display:`${form.status?`block`:`none`}`}}>
                <span>Tên:{form.userName}</span><br />
                <span>Email:{form.email}</span>
            </div>
        </div>
    )
}
