// import React from 'react'
// import Landing from './Components/Landing';
// import Navbar from './Components/Navbar';
// function App() {
//   return (
//     <>
//    <div className='w-full min-h-screen bg-white text-black '>
//     <Navbar></Navbar>
//     <Landing></Landing>
//     </div>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import newPage from './Components/pages/newPage'// Adjust the import path accordingly

function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-white text-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/new-page" element={<newPage />} /> {/* Define the route for the new page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

