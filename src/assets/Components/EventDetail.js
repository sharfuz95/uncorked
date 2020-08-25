import React, { Component } from 'react'

export default class EventDetail extends Component {
    render() {
        return (
            <section id="events" className="events">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={require("../img/trainers/MHadad.png")} alt="..." />
                                </div>
                                <div style={{ marginTop: "0.5%" }} className="card-body">
                                    <h5 className="card-title">
                                        <a href="">Finding your best in college
                  </a>
                                    </h5>
                                    <p className="font-italic text-center">
                                        Aug 26th, Wednesday, 7PM
                </p>
                                    <p className="card-text">
                                        Marc is a senior at the University of Rochester majoring in Mechanical Engineering. He came to the US from Lebanon 3 years ago, and some of the first people he met here were Sharfuz (unfortunately) and Sidhant. He’s currently the VP of the Student Body, the outgoing president of Meliora Launchpad, and the Mechanical Team Lead for Engineering World Health. He’s heavily involved in the worlds of politics, entrepreneurship, and music. In his free time, Marc likes to play and record music.

                </p>



                                    <p>Stream the session here on Aug 26th, Wednesday, 7PM</p>
                                    <p>
                                        <a href="https://www.youtube.com/watch?v=0Kp-GbKFRPk">View on YouTube</a>
                                    </p>
                                    <p>
                                        <a href="https://www.facebook.com/careersuncorked/videos/975341412932356/">View on Facebook</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>g

            </section>
        )
    }
}
