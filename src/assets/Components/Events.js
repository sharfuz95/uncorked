import React from 'react'

import BreadCrumbs from './BreadCrumbs'
import EventDetail from './EventDetail'


export default function Events() {
    return (
        <div>
            <BreadCrumbs title="Events" paragraph="Check out our upcoming events!" />
            <EventDetail />
        </div>
    )
}
