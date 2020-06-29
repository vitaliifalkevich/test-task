import React from 'react'

const Title = (props: React.ComponentPropsWithRef<any>) => {
  const { title }: {title: string} = props
  return (
    <>
      {title}
    </>
  )
}

export default Title
