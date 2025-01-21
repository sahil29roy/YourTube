import React from 'react'
import './Describechannel.css'
import { FaEdit, FaUpload } from "react-icons/fa"
const Describechannel = ({ setvideouploadpage, cid, seteditcreatechanelbtn }) => {
  const channel = [
    {
      _id: 1,
      name: "abcjabsc",
      email: "abcd@gmail.com",
      joinedon: "222-07-134",
      desc: "bithead"
    }
  ]
  const currentuser = {
    result: {
      _id: 1,
      name: "sahil",
      email: "Sahil@gmail.com",
      joinedon: "14-02-2022",
    }
  }
  const currentchannel = channel.filter((c) => c._id === cid)[0];
  // const currentchannel=channel.filter((c)=>c._id=== cid)[0]
  // console.log(currentchannel)
  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentchannel?.name}</b>
        <p>{currentchannel?.desc}</p>
      </div>
      {currentuser?.result._id === currentchannel?._id && (
        <>
          <p className="editbtn_chanel" onClick={() => seteditcreatechanelbtn(true)}>
            <FaEdit />
            <b>Edit Channel</b>
          </p>
          <p className="uploadbtn_chanel" onClick={() => setvideouploadpage(true)}>
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>
  )
}

export default Describechannel