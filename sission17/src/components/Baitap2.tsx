import React,{useState} from 'react'

export function Baitap2() {
  const [info,setInfo] = useState({
    id:1,
    name:`Coca cola`,
    price:1000,
    quantity:10,  
  })
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>
        ID:{info.id}<br />
        Name:{info.name}<br />
        Price:{info.price}$<br />
        Quantity:{info.quantity}<br />
      </p>
    </div>
  )
}
