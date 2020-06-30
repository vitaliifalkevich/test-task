import React from 'react'

const CheckInput = ({
  name,
  labelValue,
  onChange,
  isChecked
}: {
    name: string,
    labelValue: any,
    onChange: any,
    isChecked: boolean
}) => {
  return (
    <label className="container">
      {labelValue}
      <input type="checkbox" name={name} id={name} checked={isChecked} onChange={onChange} />
      <span className="checkmark"/>
    </label>
  )
}

export default CheckInput
