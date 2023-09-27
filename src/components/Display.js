import React, { useState } from 'react'
import { CustomCard } from './CustomCard'

export const Display = ({movieList, deleteMovie}) => {

    const [selectedCat, setSelectedCat] = useState('All');
    const [filteredMovies, setFilteredMovies] = useState(movieList);
    
    const filterMovies = (categ) => {
        if (categ === 'All') {
            setFilteredMovies(movieList);
        }else {
            const filtered = movieList.filter((item) => item.mode === categ);
            setFilteredMovies(filtered);
        }
        setSelectedCat(categ);
        
    };
   

    return (
        <div className="bg-black p-5 rounded shadow-lg mt-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={() => filterMovies('All')}>All</button>
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
                    {filteredMovies.map((item, i)=> (<CustomCard key={i} movie={item} deleteMovie={deleteMovie}/>))}

                    
                    
                </div>
            </div>
        </div>
    )
}