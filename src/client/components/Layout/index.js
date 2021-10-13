import Head from 'next/head'
import PropTypes from 'prop-types';

const Layout = ({
  title, content, children
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css' integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p' crossOrigin='anonymous' />
    </Head>
    <main>
      {children}
    </main>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};
Layout.defaultProps = {
  title: 'Create Next App',
  content: 'Generated by create next app'
};

export default Layout
