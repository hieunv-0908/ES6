import React,{useReducer} from 'react'

type State = {
    Count:number,
}

type Action = {
    Type:'Increase'|'Reduce',
}

const initialState:State={
    Count:0,
};

const reduce = (state:State,action:Action):State=>{
    switch(action.Type){
        case 'Increase':
            return {...state,Count:state.Count+1};
        case 'Reduce':
            if(state.Count>0){
                return {...state,Count:state.Count-1};
            }else{
                return state
            }
        default:
            return state    
    }
}
export default function CountClick() {
    const [state,dispatch] = useReducer(reduce,initialState);
    const handleIncrease = ()=>{
        dispatch({Type:'Increase'});
    }
    const handleReduce = ()=>{
        dispatch({Type:'Reduce'});
    }
  return (
    <div>
        <h2>Số đếm:{state.Count}</h2><br />
        <button onClick={handleIncrease}>Tăng</button>
        <button onClick={handleReduce}>Giảm</button>
    </div>
  )
}
