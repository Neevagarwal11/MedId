import React from 'react'
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
   <div className='w-full min-h-screen bg-white text-black '>
    <Navbar></Navbar>
    <Landing></Landing>
    </div>
    </>
  )
}

export default App