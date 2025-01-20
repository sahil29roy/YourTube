import React from 'react';
import './Showvideo.css';
import { Link } from 'react-router-dom';
import moment from "moment";

const Showvideo = ({ vid }) => {
  return (
    <>
      {/* Wrap video with Link to navigate to the video page */}
      <Link to={`/videopage/${vid._id}`}>
        {/* Add controls to allow play functionality */}
        <video src={vid.video_src} className='video_ShowVideo' controls />
      </Link>
      
      <div className="video_description">
        <div className="Chanel_logo_App">
          <div className="fstChar_logo_App">
            {vid?.uploader?.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="video_details">
          <p className="title_vid_ShowVideo">{vid?.title}</p>
          <pre className="vid_views_UploadTime">{vid?.uploader}</pre>
          <pre className="vid_views_UploadTime">
            {vid?.views} views <div className="dot"></div>{moment(vid?.createdat).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
};

export default Showvideo;
