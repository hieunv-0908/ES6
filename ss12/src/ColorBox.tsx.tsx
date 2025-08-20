// import type React from 'react';

export default function ColorBlock(){
    return <>
    <h2>Bài 4</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'red',color: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>Box</div>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'blue',color: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>Box</div>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'green',color: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>Box</div>
    </div>
    </>
}