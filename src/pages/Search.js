import React from 'react';
import { useLocation, Link } from 'react-router-dom';

//import hook
import { useFetch } from '../hook/useFetch';

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/workouts?q=' + query
  const { error, data } = useFetch(url)
  
  //show different template if there are no tabs for your search
  if(data && data.length === 0){
    return (
      <div className='w-full flex-col flex px-5 pt-5 pb-28'>
       <h2 className='text-2xl'>there aren't tabs for: <span className='text-3xl font-semibold text-[#00D1FF]'>"{query}"</span> </h2>
      </div>
    )
  }

  return (
    <div className='w-full flex-col flex px-5 pt-5 pb-28'>
       <h1>You are searching for: <b>{query}</b></h1>
       {error && <p className="error">{error}</p>}
       {data && data.map((workout) => (
          <div className='flex flex-col  my-3 rounded-xl  border-0 shadow-2xl border-red-500' key={workout.id}>
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
