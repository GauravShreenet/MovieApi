
import { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Search } from './components/Search';

function App() {

  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    const noRepeat = movieList.filter((item)=> item.imdbID !== movie.imdbID)
    setMovieList ([
      ...noRepeat, movie
    ])
  }

  const deleteMovie = (id) => {
    const updateMovie = movieList.filter((item)=> item.imdbID !== id)
    setMovieList(updateMovie)
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
        <Search addToMovieList = {addToMovieList} deleteMovie={deleteMovie}/>

        {/* <!-- user cards --> */}
        <Display movieList = {movieList} deleteMovie={deleteMovie}/>
        
      </div>


    </div>
  )
}  

export default App;