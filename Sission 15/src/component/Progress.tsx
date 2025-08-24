import React, { Component } from 'react'

interface typeState{
    progress:string,
    progressTemp:string,
}
export default class Progress extends Component<{},typeState> {
    constructor(props:{}) {
        super(props)
        this.state = {
            progress:'0',
            progressTemp:'0',
        }
    }
    changeProgress = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        this.setState({
            progressTemp: e.target.value,
        })
    }
    changeLabel = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({
            progress: this.state.progressTemp
        })
    }
  render() {
    return (
        <>
            <form action="#" onSubmit={this.changeLabel}>
                <label htmlFor="">Tiến độ hoàn thành:{this.state.progress}%</label>
                <br />
                <input type="range" onChange={this.changeProgress}/>
                <button>Submit</button>
            </form>
        </>
    )
  }
}
