import React, { useCallback } from 'react'

const CheckInput = ({ name, labelValue }: {name: string, labelValue: any}) => {
  const onChangeHandler = useCallback((event) => {
    console.log(event.target)
  }, [])
  return (
    <label className="container">
      {labelValue}
      <input type="checkbox" name={name} id={name}/>
      <span className="checkmark"/>
    </label>
  )
}

export default CheckInput
