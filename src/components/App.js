import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube.js";
import ListVideo from "./ListVideo";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        videoSelected: null
    };

    submitTerm = async term => {
        const response = await youtube.get("/search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyDDA7IpGzajwZJcDfEhxKwZ0dVUJGoWoRM",
                q: term
            }
        });
        this.setState({ videos: response.data.items, videoSelected: response.data.items[0] });
    };
    selectVideo = video => {
        this.setState({ videoSelected: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.submitTerm} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail videoDetail={this.state.videoSelected} />
                        </div>
                        <div className="five wide column">
                            <ListVideo videos={this.state.videos} onVideoSelected={this.selectVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
