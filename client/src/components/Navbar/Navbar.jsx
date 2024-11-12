import React,{useState} from 'react'
import logo from "./logo.ico"
import "./Navbar.css"
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
const Navbar=()=> {
      const [authbtn,setauthbtn]= useState(false)
      const currentuser = null;
  return (
    <div className="Container_Navbar">
      <div className="Burger_logo_Navbar">
        <div className="burger" onClick={()=>toggledrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <link to={"/"} className='logo_Div_Navbar'>
        <img src={logo} alt="" />
        <p className="logo_title_navbar">Your-Tube</p>
        </link>
      </div>
      <RiVideoAddLine className={"vid_bell_Navbar"}/>
      <div className="appBox">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
    </div>
  )
}

export default Navbar;
