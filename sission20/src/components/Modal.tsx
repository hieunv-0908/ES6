import React, { useRef, useState, useEffect } from 'react'

export default function Modal() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [modal, setModal] = useState(false);
    const handleOpen = () => {
        setModal(true);
    }
    const handleClose = () => {
        setModal(false);
    }
    useEffect(() => {
        if (modal) {
            inputRef.current?.focus();
        }
    }, [modal])
    return (
        <div>
            <div>
                <span>Modal</span>
                <button onClick={handleOpen}>Mở Modal</button>
                <div style={{ display: `${modal ? `block` : `none`}` }}>
                    <span>Đăng nhập</span>
                    <input ref={inputRef} type="text" placeholder='Nhập tên người dùng' />
                    <button onClick={handleClose}>Đóng</button>
                </div>
            </div>
        </div>
    )
}
