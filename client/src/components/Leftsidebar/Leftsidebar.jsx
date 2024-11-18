import React from 'react'
import "./Leftsidebar.css"
import shorts from "./shorts.png"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md"
import { NavLink } from 'react-router-dom'
const Leftsidebar = () => {
  return (
    <>
      <div className="container_leftsidebar">
        <NavLink to={'/'} className={"icon_sidebar"}>
          <AiOutLineHome size={22} className='icon_sidebar' />
          <div className="text_sidebar_icon">Home</div>
        </NavLink>
      </div>
    </>
  )
}

export default Leftsidebar
