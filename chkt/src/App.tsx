import { useState } from 'react'
import Header from './component/Header'
import InputComponent from './component/InputComponent'
import ListComponent from './component/ListComponent'

type listType={
  name:string,
}

function App() {
  const [list,setList] = useState<listType[]>([]);
  return (
    <div className='w-[100%]'>
      <div className='bg-[#FFC53D] rounded-t-[8px] flex flex-col items-center p-8 gap-4 w-[100%]'>
        <Header></Header>
        <InputComponent list={list} setList={setList}></InputComponent>
      </div>
      <ListComponent list = {list} setList = {setList}></ListComponent>
    </div>
  )
}

export default App
