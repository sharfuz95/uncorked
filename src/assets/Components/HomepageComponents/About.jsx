import React from 'react'
import { Grid } from '@material-ui/core'

import UncorkedLogo from '../../img/uncorkedLogo.png'


export default function About() {
    return (
        <div className = "AboutUsPage">
            
                 <Grid  container direction="row" justify="center" alignItems="center" className="blogGrid">
                     <Grid item xs = {6}>
                        <img src={UncorkedLogo} alt="uncorkedLogo" className="uncorkedLogo" /> 
                     </Grid>
                    <Grid item xs={4}>
                        <div className="main-title">About </div>
                        <div className="sub-header">CAREERS UNCORKED</div>
                        <div className="explanation"><p>Uncorked is new and it brings a refreshing approach.
                                It's a community and a network built on the foundation
                                of open stories and fostering relationships.</p>
                                <p>Everyone has a great story and we can learn from these
                                shared experiences. Because chances are you are
                                going through the same struggles and we are here for
                                you. To learn, grow and network! Build relationships,
                                uncork your potential and share your stories to helps
                                others.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}
