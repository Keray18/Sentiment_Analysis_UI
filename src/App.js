import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Predict from './components/Predict.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/predict' element={ <Predict />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App