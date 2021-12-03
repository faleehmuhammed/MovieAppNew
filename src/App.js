
import './App.css';
import Topnav from './components/Topnav/Topnav';
import SimpleCard from './components/Bottomnav/Bottomnav';
import Movie from './components/Movie/Movie';
import CompMovie from './components/Trending/CompMovie';
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom';
import Favourite from './components/Favourite/Favourite';
import Bottomnav from './components/Bottomnav/Bottomnav';
import Search from './components/Search/Search';
import Desc from './components/Desc/Desc';
import Bookmovie from './components/Bookmovie/Bookmovie'


function App() {

  return (
    
        
      <div className="App">
       
        <Topnav />
       
      

        <Bookmovie/>
      {/* <BrowserRouter>
        <Route  path='/' component={Movie} exact />

        <Route path='/trending' component={CompMovie} />
        <Route path='/search' component={Search}/>
        <Route path='/favmovies' component={Favourite}/>
        
        <Bottomnav />
      </BrowserRouter> */}
      
      </div>
    
  );
}

export default App;
