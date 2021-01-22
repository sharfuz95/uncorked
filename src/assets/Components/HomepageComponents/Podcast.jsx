import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import DanielPic from '../../img/Daniel.png'

import SpotifyPic from '../../img/spotify.png'
import Applepodcast from '../../img/applePodcast.png'

export default class Podcast extends Component {
    render() {
        return (

            <div className = "podcast">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <div className="main-title">International Perspective</div>
                        <div className="sub-header">Our Podcast</div>
                        <div className="explanation"><p>A podcast where we discuss the success stories, experiences, and challenes of international students. If you are an internationla student looking to carve your own path or if you are somenoe inteerested in knowing what it is like to be an international student, this is the podcast for you!</p>
                    
                        </div>
                        <Grid container direction="row" justify="flex-start">
                            <Grid item>
                                <img src={Applepodcast} alt="apple" /> 
                            </Grid>
                            <Grid item >
                                <img src={SpotifyPic} alt="spotify"/> 
                            </Grid>
                        </Grid>
                        <button className="view-podcast">View Podcasts</button>
                    </Grid>
                    <Grid item xs={5} alignItems="center" className='co-host-info'>
                        <img src={DanielPic} alt="Daniel" className="DanPic" /> 
                        <div className="designation">
                            <div className="DanName">Daniel Munoz</div>
                            <div className="DanPosition">Podcast Host</div>
                        </div>
                                        
                    </Grid>
                </Grid>
            
            </div>

          
        )
    }
}
