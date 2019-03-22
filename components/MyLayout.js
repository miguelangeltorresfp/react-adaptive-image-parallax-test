import { ParallaxProvider } from 'react-scroll-parallax';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <ParallaxProvider>
    <div style={layoutStyle}>{props.children}</div>
  </ParallaxProvider>
);

export default Layout;
