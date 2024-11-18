import React, { useState } from 'react'
import logo from './logo.ico';
import "./Navbar.css"
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import Searchbar from './Searchbar/Searchbar';
import { Link } from "react-router-dom";
const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
  const [authbtn, setauthbtn] = useState(false)
  // const currentuser = null;
  const currentuser = {
    result: {
      email: "Sahil@gmail.com",
      joinedon: "14-02-2022",
    }
  }
  return (
    <div className="Container_Navbar">
      <div className="Burger_logo_Navbar">
        <div className="burger" onClick={() => toggledrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/"} className='logo_div_Navbar'>
          <img src={logo} alt="" />
          <p className="logo_title_navbar">Your-Tube</p>
        </Link>
      </div>
      <Searchbar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
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
      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
      <div className="Auth_cont_Navbar">
        {currentuser ? (
          <>
            <div className="Chanel_logo_App" onClick={() => setauthbtn(true)}>
              <p className="fstChar_logo_App">
                {currentuser?.result.name ? (
                  <>{currentuser?.result.name.charAt(0).toUpperCase()}</>

                ) : (
                  <>{currentuser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <BiUserCircle size={22} />
            <b>Sign in</b>
          </>
        )

        }
      </div>
    </div>
  )
}

export default Navbar;
