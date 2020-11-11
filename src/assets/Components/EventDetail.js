import React, { Component } from 'react'

import FetchService from '../helper/FetchService'

export default class EventDetail extends Component {

    constructor() {
        super();
        this.state = {
            responseObject: {},
            loading: true,
            formattedObject: {}
        }
    }

    componentDidMount() {
        console.log("Mount");
        this.getGuestDetails();
    }

    getGuestDetails() {
        FetchService.GET("https://spreadsheets.google.com/feeds/list/1yBWFVVbVmwLQEtjBSWNj4ioaoVhUZxv2NNm4VN1BUrY/od6/public/basic?alt=json")
            .then((res) => {
                // console.log(res['feed']['entry'][0]['content']['$t']);
                // this.setState({ responseObject: res['feed']['entry'] });
                this.getObject(res['feed']['entry']);


            })
    }

    //Following code is pretty janky and hacked together. A better api structure would much help this and should be changed asap
    getObject(responseObject) {
        var stringWithInfo = responseObject[0]['content']['$t'].toString();

        console.log(stringWithInfo);
        // var dateTime = stringWithInfo.substring(stringWithInfo.indexOf('fullname: ') + 10, stringWithInfo.indexOf(', fullname'));
        var fullname = stringWithInfo.substring(stringWithInfo.indexOf('fullname: ') + 10, stringWithInfo.indexOf(', position'));
        var position = stringWithInfo.substring(stringWithInfo.indexOf(', position: ') + 12, stringWithInfo.indexOf(', image'));
        var imageURL = stringWithInfo.substring(stringWithInfo.indexOf(', image: ') + 9, stringWithInfo.indexOf(', description'));
        var description = stringWithInfo.substring(stringWithInfo.indexOf(', description: ') + 15, stringWithInfo.indexOf(', linkedin'));
        var linkedIn = stringWithInfo.substring(stringWithInfo.indexOf(', linkedin: ') + 12, stringWithInfo.indexOf(', sessiondate:'));
        var sessionDate = stringWithInfo.substring(stringWithInfo.indexOf(', sessiondate: ') + 15, stringWithInfo.indexOf(', sessionday:'));

        var sessionDay = stringWithInfo.substring(stringWithInfo.indexOf(', sessionday: ') + 14, stringWithInfo.indexOf(', sessiontime:'));
        var sessionTime = stringWithInfo.substring(stringWithInfo.indexOf(', sessiontime: ') + 15, stringWithInfo.indexOf(', youtubelink:'));
        var youtubeLink = stringWithInfo.substring(stringWithInfo.indexOf(', youtubelink: ') + 15, stringWithInfo.indexOf(', facebooklink:'));
        var facebookLink = stringWithInfo.substring(stringWithInfo.indexOf(', facebooklink: ') + 16, stringWithInfo.length);

        // var linkedIn = stringWithInfo.substring(stringWithInfo.indexOf(', linkedin: ') + 12, stringWithInfo.length);
        var imageID = this.getImageID(imageURL);

        var entry = { fullname, position, imageID, description, linkedIn, sessionDate, sessionDay, sessionTime, youtubeLink, facebookLink };
        this.setState({ formattedObject: entry });
    }

    getImageID(imageURL) {
        var imageID = imageURL.substring(imageURL.indexOf('/d/') + 3, imageURL.indexOf('/view'));
        return imageID;
    }

    render() {
        return (
            <>
                <section id="events" className="events">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={"https://drive.google.com/uc?export=view&id=" + this.state.formattedObject.imageID} alt="new" className="img-fluid" />
                                    </div>
                                    <div style={{ marginTop: "0.5%" }} className="card-body">
                                        <h5 className="card-title">
                                            <a href="">  {this.state.formattedObject.fullname}
                                            </a>
                                        </h5>
                                        <p className="font-italic text-center">
                                            {this.state.formattedObject.sessionDate}, {this.state.formattedObject.sessionTime}
                                        </p>
                                        <p className="card-text">
                                            {this.state.formattedObject.description}
                                        </p>

                                        {/* fullname, position, imageURL, description, linkedIn, 
                                        sessionDate, sessionDay, sessionTime, youtubeLink, facebookLink  */}

                                        <p>Stream the session here on {this.state.formattedObject.sessionDate},
                                    {this.state.formattedObject.sessionDay}, {this.state.formattedObject.sessionTime}</p>
                                        <p>
                                            <a href={this.state.formattedObject.youtubeLink} target="_blank">View on YouTube</a>
                                            {/* // */}
                                        </p>
                                        <p>
                                            <a href={this.state.formattedObject.facebookLink}>View on Facebook</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
