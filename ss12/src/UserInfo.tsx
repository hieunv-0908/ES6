// import { useState } from 'react'

const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    born: 1986,
    gender: 'Nam',
    address: 'Hà Nội, Việt Nam',
}

function PrintInfoUser(){
    // const [count, setcount] = useState(0);
    return <>
        <h2>Bài 3</h2>
        <h2 style={{ fontSize: '50px' }}>Thông tin cá nhân</h2>
        <div style={{textAlign: 'center'}}>
            <p>Tên: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Năm sinh: {user.born}</p>
            <p>Giới tính: {user.gender}</p>
            <p>Địa chỉ: {user.address}</p>
        </div>
    </>
}

export default PrintInfoUser;