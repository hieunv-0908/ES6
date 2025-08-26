import React,{useState} from 'react'

export  const Baitap1:React.FC = () => {
    const [name,setName]=useState('Nguyễn Văn A');
    return(
        <div>
            <h1>{name}</h1>    
        </div>
    )
} 