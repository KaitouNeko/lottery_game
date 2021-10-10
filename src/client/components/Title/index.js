import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { TitleWrapper } from './styles'

const Title = ({ text, onClick }, ...props) => (
  <TitleWrapper className='fas fa-tools fa-2x' onClick={onClick}>
    <span>{text}</span>
  </TitleWrapper>
)

Title.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
Title.defaultProps = {
  text: 'SET TIME',
  onClick: noop
};
export default Title
