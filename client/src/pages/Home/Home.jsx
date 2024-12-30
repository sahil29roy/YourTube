import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import "./Home.css"
const Home = () => {
  const navlist = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
  ];
  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {navlist.map((m) => {
            return (
              <p key={m} className='btn_nav_home'>{m}</p>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
