import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

function Caption() {
       
  return (
    <>
     <Nav/>
     <div className='text-yellow-600 text-8xl italic mb-4 h-screen flex justify-center items-center'>
       
        <h1>The Newsmania</h1>
    </div>
    </>
   
  )
}

export default Caption