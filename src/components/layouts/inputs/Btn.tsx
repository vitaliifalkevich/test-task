import React from 'react'
import Spinner from '../../../assets/img/spinner.gif'

const Btn = (props: React.PropsWithChildren<any>) => {
  const { isDisable, title, btnType, isSubmiting = false } = props
  return (
    <button disabled={isDisable} className={isDisable ? 'disabled' : 'default'} type={btnType}>
      {isSubmiting ? <img className="spinner" src={Spinner} alt="spinner"/> : title }
    </button>
  )
}

export default Btn
