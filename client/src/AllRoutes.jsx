import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Library from './pages/Library/Library'
import Likedvideo from './Pages/Likedvideo/Likedvideo'
import Channel from './pages/Channel/Channel'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/search/:Searchquery' element={<Search/>}/>
        <Route path='/videopage/:vid' element={<Videopage/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/Likedvideo' element={<Likedvideo/>}/>
        <Route path='/channel/:cid' element={<Channel seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
