import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Movietiles from '../Movietiles/Movietiles'
import './Search.css'

const Search = () => {
    const [input, setinput] = useState('s')
    const [items, setitems] = useState([])
    const handleSearch =()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9cb6f99adf6c3ae55bb1c7d04ae47e48&query=${input}&page=1`)
        .then((response)=>{
            
            setitems(response.data.results)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        handleSearch()
    }, [input])
    return (
        <div className='main'>
            <h2 className='heading'>Search your favorite movie here</h2>
            <input placeholder='search here ...' onChange={(e)=>setinput(e.target.value)} type="text" name="" id="" />
           <div className="item" style={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {items.map((item)=>{
                return(
                    <>
                    <Movietiles ite={item}/>
                    
                    </>
                )
            })}
            </div>
            
            
        </div>
    )
}

export default Search
