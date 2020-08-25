import React, { Component } from 'react'

import BreadCrumbs from './BreadCrumbs'
import BlogList from './BlogList'

export default class Blogs extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs title="Blogs And Articles" paragraph="Read blogs and articles by our partners to gain industry insight and
          progress your career." />
                <BlogList />

            </div>
        )
    }
}
