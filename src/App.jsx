import { useState } from 'react'
import Home from './assets/components/Home'
import './App.css'
import Service from './assets/components/Service'
import Stories from './assets/components/Stories'
import Blog from './assets/components/Blog'
import Footer from './assets/components/Footer'
import About from './assets/components/About'
import Navbar from './assets/components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactUs from './assets/components/ContactUs'
import Member from './assets/components/Member'
import BlogPage from './assets/components/BlogPage'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <ContactUs/>
        <Stories/>
        <Member/>
        <Blog/>
        <Footer/>
      </div>
    },
    
    
    {
      path: "/blogpage",
      element: 
      <div>
        <BlogPage/>
      </div>
    },
  ]
)

function App() {
  

  return (
   <div>
    <div className="scroll-smooth"></div>
    <RouterProvider router = {router}/>
   </div>
  )
}


export default App
