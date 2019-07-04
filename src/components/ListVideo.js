import React from "react";
import Video from "./Video";

const ListVideo = ({ videos, onVideoSelected }) => {
    const renderVideos = videos.map(video => {
        return <Video key={video.id.videoId} video={video} onVideoSelected={onVideoSelected} />;
    });

    return <div className="ui relaxed divided list">{renderVideos}</div>;
};

export default ListVideo;
