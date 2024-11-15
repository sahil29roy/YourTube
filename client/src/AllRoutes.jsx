import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BiHome/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
