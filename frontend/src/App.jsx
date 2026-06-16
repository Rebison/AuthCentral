import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import NotFound from './pages/NotFound'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
