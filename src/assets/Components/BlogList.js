import React, { Component } from 'react'

export default class BlogList extends Component {
    render() {
        return (
            <section id="courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                        >
                            <div className="course-item">
                                <img
                                    src={require("../img/blogs/internship.png")}
                                    className="img-fluid"
                                    alt="..."
                                />
                                <div className="course-content">
                                    <div
                                        className="d-flex justify-content-between align-items-center mb-3"
                                    ></div>

                                    <h3>
                                        <a
                                            target="_blank"
                                            href="https://medium.com/from-internship-to-a-full-time-job-the-how/from-internship-to-a-full-time-job-the-how-65eac7c30441"
                                        >From Internship To Full Time Job</a
                                        >
                                    </h3>
                                    <p>Navigating from an Internship to a Fulltime job</p>
                                    <div
                                        className="trainer d-flex justify-content-between align-items-center"
                                    >
                                        <div className="trainer-profile d-flex align-items-center">

                                            <span>Sharfuz</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                          <i className="bx bx-heart"></i>&nbsp;42
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="course-item">
                                <img
                                    src={require("../img/blogs/consulting.png")}
                                    className="img-fluid"
                                    alt="..."
                                />
                                <div className="course-content">
                                    <div
                                        className="d-flex justify-content-between align-items-center mb-3"
                                    ></div>

                                    <h3>
                                        <a
                                            target="_blank"
                                            href="https://medium.com/@sahluwa3/how-to-get-your-foot-in-the-door-96968bee298b"
                                        >The Consulting Journey</a
                                        >
                                    </h3>
                                    <p>Getting your foot in the door</p>
                                    <div
                                        className="trainer d-flex justify-content-between align-items-center"
                                    >
                                        <div className="trainer-profile d-flex align-items-center">

                                            <span>Sidhant</span>
                                        </div>
                                        <a></a>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                          <i className="bx bx-heart"></i>&nbsp;65
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                        >
                            <div className="course-item">
                                <img
                                    src={require("../img/blogs/canvas.png")}
                                    className="img-fluid"
                                    alt="..."
                                />
                                <div className="course-content">
                                    <div
                                        className="d-flex justify-content-between align-items-center mb-3"
                                    ></div>

                                    <h3>
                                        <a
                                            target="_blank"
                                            href="https://medium.com/@sahluwa3/painting-the-blank-canvas-20878805625d"
                                        >Painting the Blank Canvas</a
                                        >
                                    </h3>
                                    <p>How to be an Entrepreneur in College</p>

                                    <div
                                        className="trainer d-flex justify-content-between align-items-center"
                                    >
                                        <div className="trainer-profile d-flex align-items-center">

                                            <span>Sidhant</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                          <i className="bx bx-heart"></i>&nbsp;85
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
