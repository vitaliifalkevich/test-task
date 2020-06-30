import React from 'react'

const RadioInput = ({
  name,
  labelValue,
  onChange,
  value,
  isChecked
}: {
    name: string,
    labelValue: string,
    onChange: any
    value: string,
    isChecked: boolean
}) => {
  return (
    <>
      <div>
        <input type="radio" id={labelValue} name={name} value={value} checked={isChecked} onChange={onChange}/>
        <label className="select_label" htmlFor={labelValue}>{labelValue}</label>
      </div>
    </>
  )
}

export default RadioInput
