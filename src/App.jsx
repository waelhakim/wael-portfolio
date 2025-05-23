import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Service/Service'
import Portfolio from './Pages/Portfolio/Portfolio'
import './App.css'
import { BrowserRouter , Routes, Route,HashRouter } from 'react-router'

function App() {

  if (navigator.userAgent.includes('Instagram')) { document.body.classList.add('instagram-browser'); }
  
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
