import React, { useState, useContext } from 'react'
import { FavmoviesContext } from '../../Context/Moviecontext'
import './Movietiles.css'
import Modal from '../Modal/Modal'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiWatch } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import Desc from '../Desc/Desc';
import ToastComp from '../Toast/Toast'
import M from 'materialize-css'

const Movietiles = ({ ite }) => {
    const { favs } = useContext(FavmoviesContext)
    const { likes } = useContext(FavmoviesContext)
    // const [like,setlike] = likes
    const [like, setlike] = useState(false)
    const [fav, setfav] = favs

    const [watchlater, setwatchlater] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

    const handleLike = async (movie) => {
        console.log('movie is',movie)
        if (fav && fav.find((items) => items.id === movie.id)) {
            M.toast({html: 'Item already found'})
        } else {
            setfav([...fav, movie])
            setlike(!like)
        }
    }
    const handledelete = (id) => {
        const deleted = fav && fav.filter((items) => items.id !== id)
        setfav(deleted)

        setlike(!like)
    }
    return (

        <>


            <div className='card'>

                <div className="container">
                    <div className="content">
                        <h1>{ite.name || ite.title}</h1>
                        <h1>{ite.media_type}</h1>
                        <img src={`https://image.tmdb.org/t/p/w400/${ite.poster_path}`} height="250px" alt="image" />
                    </div>
                    <div className="bottom">
                        <button onClick={() => { !like ? handleLike(ite) : handledelete(ite.id) }}>{!like ? <FiThumbsUp /> : <FiThumbsDown />}</button>
                        <button onClick={() => setwatchlater(!watchlater)}>{watchlater ? <FiXCircle /> : <FiWatch />}</button>

                        {/* <Link to={{ pathname: "https://www.google.com" }} target="_blank" > six </Link> */}
                    </div>
                    <div className="rating">
                        <h3 style={{ color: ite.vote_average > 7.5 ? 'green' : 'white' }}  >{ite.vote_average}</h3>
                    </div>
                    <div className="modal">
                        <h6>{ite.overview.substr(0, 90)}...</h6>
                        <button onClick={() => setModalOpen(!modalOpen)}>Description</button>
                        {/* {modalOpen ? <Desc ite={ite} /> : ""} */}

                    </div>



                </div>


            </div>
            {modalOpen ? <Desc /> : ''}

        </>
    )
}

export default Movietiles
