import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {

  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/search?q=${term}`)
    setTerm('')
  }

  return (
    <div className='sticky z-10 top-0 w-full h-16 bg-[#3D6CB9] flex justify-between items-center px-5'>
      <Link to="/">
      <div className='flex items-center justify-center '>
        <img className='pr-1' src="./img/logo.png" alt="" />
        <h1 className='text-white font-bold text-xl'>Keep<b className='text-[#00D1FF]'>Fit</b></h1>
      </div></Link>
      <div className='flex items-center justify-center w-2/4 lg:w-1/4'>
        <form onSubmit={handleSubmit} className='w-full'>
          <input 
          className='bg-transparent w-full text-white focus:outline-none border-0 border-b-2 border-white' 
          type="text"
          placeholder='Search...'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
           />
        </form>
        <img className='-ml-4' src="./img/search.png" alt="" />
      </div>
    </div>
  )
}
