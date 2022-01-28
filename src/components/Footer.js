import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className='fixed mt-24 bottom-0 h-16 px-5 w-full bg-[#3D6CB9] flex justify-between items-center'>
      <Link to="/">
      <img src="./img/home.png" alt="" /></Link>
      <Link className='px-5 py-1 text-white font-semibold border border-white rounded-full hover:text-[#00D1ff] hover:bg-white transform-transition duration-500  ' to="/create">Add New</Link>
      <img onClick={() => navigate(-1)} src="./img/back.png" alt="" />
    </div>
  )
}
