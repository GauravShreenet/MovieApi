import React, { useEffect, useRef, useState } from 'react'
import { CustomCard } from './CustomCard'
import { fetechMovie } from '../Utils/axiosHelp'
import { randomCharGenerator } from '../Utils/randomStr'

export const Search = ({ addToMovieList, deleteMovie }) => {
    const [movie, setMovie] = useState({})
    const strRef = useRef("");
    const [error, setError] = useState("")

    useEffect(() => {
        const randChar = randomCharGenerator();
        
        (async () => {
            const randMovie = await fetechMovie(randChar);
            setMovie(randMovie);
        })();
      
    }, [])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setMovie({});
        setError("");
        const str = strRef.current.value;

        const data = await fetechMovie(str);

        if (data.Response === "True") {
            setMovie(data);
        } else {
            setError(data.Error)
        }

    }


    const func = (mode) => {
        if (mode !== "delete") {
            addToMovieList({ ...movie, mode });
            setMovie({});
        strRef.current.value = "";
        }else{
            setMovie({});
            strRef.current.value = "";
        }
        
    }

   

    return (
        <div className="bg-black p-5 mt-5 rounded shadow-lg">
            <div className="row">
                <div className="col">
                    <h3>Search Your Movie</h3>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="row g-4">
                        <div className="col-md-9">
                            <input ref={strRef} type="text" id="search" className="form-control" placeholder="search by name ..." />
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="d-grid">
                                <button type="submit" className="btn btn-warning">Search Movie</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="col-m mt-4 d-flex justify-content-center">
                    {error && <div className="alert alert-danger">
                        {error}
                    </div>}
                    {movie?.imdbID && <CustomCard movie={movie} func={func} deleteMovie={deleteMovie}/>}

                </div>
            </div>

        </div>

    )
}