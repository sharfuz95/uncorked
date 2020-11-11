import React, { Component } from 'react'

export default class PodcastEpisode extends Component {

    render() {
        return (
            <div className='podcastList'>
                <iframe className='podcastListItem' src="https://open.spotify.com/embed-podcast/episode/5sic0qWao3iA3iE3pArf1k" width="100%" height="230" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className='podcastListItem' src="https://open.spotify.com/embed-podcast/episode/47LbiVmeXp8srhER5ONqi5" width="100%" height="230" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className='podcastListItem' src="https://open.spotify.com/embed-podcast/episode/0Ft600qNDtOjpSM7fp5qTD" width="100%" height="230" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className='podcastListItem' src="https://open.spotify.com/embed-podcast/episode/4J1aBIRkFRCtaEvksgsKiN" width="100%" height="230" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div >
        )
    }
}
