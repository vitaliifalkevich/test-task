import React from 'react'

const TextInput = ({ name, placeHolder, type } : {name: string, placeHolder: string, type: string}) => {
  return (
    <input name={name} className={name} placeholder={placeHolder} type={type}/>
  )
}

export default TextInput
