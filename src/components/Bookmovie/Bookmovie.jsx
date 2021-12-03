import axios from 'axios'
import React, { useState } from 'react'


function Bookmovie() {
    const [data, setdata] = useState([])
    
    const fetchData =()=>{
        axios.get('http://192.168.29.42:9595/apiview').then((res)=>{
            console.log(res);
            setdata(res.data)
        })
    }
    return (
        <div>
            
            <h3 onClick={fetchData}>Book here</h3>
            {
                data.map((i)=>{
                    return(
                        <>
                        <h4>{i.fields.details}</h4>
                        <img src={`http://192.168.29.42:9595/media/products/unnamed.jpg`} alt=""  />
                        </>
                    )
                })
            }
            {/* {
                [...Array(100)].map((_,i)=>{
                    <button onClick={()=>alert(i)}>{i+1}</button>
                })
            } */}
        </div>
    )
}

export default Bookmovie
