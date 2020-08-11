import React, { Component } from 'react'

export default class StoriesIFrame extends Component {
    render() {
        return (
            <div>
                {/* <!-- The following are the divs with the videos. -->
                <!-- They are kept separately so that they overlay the screen properly --> */}
                <div className="modal fade" id="beatrizVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M_b-GGVwzF0" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="1"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="graceVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mW8MqhelHBA" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="2"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="laurenVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FY55ueH8SIo" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="3"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="azmayeenVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GBZSWizQEpc" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="4"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="evanVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g6XKD93g8GE" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="5"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="evisVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kTjniguS0TI" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="6"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="harshulVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eQIQr6VNw6E" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="7"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="danielVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oOCEbUjuF9Y" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="8"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
