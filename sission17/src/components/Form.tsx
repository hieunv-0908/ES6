import React,{useState} from 'react'

export default function Form() {
    const [value,setValue] = useState('');
  return (
    <div>
        <input type="text" value={value} placeholder='Nhập nội dung' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setValue(e.target.value)
        }}/>
        <span>{value}</span>
    </div>
  )
}
