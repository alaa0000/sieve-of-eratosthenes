import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const isAllowed = (values) => {
  if (values.value < 130000000) {
    return true;
  }

  return false;
};

const NumberFormatCustom = (props) => {
  const {
    inputRef,
    onChange,
    ...other
  } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      thousandSeparator
      isAllowed={isAllowed}
    />
  );
};

// Type checking.
NumberFormatCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
};

export default NumberFormatCustom;

