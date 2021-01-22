import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Michelle_pic from '../../img/Michelle_pic.png'



export default class Blogs extends Component {
    render() {
        return (
            <div className = "blogs">
                 <Grid container direction="row" justify="center" alignItems="center" className="blogGrid">
                    <Grid item xs={6}>
                        <div className="main-title">Careers Uncorked Blogs</div>
                        <div className="explanation"><p>FIND OUR INSIGNT ON THINGS FROM GETTING AN MBA TO MAKING THE MOST OF COLLEGE DURING A PANDEMIC</p>
                    
                        </div>
                        <hr className="whiteLine"/>
                        <button className="view-button">View Blogs</button>
                    </Grid>
                    
                    <Grid item xs={5} alignItems="center" className='co-host-info'>
                            
                        <img src={Michelle_pic} alt="Michelle" className="michelePic" /> 
                        <div className="designation">
                            <div className="michelleName">Michelle Shue</div>
                            <div className="michelePosition">Chief Writer</div>
                        </div>
                                
                    </Grid>
                </Grid>
            </div>

            
        )
    }
}
