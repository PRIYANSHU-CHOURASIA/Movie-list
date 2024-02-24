import React from 'react';
import Navbar from './Navbar' ;
import Footer from './Footer' ;
import ps1 from '../assets/photo1.webp';
import data from '../assets/movies.json';
import {useParams} from 'react-router-dom'

export default function MovieDetails(){
    const urlData = useParams();
    console.log(urlData.id);

        let movie = {};
        data.movies.forEach((mov)=>{
            if(mov.title==urlData.id){
                movie = mov;
            }
        })
    return (
        <div>
            <Navbar/>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='w-50 p-5'>
                    <img src={ps1} alt='...' className='w-100' style={{borderRadius: '20px'}} />
                </div>
                <div className='w-50 p-5'>
                    <h1>{movie.title}</h1>
                    <hr/>
                    <p> Year: {movie.year}| Rating: {movie.rating}</p>
                    <ul>
                        <li>Genre:</li>
                        <li>{movie.genre[0]}</li>
                        <li>{movie.genre[1]}</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}