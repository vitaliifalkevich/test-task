import React from 'react'

const Btn = ({ isDisable, title }: {isDisable: boolean, title: string}) => {
  return (
    <button disabled={isDisable} className={isDisable ? 'disabled' : 'default'}>
      {title}
    </button>
  )
}

export default Btn
