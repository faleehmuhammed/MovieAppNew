import React, { useState, useEffect } from 'react'
import './Movie.css'
import RecipeReviewCard from '../Card/Card'
import axios from 'axios'
import { async } from 'regenerator-runtime'
import Movietiles from '../Movietiles/Movietiles'
import { Link, BrowserRouter, Route, useRouteMatch, useHistory, Switch } from 'react-router-dom'
import Favourite from '../Favourite/Favourite'

const Movie = () => {
    const [input, setinput] = useState("six")

    const [items, setitems] = useState([])
    const [favmovies, setfavmovies] = useState([])
    const [things, setthings] = useState([ ])
            
    const newthings = things[Math.floor(Math.random()*things.length)]

    //    const{path} = useRouteMatch()

    const main = `http://www.omdbapi.com/?t=in&y=&plot=short&r=json&type=movie&apikey=41daffbe`

    const handleCheck = async (e) => {
        await axios.get(`
        https://api.themoviedb.org/3/trending/all/week?api_key=9cb6f99adf6c3ae55bb1c7d04ae47e48`).then((result) => {
           
            setitems(result.data.results);
          const filtered=  result.data.results.map((ite)=>ite.backdrop_path)
          
          setthings(filtered)
            
        })
    }
    
       const getItems = ()=>{
           console.log('bfitems',items);
        const filtereitems = items.map((items)=>items)
        console.log('fItems',filtereitems);
        setthings(filtereitems)
       }
    
    // const history=useRouteMatch()
    useEffect(() => {
        handleCheck()
        // getItems()
        
       
        window.scroll(0, 0)
    }, [input])
      
   
    

    return (
        <div>

          

            <div className='movie'>
                {/* <button onClick={() => window.confirm("are you sure ")}>gfgfgh</button> */}

                {/* <div className="form">
                    <form  >
                        <input placeholder='search movie name here ....' onChange={e => setinput(e.target.value)} type="text" name="" id="" />

                    </form>
                </div> */}
                {/* <div className="fav">
                    <Link to='/favourite' > Favourite</Link>
                    <div className="number">
                        <span>{favmovies.length}</span>
                    </div>
                </div> */}

                <div className="banner" >
                  
                <div className="text">
                    <p>Your Favorite Movies Are</p>
                    <h1>Out Now !</h1>
                </div>
                <div className="things">
                   
                <img src={`https://image.tmdb.org/t/p/original${newthings}`} alt="" width="100%" height='600px' /> 
                </div>
                </div>
                      
                      <div>
                      <h1 style={{color:'gray'}}>Trending Now</h1>
                      </div>
                <div className="card">
                
                    {items && items.map((ite) => (
                        <>
                             
                        <Movietiles favmovies={favmovies} setfavmovies={setfavmovies} ite={ite} />


                     </>
                    ))}

                    {/* <Switch>
                        <Route exact path='/favorite' exact component={Favourite}  ></Route>
                    </Switch> */}
                </div>



                {/* <RecipeReviewCard/> */}



            </div>
        </div>
    )
}

export default Movie
