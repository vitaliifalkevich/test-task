import React from 'react'

const CheckInput = ({
  name,
  labelValue,
  onChange
}: {
    name: string,
    labelValue: any,
    onChange: any
}) => {
  return (
    <label className="container">
      {labelValue}
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <span className="checkmark"/>
    </label>
  )
}

export default CheckInput
