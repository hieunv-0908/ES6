import React,{useState} from 'react'

export default function CountText() {
    const [length,setLength] = useState(0);
  return (
    <div>
        <textarea placeholder='Nhập nội dung' onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
            setLength(e.target.value.length)
        }}/> 
        <span>Số lượng ký tự:{length}</span>
    </div>
  )
}
