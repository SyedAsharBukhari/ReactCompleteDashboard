import React from 'react'

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Data1 from '../Components/Sidebar/Data1'
import Data2 from '../Components/Sidebar/Data2'

function Dashboard() {
  return (
    <div>
<div className='flex'>
<div className='w-[20%] h-[100vh] fixed bg-black'>
<h1 className='text-white font-bold text-center mt-4 mb-4 text-3xl '>Dashboard</h1>
<Link className='text-white' to={"/data1"}>Data1</Link>
<br></br>
<br></br>
<br></br>
        <Link className='text-white' to={"/data2"}>Data2</Link>
  </div>  

<div className='w-[100%] h-[100vh]  bg-red-500'>
<Outlet />
</div>



</div>



    </div>
  )
}

export default Dashboard