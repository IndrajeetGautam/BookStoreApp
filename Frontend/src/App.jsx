import React from 'react'
import Home  from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup';
import Contact from './contact/Contact'; 

function App() {
  return (<>

  <div className="dark:slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/course" element={<Courses/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/contact" element={<Contact/>} />
    
   </Routes>
  </div>
  </>
  );
}

export default App