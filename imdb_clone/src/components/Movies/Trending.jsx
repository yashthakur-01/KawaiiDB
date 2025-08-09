import React from 'react'
import MovieCard from './MovieCard'

function Trending() {
  return (
    <div >
        <div className=' text-center text-4xl font-bold my-8 mb-[3rem]'>Trending Movies</div>

        <div className=' my-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-flow-row auto-cols-max place-items-center gap-y-7'>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
        </div>
    </div>
  )
}

export default Trending