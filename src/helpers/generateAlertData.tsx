const generateAlertData = (setAlert: any, type: string, message: string): void => {
  setAlert({
    isAlert: true,
    type: type,
    message: message
  })
  setTimeout(() => {
    setAlert({
      isAlert: false,
      type: 'success',
      message: ''
    })
  }, 5000)
}

export default generateAlertData
