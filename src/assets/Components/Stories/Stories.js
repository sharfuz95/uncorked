import React, { Component } from 'react'

import BreadCrumbs from '../BreadCrumbs'
import About from '../About'
import StoriesIFrame from './StoriesIFrame'
import StoriesContent from './StoriesContent'
import Testimonials from '../Testimonials'
import StoriesFromYoutube from './StoriesFromYoutube'

export default class Stories extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs title="Stories" paragraph="Their Journeys & Experiences" />
                {/* <About /> */}
                <StoriesFromYoutube />
                {/* <StoriesContent /> */}
                <Testimonials />
            </div>
        )
    }
}
