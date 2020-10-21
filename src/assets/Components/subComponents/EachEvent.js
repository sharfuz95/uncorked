import React, { Component } from 'react'

export default class EachEvent extends Component {

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

    // 

    componentWillMount() {

        // var imageID = this.getImageID(this.props.imgURL);
        // this.setState({ imgURL: imageID });
        console.log("Here it has mounted");
        this.setState({ name: this.props.name });
        this.setState({ position: this.props.position });
        this.setState({ description: this.props.description });
        this.setState({ linkedInLink: this.props.linkedInLink });
    }
    render() {
        return (
            <div>
                Mounted
            </div>
        )
    }
}
