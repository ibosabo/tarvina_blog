import React from 'react'

const Page = ({params}) => {
  return (
    <div>
      Sayfa numarası: {params.id}
    </div>
  )
}

export default Page
