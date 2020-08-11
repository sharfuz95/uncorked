import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1 style={{ fontWeight: 'bold' }}>
                        Where Journeys Converge, <br style={{ fontWeight: 'bold' }} />
                    One Community
                </h1>
                    <h2>
                        Driving to uncork your potential, Whether its professional or personal
                        growth
                </h2>
                    <button type="button" className="btn-get-started" data-toggle="modal" data-target="#getStarted">
                        Get Started
                </button>
                </div>
            </section>
        )
    }
}
