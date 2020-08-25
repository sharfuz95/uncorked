import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';





export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials" className="testimonials" >
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>What are they saying</p>
                    </div>
                    <OwlCarousel className="testimonials-carousel" data-aos="zoom-in" data-aos-delay="100" autoplay={true} dots={true} loop={true} items={2}>
                        <div className="item testimonial-item">
                            <h2>Ellie Yu</h2>
                            <h4>Product Design Intern - Cress Health</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Sidhant’s professionalism made him an amazing mentor, I’m
                    absolutely happy and honored I got the chance to work with him.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                        <div className="item testimonial-item">
                            <h2>Azmayeen Fayeque Rhythm</h2>
                            <h4>Solution Engineer - Ring Central</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    I gained a new perspective on writing a resume that stands out.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>

                        <div className="item testimonial-item">
                            <h2>May Shin Lyan</h2>
                            <h4>Incoming Analyst - Google Cloud</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    His expertise in personalized consulting and interview tips are
                    gold that can help you land a job.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>

                        <div className="item testimonial-item">
                            <h2>Aung Hein Oo</h2>
                            <h4>Software Engineering Intern - Salesforce</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    I would recommend Sidhant’s service to any student starting out
                    in their career search.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>

                        <div className="item testimonial-item">
                            <h2>Gazi Mahir Ahmed Naven</h2>
                            <h4>Masters Student</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    His in-depth understanding of the consulting industry helped me
                    understand what consulting firms are looking for.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                        <div className="item testimonial-item">
                            <h2>Linh Tran</h2>
                            <h4>Product Manager - Simon Vision Consulting</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    The feedback I received from Sidhant definitely improved my
                    resume significantly.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                        <div className="item testimonial-item">
                            <h2>Jamie Lee Mahshie</h2>
                            <h4>Sr. Human Resources Assistant - DC Bar</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    His advice and expertise were some of the most influential
                    factors in my successful job placement,
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                        <div className="item testimonial-item">
                            <h2>Cai Xu</h2>
                            <h4>Risk Analyst - PayPal</h4>
                            <h4 style={{ marginTop: "5px" }}>Consulted with Sidhant</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    I learned how to structure my response, how to align the job
                    description with my experience and most importantly, how to
                    build confidence during the interview. Landing a job offer
                    within 4 sessions.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            // className "owl-theme" is optional

        )
    }
}
