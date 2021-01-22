import React from 'react'
import { Grid } from '@material-ui/core'

import MailPic from '../../img/MailImage.png'



export default function SignUp() {
    return (
        <div className = "SignUpPage">
            
                 <Grid  container direction="row" justify="center" alignItems="center" className="blogGrid">
                     <Grid item xs = {6}>
                        <img src={MailPic} alt="mailImage" className="mailImage" /> 
                     </Grid>
                    <Grid item xs={6}>
                        <div className="main-title">SIGN UP </div>
                        <div className="explanation">TO OUR MAILING LIST</div>
                        <button className="view-button">Sign Up</button>
                    </Grid>
                </Grid>
            </div>
    )
}
