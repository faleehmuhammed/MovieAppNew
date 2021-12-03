import React from 'react'
import './Topnav.css'

const Topnav = () => {

    const handleSubmit =()=>{
        alert("Clicked")
        console.log("functions");
    }
    const handleChange =()=>{
        alert("Change triggered")
    }
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className='header'>

            <div style={{flex:'85'}} className="title">
                MovieApp
            </div>
            <div style={{justifyContent:'flex-end'}} className="avtar">
                <img width='30px' height='50px' style={{borderRadius:'50%',cursor:'pointer'}} src="https://is3-ssl.mzstatic.com/image/thumb/Purple49/v4/c6/33/dd/c633dd45-95be-f814-bec6-9e84ee35d482/source/512x512bb.jpg" alt=""  />
            </div>
           
        </div>
    )
}

export default Topnav
