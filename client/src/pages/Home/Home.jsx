import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import "./Home.css"
const Home = ()=>{
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
    <div>
      <div className="container_Pages_App">
      <Leftsidebar/>
      </div>
    </div>
  )
}

export default Home
