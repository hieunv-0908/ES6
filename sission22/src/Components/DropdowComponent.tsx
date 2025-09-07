import React from 'react'
import {Dropdown } from 'antd'

const items = [
    {
        key: '1',
        label: <a href="https://www.antgroup.com">Cài đặt</a>,
    },
    {
        key: '2',
        label: <a href="https://www.antgroup.com">Đổi mật khẩu</a>,
    },
    {
        key: '3',
        label: <a href="https://www.antgroup.com">Đăng xuất</a>,
    }
]

export default function DropdowComponent() {
    return (
        <div>
            <Dropdown menu={{items}} trigger={['hover']} placement='bottom'>
                <button className='border-[1px] p-2 !rounded-[8px]'>Nguyễn Văn Nam</button>
            </Dropdown>
        </div>
    )
}
