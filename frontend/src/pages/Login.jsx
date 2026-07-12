import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className='flex items-center justify-between bg-gray-100 h-screen w-full'>
      <main className='w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
        {/* Change the UI design left side intro with background and right side login and signup form with white background */}
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <Link to='/forgot-password'>Forgot Password</Link>
          </div>
          <button type='submit' className='bg-blue-700 text-white py-2 px-4 cursor-pointer rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Login
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login