
import { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Search } from './components/Search';

function App() {

  const [movieList, setMovieList] = useState([]);



  const addToMovieList = (movie) => {
    setMovieList ([
      ...movieList, movie
    ])
  }

  console.log(movieList)

  return (
    <div className="wrapper bg-dark min-vh-100 text-warning">
      <div className="container">
        {/* <!-- title --> */}
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5">
              My Movie Collection
            </h1>
          </div>
        </div>
        <hr />

        {/* <!-- search and filter --> */}
        <Search addToMovieList = {addToMovieList}/>

        {/* <!-- user cards --> */}
        <Display movieList={movieList}/>
        
      </div>


    </div>
  )
}  

export default App;
