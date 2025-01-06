import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import "./Home.css"
import vid from "../../components/Video/vid.mp4"
const Home = () => {

  const vids = [
    {
      _id: 1,
      video_src: vid,
      chanel: "Channel 1",
      title: "video 1",
      uploader: "abc",
      description: "description of video 1"
    },
    {
      _id: 2,
      video_src: vid,
      chanel: "Channel 1",
      title: "video 2",
      uploader: "abc",
      description: "description of video 2"
    },
    {
      _id: 3,
      video_src: vid,
      chanel: "Channel 1",
      title: "video 3",
      uploader: "abc",
      description: "description of video 3"
    },
    {
      _id: 4,
      video_src: vid,
      chanel: "Channel 2",
      title: "video 4",
      uploader: "xyz",
      description: "description of video 4"
    },
  ]

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
