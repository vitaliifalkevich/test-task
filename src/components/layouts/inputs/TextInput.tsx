import React from 'react'

const TextInput = ({
  name,
  placeHolder,
  type,
  onChange,
  value
} : {
  name: string,
  placeHolder: string,
  type: string,
  onChange: any,
  value: string}) => {
  return (
    <input
      name={name}
      className={name}
      placeholder={placeHolder}
      type={type}
      value={value}
      onChange={onChange}/>
  )
}

export default TextInput
