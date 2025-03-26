import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Data1 from '../Components/Sidebar/Data1'
import Data2 from '../Components/Sidebar/Data2'

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[240px] fixed top-0 left-0 h-full bg-black p-5">
        <h1 className="text-white font-bold text-center mb-6 text-3xl">Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <Link className="text-white hover:text-gray-400" to="/dashboard/data1">Data1</Link>
          <Link className="text-white hover:text-gray-400" to="/dashboard/data2">Current Headlines</Link>
        </nav>
      </div>

      {/* Content Section */}
      <div className="flex ml-[240px] w-[100%] p-6 min-h-screen overflow-y-auto">
        <Routes>
          <Route path="/data1" element={<Data1 />} />
          <Route path="/data2" element={<Data2 />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
