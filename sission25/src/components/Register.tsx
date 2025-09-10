import React from 'react'

export default function Register() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center w-[20%] h-auto rounded-[8px] p-2 pb-4 shadow-xl/30'>
                <h2 className='text-2xl font-bold'>Login Account</h2>
                <label htmlFor="" className=''>Your Email <br />
                    <input className='border-[1px] outline-0 rounded-[8px] p-2' type="email" placeholder='name@gmail.com' />
                </label>
                <label htmlFor="" className=''>Password <br />
                    <input className='border-[1px] outline-0 rounded-[8px] p-2' type="password" placeholder='name@gmail.com' />
                </label>
                <label htmlFor="" className=''>Config Password <br />
                    <input className='border-[1px] outline-0 rounded-[8px] p-2' type="password" placeholder='name@gmail.com' />
                </label>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-9 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5'>Login an account</button>
                <div className='flex gap-2'>
                    <span className=''>Already have an account?</span>
                    <a href="" className='font-bold'>Login hear</a>
                </div>
            </div>
        </div>
    )
}
