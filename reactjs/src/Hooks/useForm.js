import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Prencha um e-mail valido.'
  },
}

function useForm(type) {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value) {
    //Se no campo for declarado como parametro false, fica entendido que não deseja validar.
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError('');
      return true;
    }
  }

  function onChange({ target }) {
    if (error) { validate(target.value) };
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}


export default useForm

