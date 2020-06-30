import React, { useMemo } from 'react'

const Select = ({
  values,
  displayValue,
  name,
  onChange,
  currentValue

}: {
    values: string[],
    displayValue: string,
    name: string,
    onChange: any,
    currentValue: string

}) => {
  const availableOptions = useMemo(() => {
    return values.map((item, idx) => {
      return (
        <li key={idx} className="select_option">
          <input className="select_input" type="radio" name={name} id={item} checked={currentValue === item} value={item} onChange={onChange}/>
          <label className="select_label" htmlFor={item}>{item}</label>
        </li>
      )
    })
  }, [values, name, onChange, currentValue])

  return (
    <ul className="select">
      <li>
        <input className="select_close" type="radio" name={name} id="select-close" value="" onChange={onChange} />
        <span className="select_label select_label-placeholder">{displayValue}</span>
      </li>
      <li className="select_items">
        <input className="select_expand" type="radio" name={name} id="select-opener" value="" onChange={onChange}/>
        <label className="select_closeLabel" htmlFor="select-close"/>
        <ul className="select_options">
          {availableOptions}
        </ul>
        <label className="select_expandLabel" htmlFor="select-opener"/>
      </li>
    </ul>
  )
}

export default Select
