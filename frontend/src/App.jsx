import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import NotFound from './pages/NotFound'
import { useAuth } from './context/AuthContext'
import ForgotPassword from './pages/ForgotPassword'

function App() {

  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <MainLayout /> : <Navigate to='/login' replace />}>
          <Route index element={<Home />} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
