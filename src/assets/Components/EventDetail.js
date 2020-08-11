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
                                    <img src={require("../img/Tolga.png")} alt="..." />
                                </div>
                                <div style={{ marginTop: "0.5%" }} className="card-body">
                                    <h5 className="card-title">
                                        <a href=""> Tolga Aktas</a>
                                    </h5>
                                    <p className="font-italic text-center">
                                        Aug 8th, Saturday, 2PM
                </p>
                                    <p className="card-text">
                                        Tolga graduated from the University of Rochester in 2020 after pursuing a degree in Electrical &
                                        Computer Engineering, and Computer Science. He spent his time in Rochester researching digital and
                                        image processing, artificial intelligence, computer vision, robotics, machine hearing, data mining,
                                        and machine learning. Despite its rigors, he was fascinated with the amount of information carryover
                                        between these fields, and how they complemented or inspired research in one another. He spent his
                                        summer in 2019 doing ML at Qualcomm and is presently a computer vision software engineer at Google!

                </p>


                                    <p>Stream the session here on Aug 5th, Wednesday, 4PM PST, 7 PM EST</p>
                                    <p>
                                        <a href="https://www.youtube.com/watch?v=I7Lm9eJu7H8">View on YouTube</a>
                                    </p>
                                    {/* <!-- <p>
                                        <a href="https://www.facebook.com/careersuncorked/videos/674708016725477/">View on Facebook</a>
                                    </p> --> */}
                                    {/* <!-- <p> <a href="https://streamyard.com/3qptsucts4">Join the Studio with us!</a></p> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
