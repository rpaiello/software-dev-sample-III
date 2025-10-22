import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function Home() {
  return(
    <div className="page home">
      <h1><mark>Welcome Home</mark></h1>
      <p><mark>My sick site</mark></p>
    </div>
  )
}
function Services() {
  return(
    <div className="page services">
      <h1><mark>What I Do</mark></h1>
      <p><mark>I can do anything I put my mind to</mark></p>
    </div>
  )
}
function Contact() {
  return(
    <div className="page contact">
      <h1><mark>Where to Find Me</mark></h1>
      <p><mark>All of my personal identifying information</mark></p>
    </div>
  )
}
function Works() {
  return(
    <div className="page works">
      <h1><mark>My Pedigree</mark></h1>
      <p><mark>It should speak for itself</mark></p>
    </div>
  )
}
function Etc() {
  return(
    <div className="page etcetera">
      <h1><mark>All the other crap</mark></h1>
      <p><mark>Guhhhhhhhhh</mark></p>
    </div>
  )
}
function NotFound() {
  return(
    <div className="page notfound">
      <h1><mark>404</mark></h1>
      <p><mark>Howd you get here????</mark></p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> |{" "}
        <Link to={"/services"}>Services</Link> |{" "}
        <Link to={"/works"}>Works</Link> |{" "}
        <Link to={"/contact"}>Contact</Link> |{" "}
        <Link to={"/etc"}>Etc</Link> |{" "}
      </nav>

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/services' element={<Services />}>Services</Route>
        <Route path='/works' element={<Works />}>Works</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/etc' element={<Etc />}>Etc</Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
