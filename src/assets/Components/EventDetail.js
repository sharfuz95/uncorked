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
                                    <img src={require("../img/annie.png")} alt="..." />
                                </div>
                                <div style={{ marginTop: "0.5%" }} className="card-body">
                                    <h5 className="card-title">
                                        <a href=""> Hustling through to Harvard Law
                  </a>
                                    </h5>
                                    <p className="font-italic text-center">
                                        October 17th, Saturday, 2PM
                </p>
                                    <p className="card-text">
                                        Annamarie is a third-year student at Harvard Law School. She graduated from the University of Rochester in 2018, where she studied both Business and Vocal Performance. She completed her first year of law school at Indiana University Maurer School of Law, after which she transferred to Harvard. She hopes to use her law degree to increase the participation of minority groups (particularly women and the LGBTQ+ community) in government/public policy spaces. After graduating in May 2021 she will join Kirkland and Ellis, LLP as a general corporate attorney.Being

                </p>



                                    <p>Stream the session here on October 17th, Saturday, 2PM</p>
                                    {/* <p>
                                        <a href="https://www.youtube.com/watch?v=fK0I9cZsMOg">View on YouTube</a>
                                    </p>
                                    <p>
                                        <a href="https://www.facebook.com/careersuncorked/posts/160499229013848">View on Facebook</a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>g

            </section>
        )
    }
}
