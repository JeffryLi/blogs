import React, { Component } from 'react';

const LIGHT =
  'https://gw.alicdn.com/tfs/TB1KmB6nntYBeNjy1XdXXXXyVXa-224-60.png';
const DARK =
  'http://www.jeffry.online/image/logo.png';

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          height: 45,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="129" height="45" alt="logo" />
        </a>
      </div>
    );
  }
}
