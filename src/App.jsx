import React from 'react'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-full flex fixed z-10 top-0">
        <div className="h-full w-1/5 bg-black" />
        <div className="h-full w-1/5 bg-white" />
        <div className="h-full w-1/5 bg-black" />
        <div className="h-full w-1/5 bg-white" />
        <div className="h-full w-1/5 bg-black" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App