import React from "react";

const VideoDetail = ({ videoDetail }) => {
    if (videoDetail == null) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${videoDetail.id.videoId}`;

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h2 className="ui header">{videoDetail.snippet.title}</h2>
                <p>{videoDetail.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
