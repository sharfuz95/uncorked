import React, { Component } from 'react'

export default class GuestComponent extends Component {

    constructor() {
        super();
        this.state = {
            imgURL: "",
            name: "",
            position: "",
            description: "",
            linkedInLink: ""
        }
    }

    componentWillMount() {
        var imageID = this.getImageID(this.props.imgURL);
        this.setState({ imgURL: imageID });
        this.setState({ name: this.props.name });
        this.setState({ position: this.props.position });
        this.setState({ description: this.props.description });
        this.setState({ linkedInLink: this.props.linkedInLink });
    }

    getImageID(imageURL) {
        var imageID = imageURL.substring(imageURL.indexOf('/d/') + 3, imageURL.indexOf('/view'));
        return imageID;
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                    <img src={"https://drive.google.com/uc?export=view&id=" + this.state.imgURL} alt="new" className="img-fluid" />
                    <div className="member-content">
                        <h4>{this.state.name}</h4>
                        <span>{this.state.position}</span>
                        <p>{this.state.description}</p>
                        <div className="social">
                            <a href={this.state.linkedInLink} target="_blank">
                                <i className="icofont-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




