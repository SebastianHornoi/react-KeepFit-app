import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hook/useFetch';

export default function Home() {
  const { data, setData } = useFetch('http://localhost:3000/workouts')

  const deleteTab = (myId) => {
    const url = 'http://localhost:3000/workouts/' + myId
    const newState = data.filter((item) =>{
      return item.id !== myId
    })
    fetch(url,{
      method: "DELETE"
    }).then(
      setData(newState)
    )
  }

  if(data && data.length === 0){
    return (
      <div className='relative flex flex-col pb-20 pt-5 px-10'>
         <h1 className='font-xl font-bold uppercase'>Add a workout tab!</h1>
      </div>
    )
  }

  return (
    <div className='relative flex flex-col pb-20 pt-5 px-10'>
      <h1 className='font-xl font-bold uppercase'>Your workout tabs</h1>
      {
        data && data.map((workout) => (
          <div className='flex flex-col my-3 rounded-xl relative  border-0 shadow-2xl border-red-500' key={workout.id}>
            <h2 onClick={() => deleteTab(workout.id)} className='absolute right-4 cursor-pointer text-white text-2xl'>x</h2>
            <img className=' rounded-t-xl ' src={workout.photo} alt="" />
            <div className='w-full py-6 px-3 flex items-center'>
              <div className='px-2 w-8/12'>
                <h1 className='pb-3 font-bold text-xl text-[#3D6CB9]'>{workout.title}</h1>
                <p>{workout.description}</p>
              </div>
              <div className='w-4/12 flex items-center justify-center'>
                <Link className='px-3 py-1 pb-2 rounded-xl shadow-xl bg-[#00D1FF] text-white' to={`/single/${workout.id}`}>open tab</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

