import React from 'react'
import { Routes,Route } from 'react-router'
import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App