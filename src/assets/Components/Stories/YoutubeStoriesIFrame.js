import React, { Component } from 'react'

export default class StoriesIFrame extends Component {
    constructor() {
        super();
        this.state = {
            videoURL: "",
            sourceURL: ""
        }
    }
    componentWillMount() {
        this.state.videoURL = this.props.videoURL
        var forSource = "https://www.youtube.com/embed/" + this.state.videoURL;
        this.state.sourceURL = forSource
        console.log(this.state.sourceURL);
    }
    render() {
        return (
            <div className="modal fade videoModal" id={this.state.videoURL} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="responsive">
                                <iframe width="560" height="315" className="iframeWithVideo" src={this.state.sourceURL} frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen title="1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
