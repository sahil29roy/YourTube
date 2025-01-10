import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Channel from './pages/Channel/Channel'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/search/:Searchquery' element={<Search/>}/>
        <Route path='/videopage/:vid' element={<Videopage/>}/>
        
        <Route path='/channel/:cid' element={<Channel seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
