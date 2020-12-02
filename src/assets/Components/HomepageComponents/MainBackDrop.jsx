import { Typography } from '@material-ui/core'
import React, { Component } from 'react'


import backgroundImage from '../../img/mainpage-back-drop.png';


export default class MainBackDrop extends Component {
    render() {
        return (
            <div className = "main-back-drop">
                <div className="main-title">CAREERS UNCORKED</div>
                <div className="sub-header">ONE COMMUNITY, WHERE JOURNEYS CONVERGE</div>
                <div className="explanation">SIGN UP TO OUR MAILING LIST TO RECEIVE A REMINDER FOR OUR
                <br />
                UPCOMING EVENTS</div>
                
                {/* The following is a hacky solution to maintain the size  */}
                {/* <img src={backgroundImage} style={{visibility: 'hidden'}} /> */}

            </div>
        )
    }
}
