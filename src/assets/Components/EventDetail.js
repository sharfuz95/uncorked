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
                                    <img src={require("../img/Jforbes.png")} alt="..." />
                                </div>
                                <div style={{ marginTop: "0.5%" }} className="card-body">
                                    <h5 className="card-title">
                                        <a href="">Changing the Way We Rent with Kopa YC
                  </a>
                                    </h5>
                                    <p className="font-italic text-center">
                                        September 16th, Wednesday, 7PM
                </p>
                                    <p className="card-text">
                                        Jack is a hard-working, dedicated, and passionate front-end developer, business development representative, and leader of Kopa. Jack studied business and engineering at the University of Waterloo and has worked at both startups and Fortune 500 companies including Google and Salesforce. He built the first version of Kopa after teaching himself how to code. Outside of work, you’ll find Jack partaking in nearly any outdoor activity, especially soccer, skiing, and hiking. He also enjoys playing the same six songs on the piano.
                </p>



                                    <p>Stream the session here on September 16th, Wednesday, 7PM</p>
                                    <p>
                                        <a href="https://www.youtube.com/watch?v=fK0I9cZsMOg">View on YouTube</a>
                                    </p>
                                    <p>
                                        <a href="https://www.facebook.com/careersuncorked/posts/160499229013848">View on Facebook</a>
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
