import React from 'react';
import { useState } from 'react'
import { useFetch } from '../hook/useFetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [newMuscleGroup, setNewMuscleGroup] = useState('')
  const [musclesGroups, setMusclesGroups] = useState([])
  const [newExercise, setNewExercise] = useState('')
  const [exercises, setExercises] = useState([])
  const [duration, setDuration] = useState('')
  const [photo, setPhoto] = useState('')

  const { data, postData } = useFetch('http://localhost:3000/workouts', 'POST')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title,
      description,
      photo,
      musclesGroups,
      exercises,
      duration
    })
  }

  if (data) {
    navigate('/')
  }

  const handleMuscles = (e) => {
    e.preventDefault()
    const muscle = newMuscleGroup.trim()

    if (muscle && !musclesGroups.includes(muscle)) {
      setMusclesGroups(prevMuscle => [...prevMuscle, muscle])
    }
    setNewMuscleGroup('')
  }


  const handleExercises = (e) => {
    e.preventDefault()
    const ex = newExercise.trim()

    if (ex && !exercises.includes(ex)) {
      setExercises(prevEx => [...prevEx, ex])
    }
    setNewExercise('')
  }


  return (
    <div className='w-full flex items-center justify-center pb-20'>
      <div className='w-11/12 h-full flex-col flex pb-20 pt-5'>
        <h1 className='text-2xl font-bold'>Create your training tabs</h1>
        <p className='pt-4'>Create your fantastic training tabs and organize your workouts, add your exercises and enjoy your traning session</p>
        <form onSubmit={handleSubmit} className='w-full  mt-5'>

          <label className='flex flex-col my-2'>
            <span className='font-semibold pb-1'>Title</span>
            <input className='bg-[#3D6CB9]/60  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
              type="text"
              placeholder='Type here...'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label className='flex flex-col my-2'>
            <span className='font-semibold pb-1'>Description</span>
            <textarea className='bg-[#3D6CB9]/60 h-28  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
              type="text"
              placeholder='Type here...'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </label>

          <label className='flex flex-col my-2'>
            <span className='font-semibold pb-1'>Photo url</span>
            <input className='bg-[#3D6CB9]/60  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
              type="text"
              placeholder='Insert Photo Link...'
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
              required
            />
          </label>

          <label className='flex flex-col my-4'>
            <span>Muscles Groups</span>
            <div className='flex items-center w-full'>
              <input className='bg-[#3D6CB9]/60 w-full  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
                type="text"
                placeholder='Type here...'
                onChange={(e) => setNewMuscleGroup(e.target.value)}
                value={newMuscleGroup}
              />
              <button onClick={handleMuscles} className='px-4 py-1 ml-4 text-white font-bold text-lg rounded-lg bg-[#00D1FF]'>+</button>
            </div>
            <small className='font-semibold'>Muscle groups: <span className='font-normal'><em>{musclesGroups.join(", ")}</em></span></small>
          </label>

          <label className='flex flex-col my-4'>
            <span>Exercises</span>
            <div className='flex items-center w-full'>
              <input className='bg-[#3D6CB9]/60 w-full  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
                type="text"
                placeholder='Type here...'
                onChange={(e) => setNewExercise(e.target.value)}
                value={newExercise}
              />
              <button onClick={handleExercises} className='px-4 py-1 ml-4 text-white font-bold text-lg rounded-lg bg-[#00D1FF]'>+</button>
            </div>
            <small className='font-semibold'>Exercises:  <span className='font-normal'><em>{exercises.join(", ")}</em></span> </small>
          </label>

          <label className='flex flex-col my-2'>
            <span className='font-semibold pb-1'>Duration</span>
            <input className='bg-[#3D6CB9]/60  text-white placeholder:text-xs p-1 placeholder:text-white focus:outline-none'
              type="number"
              placeholder='Minutes you need...'
              min={10}
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              required
            />
          </label>

          <button className='mt-6 py-2 w-full shadow-xl text-white font-semibold bg-[#3D6CB9]'>Create tab</button>
        </form>
      </div>
    </div>
  )
}
