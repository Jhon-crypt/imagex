import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header'
import HomePage from './pages/home'
import GeneratePage from './pages/generate';

function App() {

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="generate" element={<GeneratePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )

}

export default App;
