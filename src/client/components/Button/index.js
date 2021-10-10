import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import ButtonWrapper from './styles'

const Button = ({ text, onClick }) => (
  <ButtonWrapper onClick={onClick}>{ text }</ButtonWrapper>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  text: 'Button',
  onClick: noop
};

export default Button
