import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
import Loader from './components/pages/Loader'
// import ServiceDescriptionPage from './components/pages/ServiceDescription.jsx'
import ViewService from './components/pages/ViewService.jsx'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading (can replace with actual API call or window.onload)
    const timer = setTimeout(() => setLoading(false), 2000) // 2 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader /> // 👈 Show Loader first
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='service/:serviceId' element={<ViewService/> } />
          </Route>
        </Routes>
        
      )}
    </>
  )
}

export default App
