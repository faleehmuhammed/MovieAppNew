import React from 'react'
import './Bottomnav.css'
import { BiTrendingUp } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Bottomnav = () => {
    return (
        <div>

            <div className="bottomnav">
                
                
            <Link to='/'>  <button>  <BiTrendingUp/> Trending </button> </Link>
            <Link to='/trending'>   <button>  <BiMovie/> Movies</button> </Link>
              <Link to='/search'> <button>  <BiSearch/>Search</button></Link>   
              <Link to='/favmovies' > <button>  <BiLike/>FavMovies</button></Link>   
            </div>
            
        </div>
    )
}

export default Bottomnav
