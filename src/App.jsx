import { useState } from 'react'
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
      <>
          <Header />
          {/* Route to all pages */}
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  )
}

export default App
