import React from 'react';
import ps1 from '../assets/photo1.webp';
import ps4 from '../assets/photo4.webp';
import ps5 from '../assets/photo5.webp';

export default function HeroSection() {
  return (
    <div>
        <div id="carouselExampleInterval" className=" carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner bg-dark p-5">
                <div className="carousel-item active" data-bs-interval="2000">
                <img src={ps1} className="d-block w-50 h-50 mx-auto" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={ps4} className="d-block w-50 h-50 mx-auto" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={ps5} className="d-block w-50 h-50 mx-auto" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>    
</div>
  )
}
