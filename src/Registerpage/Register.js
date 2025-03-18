import React from 'react'
import Input from '../Components/Input'


function Register() {
  return (
    <div className='flex justify-center h-[100vh] items-center'>
    <div className='md:w-[350px] bg-gray-200 rounded-3xl shadow-2xl m-auto p-8'>
<h1 className='text-center font-bold text-3xl text-gray-800 mb-6'>Register</h1>
<Input type="text" style={{width:"100%", padding:"20px"}} placeholder="Enter your name"/>
<Input type="text" style={{width:"100%", padding:"20px"}} placeholder="Enter your email"/>
<Input type="text" style={{width:"100%", padding:"20px"}} placeholder="Enter your Password"/>
<button className='bg-black w-[100px] text-white p-2 rounded-3xl mt-5'>Register</button>
  </div>
  </div>
  )
}

export default Register