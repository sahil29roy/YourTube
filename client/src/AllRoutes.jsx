import React from 'react'
import {Routes,Route} from 'react-router-dom'
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
