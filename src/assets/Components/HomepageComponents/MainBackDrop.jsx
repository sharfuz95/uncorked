import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../../img/mainpage-back-drop.png';

const useStyles = makeStyles((theme) => ({
    mainBackDrop: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        textAlign: 'center',

        minHeight: '85vh',
        minWidth:' 100%',

        position:'relative',

        display: 'flex',
        flexDirection: 'column'
      }
    },
    mainTitle: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100px',
            fontWeight: 'bold',
            paddingTop: '5%',
            position: 'relative',
        }
    },
    subHeader: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            letterSpacing: '8px',
            fontSize: '40px',
            paddingTop: '4px',
        }
    },
    explanation: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '8px',
            fontSize: '24px',
        }
    },
    signUpButton: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            padding:' 2% 4%',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: 'rgba(253, 253, 253, 0.755)',
            position: 'absolute',
            bottom:'64px',
            left:'44%',
        }
    }
  }));

export default function MainBackDrop() {
    const classes = useStyles();
    return (
        <div className = {classes.mainBackDrop}>
            <div className={classes.mainTitle}>CAREERS UNCORKED</div>
            <div className={classes.subHeader}>ONE COMMUNITY, WHERE JOURNEYS CONVERGE</div>
            <div className={classes.explanation}>SIGN UP TO OUR MAILING LIST TO RECEIVE A REMINDER FOR OUR
                <br />
                UPCOMING EVENTS
            </div>

            <button className={classes.signUpButton}>Sign Up</button>
            
            {/* The following is a hacky solution to maintain the size  */}
            {/* <img src={backgroundImage} style={{visibility: 'hidden'}} /> */}

        </div>
    )
}
