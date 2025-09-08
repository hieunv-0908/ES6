import { SaveOutlined } from '@ant-design/icons'
import React from 'react'

export default function Header() {
  return (
    <div className='flex w-[100%] justify-between'>
        <h2 className='font-bold text-2xl'>STICKY NOTE</h2>
        <SaveOutlined className='font-bold text-xl'/>
    </div>
  )
}
