import React from 'react'

const RadioInput = ({ name, labelValue }: {name: string, labelValue: string}) => {
  return (
    <>
      <div>
        <input type="radio" id={labelValue} name={name}/>
        <label className="select_label" htmlFor={labelValue}>{labelValue}</label>
      </div>
    </>
  )
}

export default RadioInput
