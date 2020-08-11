import React from 'react';

import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';


import Header from './assets/Components/Header';
import Hero from './assets/Components/Hero';
import SubscriptionPage from './assets/Components/SubscriptionPage'
import Main from './assets/Components/Main';
import Footer from './assets/Components/Footer';

import Stories from './assets/Components/Stories';
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



class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Header />
          <SubscriptionPage />
          <Route path='/' exact component={Hero} />
          <Route path='/' exact component={Main} />
          <Route path='/stories' component={Stories} />
          <Route path='/events' component={Events} />
          <Route path='/guests' component={Guests} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/behindthecurtains' component={BehindTheCurtains} />

          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
