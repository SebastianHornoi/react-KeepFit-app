import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hook/useFetch';

export default function Single() {
  const { id } = useParams()
  const url = 'http://localhost:3000/workouts/' + id
  const { data, setData } = useFetch(url)
  const [newExercise, setNewExercise] = useState('')
  const navigate = useNavigate()

  const addNewExercise = (workout) => {
    fetch(url,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...workout, exercises: [...workout.exercises, newExercise]})
    })
    .then( resp => resp.json())
    .then( res => {
        const newState = res
        setData(newState)
        setNewExercise('')
      }
    )
  }

  const deleteTab = () =>{
    fetch(url,{
      method: "DELETE"
    }).then(
      navigate('/')
    )
  }

  return (
    <div className='w-full h-screen  flex-col flex  px-5 pt-5'>
      {
        data &&
        <div className='pb-28'>
          <div className='flex w-full items-center justify-between'>
            <h1 className='font-semibold text-xl'>{data.title}</h1>
            <button onClick={deleteTab} className='p-1 px-2 text-white font-bold text-lg rounded-lg bg-[#00D1FF]'>Complete workout</button>
          </div>
          <p className='pt-5'>{data.description}</p>
          <img className='pt-5 w-full h-70 object-cover' src={data.photo} alt="" />
          <h2 className='mt-5 font-semibold text-xl'>Muscle Groups: <span className='font-normal'><small>{data.muscleGroups}</small></span></h2>
          <ul className='flex flex-col mt-5'>
            {data.exercises.map((ex) =>
              <li className='w-full cursor-pointer shadow-lg my-2 py-2 font-semibold text-white text-center bg-[#3d6cb9]' key={ex}>{ex}</li>
            )}
          </ul>
          <label className='flex flex-col my-5'>
            <span className='font-semibold text-xl'>Add more exercises</span>
            <div className='flex items-center w-full'>
              <input className='border-b-2 border-[#00D1FF] w-full placeholder:text-xs p-1 focus:outline-none'
                type="text"
                placeholder='Type here...'
                onChange={(e) => setNewExercise(e.target.value)}
                value={newExercise}
              />
              <button onClick={() => addNewExercise(data)} className='px-4 py-1 ml-4 text-white font-bold text-lg rounded-lg bg-[#00D1FF]'>+</button>
            </div>
          </label>
        </div>
      }
    </div>
  )
}
