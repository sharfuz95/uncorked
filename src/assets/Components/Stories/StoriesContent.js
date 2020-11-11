import React, { Component } from 'react'

export default class StoriesContent extends Component {
    render() {
        return (
            <div>
                {/* <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <p>
                            Our Stories So Far
          </p>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Beatriz.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Beyond The Comfort Zone: Making The Most Out Of College W/
                                            Beatriz
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            A former international student at the University of Rochester, Beatriz recalls her college
                                            experience, sharing how she maximized her time, excelling in both academics and on-campus
                                            involvement. Now a Business Analyst at Deloitte, she walks you through how she landed her current
                                            job and her consulting experiences, explaining what it’s really like to be in the consulting
                                            industry.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#beatrizVideo">
                                            Watch
                  </button>
                                        <a href="https://www.linkedin.com/in/beatriz-gil-gonzalez-a7b13315b/" target="_blank"><button
                                            type="button" className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/grace.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Recruiting In A Pandemic & Post-Pandemic World W/ Grace
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Ever wonder what it’s like to be on the other end of your application? That’s exactly what Grace
                                            does as an Executive Recruiter at Adecco. In the recorded livestream, Grace relays her
                                            recommendations to job applicants, giving tips and tricks on how to be a successful candidate.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#graceVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/grace-czechowski/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Lauren.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Making the Most Of An Internship Cancellation W/ Lauren
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Rising senior at Loyola Marymount University, Lauren shares career advice about making the most out
                                            of the COVID-19 situation. Check out the video to hear how Lauren triumphed beyond a cancelled Walt
                                            Disney internship to having a new software engineering internship at SAP.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#laurenVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/llaurenllindsey/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Rhythm.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Why Persistence Is The Key To A Successful Job Hunt W/
                                            Azmayeen
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Due to COVID-19, the job market was turned upside-down in a matter of days. Azmayeen, a Solutions
                                            Engineer at RingCentral, narrates his story on how he landed a job as an international student and
                                            overcame the challenges of job hunting and the struggle of post-graduation.
                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#azmayeenVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/azmayeen-fayeque-rhythm/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Evan.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>Excelling Beyond the GPA with <br />Evan Basta</h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Currently a Sales Engineer at Cisco, Evan tells the story
                                            of his unconventional 6-year conservatory turned university
                                            experiences and how that led him to his current job. Watch
                                            the livestream recording to hear all of his great tips and
                                            suggestions on finding your passion and career path throughout
                                            college.
                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#evanVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/evan-basta-1064b589/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Daniel.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Learning To Dance With Life: Succeeding In The Face Of
                                            Adversity W/Daniel Muñoz
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            A current student at the University of Rochester, Daniel Munoz discusses his journey throughout
                                            college so far and how he adjusted to the obstacles he faced due to COVID-19. Check out the video to
                                            learn more about how Daniel overcomes challenges and goes above and beyond.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#danielVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/danielmunozhuerta/" target="_blank" target="_blank"><button
                                            type="button" className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Evis.png")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>Planning Your Way To A Top MBA W/<br />Evis Drenova</h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Are you currently in undergrad contemplating graduate school? Evis, Director of Product Development
                                            at Truedata, formerly wanted to attend medical school, but ended up at one of the premier MBA
                                            programs in the country -- the University of Chicago Booth School of Business. Head over to the
                                            Careers Uncorked YouTube channel to learn about his post-undergraduate career and MBA experiences.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#evisVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/evis-drenova-89857944/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="storyContent" data-aos="fade-up">
                        <div className="d-flex flex-column d-lg-flex flex-lg-row align-items-center">
                            <div className="p-2 col-lg-3">
                                <img src={require("../img/trainers/Harshul.jpeg")} className="img-fluid trainerImage" alt="Responsive image" />
                            </div>
                            <div className="p-2 col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="p-2">
                                        <h3>
                                            Persistence Wins Over Bad Luck W/<br />Harshul Batra
                  </h3>
                                    </div>
                                    <div className="p-2">
                                        <div className="descriptionOfVideo">
                                            Goldman Sachs is one of the most recognizable names in the finance and investment banking
                                            industries. Formerly an international student at the University of Rochester, today Harshul is a
                                            Treasury Services and Operations Analyst at Goldman Sachs. However, his success was not easily
                                            attained. Click on the video to learn more about Harshul’s journey to Goldman Sachs.

                  </div>
                                    </div>
                                    <div className="p-2">
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#harshulVideo">
                                            Watch
                  </button>

                                        <a href="https://www.linkedin.com/in/harshulbatra/" target="_blank"><button type="button"
                                            className="btn btn-primary">
                                            LinkedIn
                    </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div> */}
            </div>
        )
    }
}
