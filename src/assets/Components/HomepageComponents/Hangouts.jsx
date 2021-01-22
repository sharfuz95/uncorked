import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import SidPicture from '../../img/sid.png'
import SharfuzPicture from '../../img/sharfuz.png'

import YoutubeWhiteLogo from '../../img/youtube-white-2.png'
import LinkedInWhiteLogo from '../../img/linkedin-white-2.png'
import FacebookWhiteLogo from '../../img/facebook-white-2.png'



export default class Hangouts extends Component {
    render() {
        return (

            <div className = "hangout">
                 <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <div className="main-title">Careers Uncorked Hangouts</div>
                        <div className="sub-header">Our Livestream</div>
                        <div className="explanation"><p>Join our hangouts where we talk about their struggles, barriers and experiences individuals 
                            wentt hrough to achieve success. Everyone has a great story and we can learn from these shared experiences.
                            Because chances are you are going through the same struggles and we are here for you. To learn, grow and network! 
                            Build relationships, uncork your potential and share your stories to help others.</p>
                    
                        </div>
                        <Grid container direction="row" justify="flex-start">
                            <Grid item xs={2}>
                                <img src={LinkedInWhiteLogo} alt="linkedin"/> 
                            </Grid>
                            <Grid item xs={2}>
                                <img src={YoutubeWhiteLogo} alt="youtube" /> 
                            </Grid>
                            <Grid item xs={2}>
                                <img src={FacebookWhiteLogo} alt="facebook" /> 
                            </Grid>
                        </Grid>
                        <button className="view-button">View Livestream</button>
                    </Grid>
                    <Grid item xs={5} alignItems="center" className='co-host-info'>
                        <Grid container spacing={3} alignItems="center" >
                            <Grid item xs={5}>
                                <img src={SidPicture} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <div className="co-host-name">Sidhant Ahluwalia</div>
                                <div className="co-host-position">Co Host</div>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={5}>
                                <img src={SharfuzPicture} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <div className="co-host-name">Sharfuz Sifat </div>
                                <div className="co-host-position">Co Host</div>
                                
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                
            </div>

        )
    }
}
