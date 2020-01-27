
import React from 'react';
import App from 'next/app';

import 'semantic-ui-css/semantic.min.css';

// This is a custom "App" component/wrapper that allows you to attach
// other libraries and functionality not built into Next. Here I'm using it 
// to attach the Semantic UI CSS library. On a vanilla React app this would 
// be done in the index.js file

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
        <Component {...pageProps} />
    );
  }
}

export default MyApp;