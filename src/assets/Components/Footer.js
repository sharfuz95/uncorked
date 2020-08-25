import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h3>Uncorked</h3>
                                <p>
                                    <strong>Email:</strong> careersuncorked@gmail.com <br />
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="/stories">Our Stories</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="/events">Events</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="/blogs">Blogs</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="/guests">Our Partners</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-4 col-md-6 footer-newsletter" id="mc_embed_signup">
                                <h4>Join Our Newsletter</h4>
                                <p>
                                    Sign up for our weekly insightful short reads from our partners!
            </p>
                                <form
                                    action="https://careers-uncorked.us18.list-manage.com/subscribe/post?u=9706eea2cb4781cbf005e8306&amp;id=31cdf804d2"
                                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                                    target="_blank" noValidate>
                                    <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address"
                                        required /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">
                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Careers Uncorked</span></strong>. All Rights Reserved
        </div>
                        <div className="credits">
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://www.linkedin.com/company/65840088" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://www.facebook.com/Careers-Uncorked-112031457193959" className="facebook"><i
                            className="bx bxl-facebook"></i></a>
                    </div>
                </div>
            </footer>
        )
    }
}
