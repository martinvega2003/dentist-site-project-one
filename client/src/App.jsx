import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Form } from './components/Form'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { OptInPopup } from './components/OptInPopup'
import ServicePage from './components/ServicePage'
import { expandedServicesData } from './data/expandedServicesData'
import ScrollToTop from './components/ScrollToTop'
import BlogPlaceholder from './components/BlogPlaceholder'

function App() {
  const [isOptinVisible, setIsOptinVisible] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <OptInPopup isVisible={isOptinVisible} setIsVisible={setIsOptinVisible} />
        <Routes>
          <Route path='/' element={<MainPage setIsOptinVisible={setIsOptinVisible} />} />
          <Route path='/form' element={<Form />} />
          <Route path='/article-placeholder' element={<BlogPlaceholder />} />

          {/* Pages For Each Service */}
          {
            expandedServicesData.map((service, i) => {
              return (
                <Route path={service.path} element={<ServicePage title={expandedServicesData[i].title} description={expandedServicesData[i].description} longDescription={expandedServicesData[i].longDescription} benefits={expandedServicesData[i].benefits} process={expandedServicesData[i].process} instructions={expandedServicesData[i].instructions} professionals={expandedServicesData[i].professionals} buttonText={expandedServicesData[i].buttonText} />} />
              )
            })
          }

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
