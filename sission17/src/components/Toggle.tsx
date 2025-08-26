import React,{useState} from 'react'

export default function Toggle() {
    const [status,setStatus] = useState(true);
  return (
    <div>
        <button onClick={()=>{
            setStatus(!status)}
            }>{status===true?'Ẩn':'Hiện'}</button>
        <span style={{display:status===true?'block':'none'}}>Tiêu đề của văn bản</span>
    </div>
  )
}
