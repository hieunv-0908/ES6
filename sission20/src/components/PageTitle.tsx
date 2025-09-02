import React,{useState,useEffect} from 'react'

export default function PageTitle() {
    const [state,setState] = useState('');
    useEffect(()=>{
        document.title = state;
    },[state])
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState(e.target.value);
    }
  return (
    <div>
        <input type="text" onChange={handleInput}/>
    </div>
  )
}
