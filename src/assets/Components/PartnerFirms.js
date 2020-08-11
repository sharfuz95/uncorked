import React, { Component } from 'react'

export default class PartnerFirms extends Component {
    render() {
        return (
            <section id="mentor-firms" className="mentor-firms">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="section-title">
                            <h2>Partner Firms</h2>
                            <p>Our Partners Have Worked at</p>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-1.png")} className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-2.png")} className="img-fluid" alt="" data-aos="zoom-in"
                                    data-aos-delay="100" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-3.png")} className="img-fluid" alt="" data-aos="zoom-in"
                                    data-aos-delay="200" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-4.png")} className="img-fluid" alt="" data-aos="zoom-in"
                                    data-aos-delay="300" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-5.png")} className="img-fluid" alt="" data-aos="zoom-in"
                                    data-aos-delay="400" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("../img/partner_firms/partner-6.png")} className="img-fluid" alt="" data-aos="zoom-in"
                                    data-aos-delay="500" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
