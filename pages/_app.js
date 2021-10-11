import App from 'next/app'
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

// styled-components
import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from '@styles/globalStyle'
import themes from '@themes'

// redux
import { useSelector } from 'react-redux';
import withRedux from '@lib/redux/withRedux';

function MyApp({ Component, pageProps }) {
  const themeKey = useSelector((state) => state.themeKey);
  return (
    <ThemeProvider theme={themes[themeKey] ?? themes.DARK}>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  const { req, res } = ctx;
  const appProps = await App.getInitialProps(appContext);

  if (req) {
    // do something...
  }
  return {
    ...appProps
  };
};

MyApp.propTypes = {
  Component: PropTypes.func
};
MyApp.defaultProps = {
  Component: noop
};

export default withRedux(MyApp)
