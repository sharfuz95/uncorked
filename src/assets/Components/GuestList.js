import React, { Component } from 'react'
import GuestComponent from './subComponents/GuestComponent';

import FetchService from '../helper/FetchService'

export default class GuestList extends Component {

    constructor() {
        super();
        this.state = {
            responseObject: {},
            loading: true,
            formattedObject: []
        }
    }

    componentDidMount() {
        this.getGuestDetails();
    }

    getGuestDetails() {
        FetchService.GET("https://spreadsheets.google.com/feeds/list/1Gss26Aju6iQJYd1hHAXk7CyJ4ibVbZ_2fvuMd-z-gnE/od6/public/basic?alt=json")
            .then((res) => {
                // console.log(res['feed']['entry'][0]['content']['$t']);
                // this.setState({ responseObject: res['feed']['entry'] });
                this.getObject(res['feed']['entry']);
                this.setState({ loading: false });

            })
    }

    //Following code is pretty janky and hacked together. A better api structure would much help this and should be changed asap
    getObject(responseObject) {
        for (let i = 0; i < responseObject.length; i++) {
            var stringWithInfo = responseObject[i]['content']['$t'].toString();

            console.log(stringWithInfo);
            var fullname = stringWithInfo.substring(stringWithInfo.indexOf('fullname: ') + 10, stringWithInfo.indexOf(', position'));
            var position = stringWithInfo.substring(stringWithInfo.indexOf(', position: ') + 12, stringWithInfo.indexOf(', image'));
            var imageURL = stringWithInfo.substring(stringWithInfo.indexOf(', image: ') + 9, stringWithInfo.indexOf(', description'));
            var description = stringWithInfo.substring(stringWithInfo.indexOf(', description: ') + 15, stringWithInfo.indexOf(', linkedin'));
            var linkedIn = stringWithInfo.substring(stringWithInfo.indexOf(', linkedin: ') + 12, stringWithInfo.length);

            var entry = { fullname, position, imageURL, description, linkedIn };
            this.state.formattedObject.push(entry);
            // listToAdd.push(entry);
            console.log(this.state.formattedObject);
        }
    }

    getListToDisplay() {
        const guestItems = [];
        if (!this.state.loading) {

            console.log("Size is: " + this.state.formattedObject.length);
            for (var i = 0; i < this.state.formattedObject.length; i++) {
                guestItems.push(
                    <GuestComponent
                        imgURL={this.state.formattedObject[i].imageURL} name={this.state.formattedObject[i].fullname}
                        position={this.state.formattedObject[i].position}
                        description={this.state.formattedObject[i].description}
                        linkedInLink={this.state.formattedObject[i].linkedIn}
                        key={i} />
                );
            }
        }
        return guestItems;
    }


    render() {




        // console.log("GuestItems is " + guestItems);
        return (

            <section id="trainers" className="trainers">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">

                        {!this.state.loading &&
                            <>
                                {this.getListToDisplay()}
                            </>
                        }


                    </div>
                </div>
            </section>
        )
    }
}
