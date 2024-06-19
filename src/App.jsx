import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


// !-------------Components----------------
import NavBar from "./Components/NavBar"
// !---------------------------------------


// !-------------Pages----------------
import Home from "./Pages/Home/Home.jsx"
import Courses from "./Pages/Courses/Courses.jsx"
import Practice from "./Pages/Practice/Practice.jsx"
import Quiz from "./Pages/Practice/Quizes/Quiz.jsx"
import Questions from "./Pages/Practice/Questions/Questions.jsx"

// !---------------------------------------

export default function App() {
  return (
   <>

    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Practice" element={<Practice/>}/>
        <Route path="/Practice/Quiz" element={<Quiz/>}/>
        <Route path="/Practice/Questions" element={<Questions/>}/>
        
        
      </Routes> 
    
    </BrowserRouter>
    
   </>

  )
}
