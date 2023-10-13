
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact'



function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route element={<Layout />}>

    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />

    </Route>
    
   </Routes>
  
    
    
    </BrowserRouter>
    </>
  )
}

export default App
