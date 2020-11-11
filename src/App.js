import React from 'react';

import { BrowserRouter as Router, withRouter, Route, HashRouter } from 'react-router-dom';


import Header from './assets/Components/Header';
import Hero from './assets/Components/Hero';
import SubscriptionPage from './assets/Components/SubscriptionPage'
import Main from './assets/Components/Main';
import Footer from './assets/Components/Footer';

import Stories from './assets/Components/Stories/Stories';
import Events from './assets/Components/Events';
import Guests from './assets/Components/Guests';



import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css';
import Blogs from './assets/Components/Blogs';
import BehindTheCurtains from './assets/Components/BehindTheCurtains';
import GuestComponent from './assets/Components/subComponents/GuestComponent';
import Podcast from './assets/Components/Podcast';
import ReactGa from 'react-ga';



class App extends React.Component {


  constructor() {
    super();
    ReactGa.initialize("UA-169178602-1");
    ReactGa.pageview(window.location.pathname);
  }

  render() {
    return (

      // <GuestComponent imgURL="Tolga.png" name="Tolga Aktas" position="Computer Vision SWE Intern, Google" description="Tolga graduated from the University of Rochester in 2020 after pursuing a degree in Electrical Computer Engineering, and Computer Science. He spent his time in Rochester researching digital and image processing, artificial intelligence, computer vision, robotics, machine hearing, data mining, and machine learning. Despite its rigors, he was fascinated with the amount of information carryover between these fields, and how they complemented or inspired research in one another. He spent his summer in 2019 doing ML at Qualcomm and is presently a computer vision software engineer at Google!" linkedInLink="" />

      <HashRouter basename='/'>
        <div>
          <Header />
          <SubscriptionPage />
          <Route exact path='/' component={Hero} />
          <Route exact path='/' component={Main} />
          <Route exact path='/stories' component={Stories} />
          {/* <Route exact path='/stories' component={StoriesFromYoutube} /> */}
          <Route exact path='/events' component={Events} />
          <Route exact path='/guests' component={Guests} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/podcast' component={Podcast} />
          <Route exact path='/behindthecurtains' component={BehindTheCurtains} />
          <Footer />
        </div>
      </HashRouter>






    );
  }
}


export default App;
