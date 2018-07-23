import React, { Component } from 'react';
import ExcellentHomePage from './components/ExcellentHomePage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Article extends Component {
  static displayName = 'Article';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article-page">
        <Header />
        <ExcellentHomePage />
        <Footer />
      </div>
    );
  }
}
