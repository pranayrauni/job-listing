import React from 'react'

const Card = ({children, bg = 'bg-gray-100'}) => {

    // children is used for whatever we wrap
  return (

    // yaha ek card bnaya gya hai aur uske andar content rakha jayga 
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card