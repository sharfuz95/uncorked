import React, { Component } from 'react'
import { Grid } from '@material-ui/core'


import InImageLogo from '../../img/inImage.png'

import DeloitLogo from '../../img/deloitteLogo.png'
import EYLogo from '../../img/EYLogo.png'
import MnCLogo from '../../img/MnCLogo.png'
import MicrosoftLogo from '../../img/MicrosoftLogo.png'
import IBMLogo from '../../img/IBMLogo.png'
import AmazonLogo from '../../img/amazonLogo.png'





export default class LinkedIn extends Component {
    render() {
        return (

            <div className = "linkedInPage">
                 <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <img className="inImageLogo" src={InImageLogo} alt="linkedin"/>
                        <div className="sub-header">JOIN OUR COMMUNITY</div>
                        <div className="main-title">Careers Uncorked <br /> On LinkedIn</div>
                        <div className="explanation"><p>Follow our page on LinkedIn to connect 
                            with us and stay up to date with our resources.</p>
                    
                        </div>
                        <button className="view-button">Follow us on Linkedin</button>
                    </Grid>
                    <Grid item xs={5} alignItems="center" className='co-host-info'>
                        <div className="sub-section-header">WE'RE OFFERING FREE LINKEDIN PROFILE REVIEWS</div>
                        <br/>
                        <div className="sub-section-sub-header">TO HELP YOU GET CLOSER TO YOUR NEXT JOB!</div>
                        <br/>
                        <div className="sub-section-explanation">Our reviewers have received interviews from 
                        <br/>
                        companies including</div>
                        <br/><br/><br/>


                        
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={4}>
                                <img src={DeloitLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <img src={EYLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <img src={MnCLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <img src={MicrosoftLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <img src={IBMLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                            <Grid item xs={4}>
                                <img src={AmazonLogo} alt="sid" className="co-host-picture" /> 
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
                
            </div>

        )
    }
}
