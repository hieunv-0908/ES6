import type React from 'react';
import './Calculation.css'

interface CalcProps {
    a: number;
    b: number;
}

const Addition: React.FC<CalcProps> = ({ a, b }) => {
    return <><h2>Bài 2</h2><span>{a} + {b} = {a+b}</span><br /></>;
}

const Subtraction: React.FC<CalcProps> = ({ a, b }) => {
    return <><span>{a} - {b} = {a-b}</span><br /></>;
}

const Multiplication: React.FC<CalcProps> = ({ a, b }) => {
    return <><span>{a} * {b} = {a*b}</span><br /></>;
}

const Division: React.FC<CalcProps> = ({ a, b }) => {
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    return <><span>{a} / {b} = {a/b}</span><br /></>;
}

export { Addition, Subtraction, Multiplication, Division };