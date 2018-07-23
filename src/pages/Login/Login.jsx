import React, { Component } from 'react';
import UserLogin from './components/UserLogin';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Login extends Component {
  static displayName = 'Login';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page">
        <Header />
        <UserLogin />
        <Footer />
      </div>
    );
  }
}
