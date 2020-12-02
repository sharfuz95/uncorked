import React, { Component } from 'react'

import {Paper} from '@material-ui/core';
import MainBackDrop from './HomepageComponents/MainBackDrop';



import '../css/style.css';


export default class HomePage extends Component {
    render() {
        return (
            <div>

                <Paper className="homepage-card">
                    <MainBackDrop/>
                </Paper>
              
            </div>
        )
    }
}
