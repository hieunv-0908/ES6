import React, { useState } from 'react'

export default function Input() {
    const [status, setStatus] = useState(true);
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        if (e.target.value.length > 5) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    }
    return (
        <div style={{backgroundColor:'#F9F9F9',width:'300px', height:'200px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <span>Kiểm tra độ dài đa nhập</span>
            <div style={{width:'150px'}}>
                <input type="text" placeholder='Nhập vào đây' onChange={changeInput} />
                <span style={{ display: `${status ? `none` : `block`}`, backgroundColor: '#FFE6E6', color: 'red' }}>Chuỗi nhập vào dài hơn 5 ký tự</span>
            </div>
        </div>

    )
}
