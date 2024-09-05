import React from 'react'

const Card = ({children, bg = 'bg-gray-100'}) => {

    // children is used for whatever we wrap
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card