import React,{useState} from 'react'

export default function Select() {
    const [city,setCity]= useState(``);
  return (
    <div>
        <span>Thành phố:{city}</span>
        <select value={city} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
            setCity(e.target.value)
        }}>
            <option value="" disabled>Lựa chọn thành phố</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
            <option value="Hà Nội">Hà Nội</option>
        </select>
    </div>
  )
}
