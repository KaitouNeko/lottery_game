import React, {
  useEffect, useCallback, memo, useState
} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop'

const Input = ({
  id, type, placeholder, initFocus, myRef, ...props
}) => {
  const { inputValue, setInputValue } = useState('');
  useEffect(() => {
    if (initFocus && myRef) {
      myRef.current.focus();
    }
  }, [initFocus, myRef]);
  const onChange = useCallback(() => {
    if (!myRef.current) return
    setInputValue(myRef.current.value);
  }, [myRef, setInputValue]);

  if (!myRef) return <></>;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type={type}
        ref={myRef}
        value={inputValue}
        placeholder={placeholder}
        onFocus={props.onFocus}
        onChange={onChange}
        onKeyPress={props.onKeyPress}
        {...props}
      />
    </label>
  );
};

Input.defaultProps = {
  id: '',
  type: 'text',
  placeholder: '00',
  initFocus: false,
  onClick: noop,
  onFocus: noop,
  onChange: noop,
  onKeyPress: noop
};
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  initFocus: PropTypes.bool,
  myRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};
export default memo(Input);
