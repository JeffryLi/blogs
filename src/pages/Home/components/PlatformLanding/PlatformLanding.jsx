import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@icedesign/base';

export default class PlatformLanding extends Component {
  static displayName = 'PlatformLanding';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.body}>
          <h2 style={styles.title}>
            在人工智能将替代一切的未来<br />唯有内容的创作无可替代
          </h2>
          <div style={styles.buttons}>
            <Button style={styles.secondaryButton} type="normal">
              <a href="/#/register">注册</a>
            </Button>
            <Button style={styles.primaryButton} type="primary">
              <a style={styles.a} href="/#/login">登录</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  buttons: { textAlign: 'center', marginTop: 33 },
  body: {
    position: 'absolute',
    top: '190px',
    left: '50%',
    marginLeft: '-300px',
    width: '600px',
    color: '#fff',
    maxHeight: '260px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  wrapper: {
    overflow: 'hidden',
    height: 720,
    backgroundImage:
      'url("https://img.alicdn.com/tfs/TB1DgSmSpXXXXaJXpXXXXXXXXXX-2760-1480.jpg")',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundColor: '#66ABFF',
    boxShadow: '0 1px 16px 0 rgba(0,0,0,0.10)',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    letterSpacing: '2px',
    lineHeight: '48px',
    textAlign: 'center',
  },
  primaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    color: '#fff',
  },
  secondaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
  a: {
     color: '#fff'
  }
};
