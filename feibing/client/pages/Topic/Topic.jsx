import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import BrandDisplay from './components/BrandDisplay';
import FooterLinks from './components/FooterLinks';

export default class Topic extends Component {
  static displayName = 'Topic';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {    
    return (
      <div className="topic-page">
        <LandingIntroBanner />
        <BrandDisplay />
        <FooterLinks />

      </div>
    );
  }
}
