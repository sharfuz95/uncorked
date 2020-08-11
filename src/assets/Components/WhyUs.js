import React, { Component } from 'react'

export default class WhyUs extends Component {
    render() {
        return (
            <section id="why-us" className="why-us">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch">
                            <div className="content">
                                <h3>Why Are You Here?</h3>
                                <p>
                                    We know finding jobs is hard, always has been, we know because
                                    we went through it too. Covid19 isn’t making it any easier.
                                    Current resources alone aren't enough and that thought
                                    inspired us to tell our stories and create a platform where
                                    you can tell yours and find help. Learn from us. We are not
                                    here to simply say we will get you a job. We are here to share
                                    with you our stories. So that you have the resources to get
                                    the next job and one after. Take you to a place where you can
                                    help yourself without our help.
              </p>
                                <div className="text-center">
                                    <a href="stories.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-receipt"></i>
                                            <h4>Pay it Forward</h4>
                                            <p>
                                                We remember the people who helped us to get started with
                                                our careers, whether through a referral or spending 10
                                                mins on the phone to talk to us. We want to thank them
                                                all by supporting others.
                    </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Real stories by Real People from every industry</h4>
                                            <p>
                                                We are bringing you raw stories about people's career
                                                journeys and not just the "how did you get into
                                                Microsoft after working last summer at Google" story
                                                that you already saw on LinkedIn today.
                    </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-images"></i>
                                            <h4>Stories driven by people not brand logos</h4>
                                            <p>
                                                We know we like to hear from people in FAANG or big 4,
                                                but we bring you access to people with incredible
                                                stories whom we can learn from.
                    </p>
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
