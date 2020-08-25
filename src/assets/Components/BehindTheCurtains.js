import React, { Component } from 'react'

import BreadCrumbs from './BreadCrumbs'
import BehindTheCurtainsList from './BehindTheCurtainsList'

export default class BehindTheCurtains extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs title="Behind The Curtains" paragraph="About us" />
                <BehindTheCurtainsList />
            </div>
        )
    }
}
