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
        this.setState({ imgURL: this.props.imgURL });
        this.setState({ name: this.props.name });
        this.setState({ position: this.props.position });
        this.setState({ description: this.props.description });
        this.setState({ linkedInLink: this.props.linkedInLink });


    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                    {console.log("imgURlHEre:" + this.state.imgURL)}
                    <img src={require("../../img/trainers/" + this.state.imgURL)} className="img-fluid" alt="" />
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




