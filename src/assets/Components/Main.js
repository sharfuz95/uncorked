import React, { Component } from 'react'

// Components
import About from './About'
import Client from './Client'
import WhyUs from './WhyUs'
import PartnerFirms from './PartnerFirms'
import Testimonials from './Testimonials'

export default class Main extends Component {
    render() {
        return (
            <div>
                <About />
                <Client />
                <WhyUs />
                <PartnerFirms />
                <Testimonials />

            </div>
        )
    }
}
