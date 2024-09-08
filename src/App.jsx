import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

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
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* card compoenent k andar contents rakh sakte hai */}
      {/* <HomeCards /> */}
      
      {/* <JobListings /> */}
      {/* <ViewAllJobs /> */}


      <RouterProvider router={router} />

   
    
    </>
  )
}

export default App