
import React,{createContext,useReducer,useState} from 'react'

export const FavmoviesContext =createContext()

export const Moviecontext = ({children}) => {
    const [favmovie, setfavmovies] = useState([])
    const [like, setlike] = useState(false)
    const initialState= []
    // const [state, dispatch] = useReducer(reducer, initialState)

    const reducer =(state,action)=>{
        switch (action) {
            case 'ADD_TO_CART':
                
                break;
        
            default:
                break;
        }
    }
    return (
        <div>
            <FavmoviesContext.Provider value= {{favs: [favmovie,setfavmovies], likes:[like,setlike]}}>
                {children}
            </FavmoviesContext.Provider>
        </div>
    )
}


