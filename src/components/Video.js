import React from "react";
import "./video.css";

const Video = ({ video, onVideoSelected }) => {
    return (
        <div
            onClick={e => {
                e.preventDefault();
                onVideoSelected(video);
            }}
            className="item item-custom"
        >
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt="" />
            <div className="content content-custom">
                <a href="" className="header">
                    {video.snippet.title}
                </a>
            </div>
        </div>
    );
};

export default Video;
