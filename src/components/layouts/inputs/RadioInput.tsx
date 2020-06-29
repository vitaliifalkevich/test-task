import React from 'react'

const RadioInput = ({
  name,
  labelValue,
  onChange
}: {
    name: string,
    labelValue: string,
    onChange: any
}) => {
  return (
    <>
      <div>
        <input type="radio" id={labelValue} name={name} value={labelValue} onChange={onChange}/>
        <label className="select_label" htmlFor={labelValue}>{labelValue}</label>
      </div>
    </>
  )
}

export default RadioInput
