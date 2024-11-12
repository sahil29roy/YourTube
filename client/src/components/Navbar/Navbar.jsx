import React,{useState} from 'react'
import logo from "./logo.ico"
import "./Navbar.css"
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
        <link></link>
      </div>
      
    </div>
  )
}

export default Navbar;
