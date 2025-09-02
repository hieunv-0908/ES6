import { useState } from 'react'
import Input from './components/Input'
import UserProfile from './components/UserProfile'
import Welcome from './components/Welcome'
import PageTitle from './components/PageTitle'
import Timer from './components/Timer'
import Modal from './components/Modal'
import CountClick from './components/CountClick'
import UserForm from './components/UserForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Input></Input> */}
        {/* <Welcome></Welcome> */}
        {/* <UserProfile></UserProfile> */}
        {/* <PageTitle></PageTitle> */}
        {/* <Timer></Timer> */}
        {/* <Modal></Modal> */}
        {/* <CountClick></CountClick> */}
        <UserForm></UserForm>
    </>
  )
}

export default App
