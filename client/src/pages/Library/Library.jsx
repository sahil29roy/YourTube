import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import {FaHistory} from "react-icons/fa"
import {MdOutlineWatchLater} from "react-icons/md"
import {AiOutlineLike} from "react-icons/ai"
import vid from "../../components/Video/vid.mp4"
import WHLvideolist from '../../components/WHL/WHLvideolist'
import './Library.css'
const Library = () => {
    const currentuser = {
        result: {
          _id:1,
          name:"sahil",
          email: "Sahil@gmail.com",
          joinedon: "14-02-2022",
        }
      }
    const vids=[
        {
          _id:1,
          video_src:vid,
          chanel:"wvjwenfj3njfwef",
          title:"video 1",
          uploader:"abc",
          description:"description of video 1"
        },
        {
          _id:1,
          video_src:vid,
          chanel:"wvjwenfj3njfwef",
          title:"video 1",
          uploader:"abc",
          description:"description of video 1"
        },
        {
          _id:3,
          video_src:vid,
          chanel:"wvjwenfj3njfwef",
          title:"video 3",
          uploader:"abc",
          description:"description of video 3"
        },
        {
          _id:4,
          video_src:vid,
          chanel:"wvjwenfj3njfwef",
          title:"video 4",
          uploader:"abc",
          description:"description of video 4"
        },
      ]
  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
        <div className='container2_Pages_App'>
            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <FaHistory/>
                    </b>
                    <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"History"} currentuser={currentuser?.result?._id} videolist={vids}/>
                </div>
            </div>
            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <MdOutlineWatchLater/>
                    </b>
                    <b>Watch later</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"Watch Later"} currentuser={currentuser?.result?._id} videolist={vids}/>
                </div>
            </div>
            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <AiOutlineLike/>
                    </b>
                    <b>Liked Videos</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"Liked Videos"} currentuser={currentuser?.result?._id} videolist={vids}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Library