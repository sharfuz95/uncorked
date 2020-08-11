import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Changing The Way You Look At Careers</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={require("../img/aboutpic.png")} className="img-fluid" alt="" />
                            <figcaption>
                                Founding partners Sharfuz and Sid outside a career fair. Trying
                                to be optimistic after realizing that none of the recruiters are
                                interested in them
                        </figcaption>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Let’s start the conversation</h3>
                            <p className="font-italic">
                                Uncorked is new and it brings a refreshing approach. Its a
                                community and a network built on the foundation of open stories
                                and fostering relationships. We typically see the success
                                stories on platforms like LinkedIn. Here we want to talk about
                                their struggles, barriers and experiences individuals went
                                through to achieve success. Everyone has a great story and we
                                can learn from these shared experiences. Because chances are you
                                are going through the same struggles and we are here for you. To
                                learn, grow and network! Build relationships, uncork your
                                potential and share your stories to helps others.
                         </p>
                            <ul>
                                <li>
                                    <i className="icofont-check-circled"></i> Find individuals you can relate to
                             </li>
                                <li>
                                    <i className="icofont-check-circled"></i> Meet individuals and
                build a real relationships and learn from them
              </li>
                                <li>
                                    <i className="icofont-check-circled"></i> Discover individuals
                from all walks of life and from various industries
              </li>
                            </ul>
                            <p>
                                Sign up for our virtual hangouts every weekend!
            </p>
                            <a href="stories.html" className="learn-more-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
