import React from 'react';
import { Movie } from './Movie';


function MovieList({ movies }) {
    return (
        <div className="list">
            {movies.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export { MovieList };
