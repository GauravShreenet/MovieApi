import React from 'react'
import { CustomCard } from './CustomCard'

export const Display = ({movieList, deleteMovie}) => {

   

    return (
        <div className="bg-black p-5 rounded shadow-lg mt-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger">All</button>
                        <button type="button" className="btn btn-warning">Happy</button>
                        <button type="button" className="btn btn-info">Action</button>
                    </div>
                    <div className="mt-3">
                        {movieList.length} Movies Found
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-between gap-4">
                    {movieList.map((item, i )=> (<CustomCard key={i} movie={item} deleteMovie={deleteMovie}/>))}

                    
                    
                </div>
            </div>
        </div>
    )
}