import {Component} from 'react'

interface stateType{
    dateInput:string,
    dateTemp:string,
}

export default class DateInput extends Component<{},stateType>{
    constructor(props:{}) {
        super(props);
        this.state = {
            dateInput:'',
            dateTemp:'',
        }
    }

    inputDate = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            dateTemp:e.target.value,
        })
    }
    update=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({
            dateInput:this.state.dateTemp,
        })
    }
    render(){
        return <>
            <form action="#" onSubmit={this.update}>
                <span>Ngày sinh:{this.state.dateInput}</span>
                <input type="date" onChange={this.inputDate} />
                <br />
                <button>Submit</button>
            </form>
        </>
    }
}