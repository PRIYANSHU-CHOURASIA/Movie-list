import React from 'react';

export default function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand">The Movie Listing WebApp</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search Movies" aria-label="Search"/>
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <hr className='m-0 p-0'/> 
        </div>
    )
}