import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

type listType = {
    name: string,
}

type propsType = {
    list: listType[],
    setList: React.Dispatch<React.SetStateAction<listType[]>>
}

export default function ListComponent({ list,setList }: propsType) {
    const [indexEdit,setIndexEdit] = useState<number|null>(null);
    const [valueTemp,setValueTemp] = useState("");
    const handleEditStatus=(i:number)=>{
        setValueTemp(list[i].name);
        setIndexEdit(i);
    }
    const handleEditChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValueTemp(e.target.value);
    }
    const handleEdit=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            const tempList:listType[] = [...list];
            tempList[indexEdit as number] = {name:valueTemp};
            setList(tempList)
            setValueTemp("");
            setIndexEdit(null)
        }
    }
    const handleDelete=(name:string)=>{
        const listTemp:listType[] = list.filter((l)=>l.name!==name);
        setList(listTemp);
    }
    return (
        <div className='p-2 flex flex-col gap-[8px] bg-[#202020] rounded-b-2xl'>
            {list.map((l,i) => {
                return <div key={l.name} className=' border border-[#202020] border-t-[5px] border-t-[#FFC53D] rounded-[6px] p-[6px] bg-[#333333] text-zinc-50 flex items-center justify-between'>
                    {indexEdit === i?(<input value={valueTemp} autoFocus onChange={handleEditChange} onKeyDown={handleEdit}></input>):(<span>{l.name}</span>)}
                    <div className='flex gap-4'>
                        <EditOutlined onClick={()=>{handleEditStatus(i)}}/>
                        <DeleteOutlined onClick={()=>{handleDelete(l.name)}}/>
                    </div>
                </div>
            })}
        </div>
    )
}
