import React, { useEffect, useState } from 'react'
import { CustomCard } from './CustomCard'

export const Display = ({movieList, deleteMovie}) => {

    const [selectedCat, setSelectedCat] = useState('all');
    const [filteredMovies, setFilteredMovies] = useState(movieList);
    
    const filterMovies = (categ) => {
        if(categ === 'all') {
            setSelectedCat('all');
            setFilteredMovies(movieList);
        }else{
            setSelectedCat(categ);
            const filtered = movieList.filter((item) => item.mode === categ)
            setFilteredMovies(filtered);
        }
        
    };

    useEffect (() => {
        if(selectedCat === 'all') {
            setFilteredMovies(movieList);
        }else{
            const filtered = movieList.filter((item) => item.mode === selectedCat);
            setFilteredMovies(filtered)
        }
    }, [movieList, selectedCat])

    const func = (mode) => {
        if (mode !== "delete") {
            movieList({ ...movieList, mode });
        }
    }
   
    return (
        <div className="bg-black p-5 rounded shadow-lg mt-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={() => filterMovies('all')}>All</button>
                        <button type="button" className="btn btn-warning" onClick={() =>filterMovies('happy')}>Happy</button>
                        <button type="button" className="btn btn-info" onClick={() =>filterMovies('action')}>Action</button>
                    </div>
                    <div className="mt-3">
                        {filteredMovies.length} Movies Found
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-between gap-4">
                    {filteredMovies.map((item, i)=> (<CustomCard key={i} movie={item} deleteMovie={deleteMovie} func={func}/>))}
                </div>
            </div>
        </div>
    )
}