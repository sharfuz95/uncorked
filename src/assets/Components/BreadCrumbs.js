import React, { Component } from 'react'

export default class BreadCrumbs extends Component {
    render() {
        return (
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        )
    }
}
