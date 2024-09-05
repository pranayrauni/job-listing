import React from 'react'

const Hero = ({title = 'Become React dev', subtitle = 'Fin the job that fits your skill set'}) => {
    // agar props ko sirf (props) lilha gya hai to acess karne k liye {props.tiitle} likhna hoga 
    // par destructure ({title}) kar liya gya hai to sirf {title} likh dene se kaam ho jayga 
    // default props ({title='become react dev'}) v hote agar kuch n pass kiya gya ho to ye dikhega
    // if props are passed then default props will be supressed
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}

          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero