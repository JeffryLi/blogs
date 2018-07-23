import React, { Component } from 'react';
import UserRegister from './components/UserRegister';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Register extends Component {
  static displayName = 'Register';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="register-page">
        <Header />
        <UserRegister />
        <Footer />
      </div>
    );
  }
}
