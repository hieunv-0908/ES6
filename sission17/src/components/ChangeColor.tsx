import React,{useState} from 'react'
export default function ChangeColor() {
    const [color,setColor] = useState('black')
    const ChangeColor = ()=>{
        setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    }
  return (
    <div>
        <span style={{color:`${color}`}}>Tiều đề văn bản</span>
        <button onClick={ChangeColor}>Thay đổi màu</button>
    </div>
  )
}
