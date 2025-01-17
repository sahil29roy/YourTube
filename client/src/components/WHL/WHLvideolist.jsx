import React from 'react';
import Showvideolist from '../Showvideolist/Showvideolist';

const WHLvideolist = ({ page, currentuser, videolist }) => {
    return (
        <>
            {currentuser ? (
                <>
                    {videolist
                        ?.filter(video => video.viewer === currentuser) 
                        .reverse() 
                        .map(video => (
                            <Showvideolist videoid={video._id} key={video._id} />
                        ))}
                </>
            ) : (
                <h2 style={{ color: 'white' }}>
                    Please log in to view your {page}.
                </h2>
            )}
        </>
    );
};

export default WHLvideolist;
