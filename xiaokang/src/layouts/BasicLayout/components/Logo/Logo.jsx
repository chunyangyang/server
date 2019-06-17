import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render () {
    return (
      <div style={styles.container}>
        <Link to="/" style={styles.logoText}>
          <img src="//www.alasbusy.com/static/index/images/logo.png" alt="logo" />
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  logoText: {
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: '10px',
    fontSize: '22px',
    // color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
