import React, { Component } from 'react'
import BreadCrumbs from './BreadCrumbs'

export default class Podcast extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="podcast" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://mailchi.mp/30ef282f4fc9/international-perspective" frameborder="0" title="SubsciptionLink"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BreadCrumbs title="Podcast" paragraph="International Perspective" />
                <div className='container'>
                    <img
                        src={require("../img/podcast.jpg")}
                        className="img-fluid mainImage"
                        alt="..."
                    />
                </div>

                <div className='container podcast-description'>
                    <p>
                        A podcast where we discuss the success stories, experiences, and challenges of international students. If you are an international student looking to know carve your own path or if you are someone interested in knowing what it is like to be an international student this is the podcast for you!
                        An Uncorked production Hosted by Daniel Munoz.<br />
                        <button type="button" className="get-started-btn" data-toggle="modal" data-target="#podcast">
                            Tune In
            </button>



                    </p>
                </div>
                <div className='container podcastList'>
                    <iframe src="https://www.listennotes.com/podcasts/international-perspective-careers-uncorked--9NTS7GOUVX/embed/" height="600px" width="100%" frameborder="0" scrolling="no" loading="lazy"></iframe>                </div>


                <script async defer onload="redcircleIframe();" src="https://api.podcache.net/embedded-player/sh/31c96cad-9916-4e70-9b53-83d9b7a1ae7c/ep/9668a1bb-d4dd-4f3c-a0d5-5d542466f575"></script>
                <div class="redcirclePlayer-9668a1bb-d4dd-4f3c-a0d5-5d542466f575"></div>
                {/* <p>Powered by <a class="redcircle-link" href="https://redcircle.com?utm_source=rc_embedded_player&utm_medium=web&utm_campaign=embedded_v1">RedCircle</a></p> */}
            </div>
        )
    }
}
