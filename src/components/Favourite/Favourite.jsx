import React,{useState,useContext} from 'react'
import './Favourite.css'
import {FavmoviesContext} from '../../Context/Moviecontext'
import M from 'materialize-css'

const Favourite = () => {
    const {favs}=useContext(FavmoviesContext)
   const [fav,setfav]=favs

    console.log("fav are",fav);
    const Removeitems =(id)=>{
      const filteredItems =  fav.filter((item)=>(
            item.id!== id
        ))
        setfav(filteredItems)
    }
    return (
        <div className='man'>
            {/* <h1 onClick={()=> 
                M.toast({html:'im Toast',classes:'rounded green darken-1' })
                }>Toast</h1> */}
                {fav.length>0 ?   fav.map((item)=>(
                <div className="items">
                <h2 >{item.title || item.name}</h2>
                <h3>{item.media_type}</h3>
                <h6>{item.overview.substr(0,20)}....</h6>
                <button onClick={()=>Removeitems(item.id)} >Remove</button>
                </div>
            )): 
            <div style={{textAlign:'center' , alignItems:'center'}} className="noc"> <h2 style={{textAlign:'center'}}>OOOPS.... !   No Favourites</h2></div> }
           
        </div>
    )
}

export default Favourite
