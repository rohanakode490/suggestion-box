import React from 'react'
import { Route, Routes } from "react-router-dom";
import SuggestionForm from './components/Form/SuggestionForm';
import Suggestions from './components/Suggestion/Suggestions';
import Navbar from './components/Navbar/Navbar';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* Suggestions.
              For temporary it is at home page  
        */}
        <Route path='/' element={<Suggestions/>}/>
        <Route path='/form' element={<SuggestionForm/>}/>
      </Routes>
    </div>
  )
}

export default App