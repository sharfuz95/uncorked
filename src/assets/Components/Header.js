import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex align-items-center">
                    <a href="/" className="logo mr-auto"><img src={require("../img/logo/logo2.png")} alt="" className="img-fluid" /></a>
                    <h1 className="logo mr-auto"><a href="/">Uncorked</a></h1>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse nav-menu navbar-collapse" id="navbarSupportedContent">
                    <li><NavLink to="/" exact activeClassName="selected">Let's Start</NavLink></li>
                    <li><NavLink to="/stories" exact activeClassName="selected">Stories</NavLink></li>
                    <li><NavLink to="/events" exact activeClassName="selected">Events</NavLink></li>
                    <li><NavLink to="/guests" exact activeClassName="selected">Guests</NavLink></li>
                    <li><NavLink to="/blogs" exact activeClassName="selected">Blogs</NavLink></li>
                    <li><NavLink to="/behindthecurtains" exact activeClassName="selected">Behind the Curtains</NavLink></li>

                    <button type="button" className="get-started-btn" data-toggle="modal" data-target="#getStarted">
                        Get Started
            </button>
                </div>


            </nav>
        )
    }
}
