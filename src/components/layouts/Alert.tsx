import React from 'react'

const Alert = ({ type, message }: {type: string, message: string}) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  )
}

export default Alert
