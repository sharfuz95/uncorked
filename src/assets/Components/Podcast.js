import React, { Component } from 'react'
import BreadCrumbs from './BreadCrumbs'
import PodcastEpisode from './subComponents/PodcastEpisode'

export default class Podcast extends Component {
    render() {
        return (
            <div className="podcastMain">
                <div className="modal fade" id="podcast" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="responsive">
                                    <iframe width="560" height="315" src="https://mailchi.mp/30ef282f4fc9/international-perspective" frameBorder="0" title="SubsciptionLink"></iframe>
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
                <div className='container'>

                    <PodcastEpisode />


                </div>
            </div>
        )
    }
}
