import React from 'react'
import thumbnail from '../assets/photo2.avif'
import { Link } from 'react-router-dom'

export default function MovieCard({movieData}){
  return (
    <div>
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{movieData.title}</h6>
                <p className="card-text">Year: {movieData.year}</p>
                <p className="card-text">Genre: {movieData.genre}</p>
                <p className="card-text">Rating: {movieData.rating}</p>
                {/* <a href="/moviedetails/12" className="btn btn-primary">Go somewhere</a> */}
                <Link to={`/movieDetails/${movieData.title}`} className="btn btn-primary">More Details</Link>
            </div>
        </div>
    </div>
  )
}
