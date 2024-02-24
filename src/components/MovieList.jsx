import React from 'react'
import MovieCard from '../components/MovieCard';
import data from '../assets/movies.json';

export default function MovieList(){
    console.log(data);
    return (
        <div className='container d-flex flex-wrap my-4'>
            {
                data.movies.map((movie,index)=>{
                    return <MovieCard movieData={movie}/>
                })
            }
        </div>
    )
}