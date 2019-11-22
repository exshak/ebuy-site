import App from 'next/app';
import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className='layout'>{children}</div>;
  }
}

export default class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
