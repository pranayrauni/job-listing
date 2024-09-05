import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';


const App = () => {
  // every react compoennet gonna return jsx. only return one element. 

  const name = "rauni";       // es js ko jsx m use karne k liye curly brackets k andar rakhna hoga

  const x = 10;
  const y = 20;

  const names = ['rauni', 'mikku', 'nikku', 'pikku'];

  const loggedIn = true;

  if(loggedIn){
    // edhar return kar denge to main jo return hai usse pahle hi return ho jayga to eske liye niche m ternary operator use  karo
    // return <h1>loggedIn</h1>
  }

  // css upar likh k v  niche variable daal sakte
  const styles = {
    color: 'blue',
    fontSize: '20px'
  }

  // return k upar javascript aise hi likh sakte par return k andar likhna ho to curly bracket m likhna hoga
  return (
    <>
    <div className='text-5xl underline'>App</div>

    <p>Hey {name}</p>
    <p>Thw sum of {x} and  {y} is {x+y}</p>

    <ul>
      {names.map((name, index) => {
        // console.log(name)
        return <li key={index}>{name}</li>
      })}
    </ul>


      {
        loggedIn ? <h1>loggedIn</h1> : <h1>not loggedIn</h1>
        // agar hm chahte ki false k case m kuch n dikhae to empty string daal do

        // aise v kar sakte hai agar sirf true k case m dikhana ho to {loggedIn && <h1>loggedIn</h1>}
      }

      {/* inline css k liye double bracket lagega */}
      <p style={{color: 'red'}}>Lorem ipsum dolor sit amet.</p>

      {/* css ko alag variable m likh k v yaha varibale name denge to kaam karega */}
      <p style={styles}>Lorem ipsum dolor sit.</p>






      {/* +++++++++++++++++++++++++++++++++++++++PROJECT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* html > main.jsx > app.jsx > components */}

      {/* jo v components dikhana ho usko import kar k yaha yha dikha do */}
      <Navbar />
      <Hero />
      {/* card compoenent k andar contents rakh sakte hai */}
      <HomeCards />
      

      

    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full-Time</div>
                <h3 className="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div className="mb-5">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Boston, MA
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
              </div>

              <div className="mb-5">
               Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">React.js Developer</h3>
              </div>

              <div className="mb-5">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App