/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../../assets/error.svg'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-[100dvh]'>
        <img src={errorImage}  />
        <Link to="/" className='mt-8 py-2 px-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600'>
            Back to Home
        </Link>
    </div>
  )
}

export default ErrorPage

