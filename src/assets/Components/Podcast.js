import React, { Component } from 'react'
import BreadCrumbs from './BreadCrumbs'

export default class Podcast extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs title="Podcast" paragraph="International Perspective" />
                <img
                    src={require("../img/podcast.jpg")}
                    className="img-fluid"
                    alt="..."
                />

        International Perspective
        A podcast where we discuss the success stories, experiences, and challenges of international students. If you are an international student looking to know carve your own path or if you are someone interested in knowing what it is like to be an international student this is the podcast for you!
        An Uncorked production Hosted by Daniel Munoz.
        Sign up to get more updates and get sneak peeks to the next episodes here: <a href="https://mailchi.mp/30ef282f4fc9/international-perspective"></a>



                <script async defer onload="redcircleIframe();" src="https://api.podcache.net/embedded-player/sh/31c96cad-9916-4e70-9b53-83d9b7a1ae7c/ep/9668a1bb-d4dd-4f3c-a0d5-5d542466f575"></script>
                <div class="redcirclePlayer-9668a1bb-d4dd-4f3c-a0d5-5d542466f575"></div>
                <p>Powered by <a class="redcircle-link" href="https://redcircle.com?utm_source=rc_embedded_player&utm_medium=web&utm_campaign=embedded_v1">RedCircle</a></p>
            </div>
        )
    }
}
