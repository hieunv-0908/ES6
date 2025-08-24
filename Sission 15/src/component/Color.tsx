import React, {Component} from 'react'

interface StateType{
    color:string;
    tempColor:string;
}

export default class Color extends Component<{},StateType>{
    constructor(props: {}) {
        super(props);
        this.state = {
            color:'',
            tempColor:'',
        }
    }
    submitColor = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({
            color:this.state.tempColor,
        })
    }
    inputColor = (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        this.setState({
            tempColor:e.target.value,
        })
    }
    render(){
        return (
            <>
                <form action="#" onSubmit={this.submitColor}>
                    <label htmlFor="" ><span>Color:</span>{this.state.color}</label>
                    <br />
                    <span>Form</span>
                    <br />
                    <span>Màu sắc</span>
                    <br />
                    <input type="color" onChange={this.inputColor}/>
                    <br />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}