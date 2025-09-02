import React,{useState,useEffect} from 'react'

export default function Welcome() {
    const [state,setState] = useState('');
    console.log('Đang khởi toạ component');
    
    useEffect(()=>{
        setState('Chào mừng bạn đến với web.')
        console.log('useEffect đã được tạo');
    },[])
  return (
    <div>
        <h2>{state}</h2>
    </div>
  )
}
