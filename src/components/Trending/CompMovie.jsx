import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Movietiles from '../Movietiles/Movietiles'
import './compMovie.css'

const CompMovie = () => {
    const [genres, setgenres] = useState([])
    const [filtered, setfiltered] = useState()
    const [current, setcurrent] = useState('action')
    




    const getGenre =()=>{
        axios.get(`
        https://api.themoviedb.org/3/genre/movie/list?api_key=9cb6f99adf6c3ae55bb1c7d04ae47e48&language=en-US`).then((result)=>{
            
            setgenres(result.data.genres)
        })
    }

    const getMoviesbygenre =(genreid)=>{
        setcurrent(genreid)
        console.log("genre is is", genreid+'current is ',current);
        
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9cb6f99adf6c3ae55bb1c7d04ae47e48&language=en-US&include_adult=false&include_video=true&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${genreid}`).then((response)=>{
           
            setfiltered(response.data.results)

        })
    }

    useEffect(() => {
      getGenre()
      
    }, [])
    return (
        <div className='main'>
            <h1 style={{textAlign:'center'}}>Select Movies By Genres</h1>
            <div className="list">
                {genres.map((items)=>(
                    <button className={current == items.id ? 'active':''}  onClick={()=>{getMoviesbygenre(items.id) }} style={{margin:'8px'}}>{items.name}</button>
                ))}
            </div>

            <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly'}} className="filtered">
                {filtered && filtered.map((items)=>(
                    <Movietiles ite={items}/>
                ))}
            </div>
        </div>
    )
}

export default CompMovie

