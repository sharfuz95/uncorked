import React, { Component } from 'react'
import FetchService from '../../helper/FetchService'
import YoutubeVideo from './YoutubeVideo';
import YoutubeStoriesIFrame from './YoutubeStoriesIFrame';



export default class StoriesFromYoutube extends Component {
    constructor() {
        super();
        this.state = {
            responseObject: {},
            loading: true,
        }
    }

    componentDidMount() {
        console.log("Mounted");
        FetchService.GET("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLIy7-i_9rAyQ9teMuV1dJHWuVcsW5y39o&key=AIzaSyBpLHm-j4f9C1ZFQcTCZ_qOAwGy3TDS12U")
            .then((res) => {
                // console.log(res['feed']['entry'][0]['content']['$t']);
                // this.setState({ responseObject: res['feed']['entry'] });
                var listFound = res.items
                console.log(listFound)
                this.setState({ responseObject: listFound });
                this.setState({ loading: false })
                console.log(listFound)
            })
    }


    // Create Same for Iframes
    getStoriesToDisplay() {
        const youtubeItems = [];
        if (!this.state.loading) {
            for (var i = 0; i < this.state.responseObject.length; i++) {
                youtubeItems.push(
                    <YoutubeVideo
                        videoDetails={this.state.responseObject[i]['snippet']} />
                );
            }
        }
        return youtubeItems;
    }
    getIframesToDisplay() {
        const youtubeItems = [];
        if (!this.state.loading) {
            for (var i = 0; i < this.state.responseObject.length; i++) {
                youtubeItems.push(
                    <YoutubeStoriesIFrame videoURL={this.state.responseObject[i]['snippet']['resourceId']['videoId']} />
                );
            }
        }
        return youtubeItems;
    }

    render() {
        return (
            <div className="container storiesFromYoutube">
                <div className="row" >
                    {!this.state.loading &&
                        <>
                            {this.getIframesToDisplay()}
                            {this.getStoriesToDisplay()}
                        </>
                    }
                </div>
            </div>
        )
    }
}
