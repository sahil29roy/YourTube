import React from 'react'
import Describechannel from './Describechannel'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../components/Showvideogrid/Showvideogrid'
import vid from "../../components/Video/vid.mp4";
import { useParams } from 'react-router-dom';
const Channel = ({seteditcreatechanelbtn,setvideouploadpage}) => {
  const {cid}=useParams()
      const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
  ];
  const filteredVids = vids.filter((video) => video.channel === cid);
  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <Describechannel cid={cid} setvideouploadpage={setvideouploadpage} seteditcreatechanelbtn={seteditcreatechanelbtn}/>
        <Showvideogrid vids={filteredVids}/>
      </div>
    </div>
  )
}

export default Channel