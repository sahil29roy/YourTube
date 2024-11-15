import React from 'react'
import { FaSearch } from "react-icons/fa"
import './Searchlist.css'
const Searchlist = ({Titlearray,setsearchquery}) => {
  return (
    <div className='container_Searchlist'>
      {Titlearray.map(m=>{
        return <p key={m} onClick={e=>setsearchquery(m)} >
            <FaSearch/>{m}
        </p>
      })}
    </div>
  )
}

export default Searchlist
