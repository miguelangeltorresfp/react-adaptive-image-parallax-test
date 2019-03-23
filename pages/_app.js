import React from 'react';
import App, { Container } from 'next/app';
import { initImages } from 'react-adaptive-image';

initImages({
  imageResolver(image) {
    const baseCloudinaryURL =
      'https://res.cloudinary.com/migue-tests/image/upload';

    return `${baseCloudinaryURL}/w_${image.width}/${image.fileName}`;
  },
});
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
