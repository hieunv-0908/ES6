import React, { useReducer } from 'react'

type State = {
    name: string,
    email: string,
}

type Action = { field: "UserName", value: string } | { field: "Email", value: string }

const initState:State={
    name:'',
    email:'',
}

const reducer = (state: State, action: Action):State => {
    switch (action.field) {
        case "UserName":
            return { ...state, name: action.value }
        case "Email":
            return { ...state, email: action.value }
        default:
            return state
    }
}

export default function UserForm() {
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <div>
            <h2>User Infomation Form</h2>
                <label htmlFor="">Tên: <br /> <input type="text" name='UserName' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{dispatch({field:e.target.name as "UserName",value:e.target.value})}}/></label><br />
                <label htmlFor="">Email: <br /> <input type="email" name='Email' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{dispatch({field:e.target.name as "Email",value:e.target.value})}}/></label>
            <div>
                <h3>Thông tin người dùng:</h3>
                <br />
                <span>Tên:{state.name}</span>
                <br />
                <span>Email:{state.email}</span>
            </div>
        </div>
    )
}
