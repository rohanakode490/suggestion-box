import React from 'react'
import { Route, Routes } from "react-router-dom";
import Form from './components/Form/Form';
import Suggestions from './components/Suggestion/Suggestions';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* Suggestions.
              For temporary it is at home page  
        */}
        <Route path='/' element={<Suggestions/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App