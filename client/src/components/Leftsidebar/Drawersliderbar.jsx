import React from 'react'
import "./Leftsidebar.css"
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdSubscriptions, MdOutlineWatchLater } from "react-icons/md"
import { FaHistory } from 'react-icons/fa'
import shorts from "./shorts.png"
import { NavLink } from 'react-router-dom'
const Drawersliderbar = ({ toggledraw, toggledrawersidebar }) => {
  return (
    <div>
      <div className="container_DrawaerLeftSidebar" style={toggledrawersidebar}>
      <div className="container2_DrawaerLeftSidebar">
      <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img src={shorts} width={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>

          <div className="icon_sidebar_div">
            <p>
              <MdSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Drawersliderbar
