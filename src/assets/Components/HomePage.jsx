import React, { Component } from 'react'

import {Paper} from '@material-ui/core';
import MainBackDrop from './HomepageComponents/MainBackDrop';



import '../css/style.css';
import Hangouts from './HomepageComponents/Hangouts';
import Blogs from './HomepageComponents/Blogs';
import Podcast from './HomepageComponents/Podcast';
import LinkedIn from './HomepageComponents/LinkedIn';
import SignUp from './HomepageComponents/SignUp';


export default class HomePage extends Component {
    render() {
        return (
            <div>

                <Paper className="homepage-card">
                    <MainBackDrop/>
                </Paper>
                <Paper className="homepage-card">
                    <Hangouts/>
                </Paper>
                <Paper className="homepage-card">
                    <Blogs />
                </Paper>
                <Paper className="homepage-card">
                    <Podcast />
                </Paper>
                <Paper className="homepage-card">
                    <LinkedIn />
                </Paper>
                <Paper className="homepage-card">
                    <SignUp />
                </Paper>
              
            </div>
        )
    }
}
