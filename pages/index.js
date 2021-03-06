/* eslint-disable react/react-in-jsx-scope */
import { Parallax } from 'react-scroll-parallax';
import AdaptiveImage from 'react-adaptive-image';
import Layout from '../components/MyLayout.js';

const Index = props => (
  <Layout>
    <h1>React Scroll Parallax - Adaptive Image</h1>
    <Parallax className="custom-class" y={[-20, 20]}>
      <AdaptiveImage fileName="sample.jpg" />
    </Parallax>
    <Parallax className="custom-class" y={[-20, 20]}>
      <AdaptiveImage fileName="sample.jpg" />
    </Parallax>
    <Parallax className="custom-class" y={[-20, 20]}>
      <AdaptiveImage fileName="sample.jpg" />
    </Parallax>
    <style global jsx>
      {`
        img {
          width: 100%;
          height: auto;
        }
        container {
          height: 500px;
        }
      `}
    </style>
  </Layout>
);

export default Index;
