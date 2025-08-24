import React, { Component } from 'react'
import type { Student } from './studentManage'
import '../css/Pavigation.css'
interface Props {
    students: Student[],
}
interface typeState {
    pageSize: number,
    currentPage: number,
    startIndex: number,
    totalPage: number,
}

export default class navigation extends Component<Props, typeState> {
    constructor(props: Props) {
        super(props);
        const pageSize: number = 5;
        const currentPage: number = 1;
        this.state = {
            pageSize,
            currentPage,
            startIndex: (currentPage - 1) * pageSize,
            totalPage: Math.ceil(this.props.students.length / pageSize),
        }
    }
    render() {
        const { totalPage } = this.state;
        const page = Array.from({ length: totalPage }, (_, i) => i + 1)
        return (
            <>
                <div className='pagination'>
                    <button onClick={() => {
                        this.setState((prevState) => {
                            const newPage = Math.max(1, prevState.currentPage - 1);
                            return {
                                currentPage: newPage,
                                startIndex: (newPage - 1) * prevState.pageSize
                            };
                        });
                    }}>&#60;</button>
                    {
                        page.map((p) => {
                            return <button key={p} onClick={() => {
                                this.setState({
                                    currentPage: p,
                                })
                            }}>{p}</button>
                        })
                    }
                    <button onClick={() => {
                        this.setState((prevState) => {
                            const newPage = Math.min(totalPage, prevState.currentPage + 1);
                            return {
                                currentPage: newPage,
                                startIndex: (newPage - 1) * prevState.pageSize
                            };
                        });
                    }}>&#62;</button>
                </div>
            </>
        )
    }
}
