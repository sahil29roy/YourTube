import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../components/Showvideogrid/Showvideogrid'
import vid from "../../components/Video/vid.mp4"

import { useParams } from 'react-router-dom'
const Search = () => {
    const {searchquery}=useParams();

  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <Showvideogrid vid={vid}/>
      </div>
    </div>
  )
}

export default Search