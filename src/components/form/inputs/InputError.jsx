import React from 'react';

const InputError = ({ error }) => {

  if (error?.type === 'required') {
    return (<span className='form__error'>This field is required</span>)
  }

};

export default InputError;