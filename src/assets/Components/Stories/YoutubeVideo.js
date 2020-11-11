import React, { Component } from 'react'

export default class YoutubeVideo extends Component {

    constructor() {
        super();
        this.state = {
            allDetails: {},
            videoID: "",
            title: "test",
            imageSrc: "what",
        }
    }

    componentWillMount() {
        this.state.allDetails = this.props.videoDetails;
        var videoID = "#" + this.state.allDetails['resourceId']['videoId']
        this.setState({ videoID: videoID });
        this.setState({ title: this.state.allDetails['title'] })
        this.setState({ imageSrc: this.state.allDetails['thumbnails']['medium']['url'] })
    }


    render() {
        return (


            <div className="col-lg-4 col-md-6 d-flex align-items-stretch eachVideo">
                <button type="button" className="btn" data-toggle="modal" data-target={this.state.videoID}>
                    <div className="member">
                        <img src={this.state.imageSrc} alt="new" className="img-fluid" />
                        <div className="member-content">
                            <h5>{this.state.title}</h5>
                        </div>
                    </div>
                </button>
            </div>
        )
    }
}
