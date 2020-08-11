import React, { Component } from 'react'
import BreadCrumbs from './BreadCrumbs'
import GuestList from './GuestList'

export default class Guests extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs title="Our Guests" paragraph="Meet our amazing guests from the industry, follow along to learn their stories." />
                <GuestList />
            </div>
        )
    }
}
