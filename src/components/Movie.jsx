import React from 'react';

function Movie({ id, title, type, year, poster, imdb_id }) {
    return (
            <div className="card">
                <div className="card-image">
                    <img src={poster} alt={title} />
                </div>
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{year}</p>
                </div>
                <div  className='card-action'>
                        <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer">
                        Watch movie
                        </a>
                </div>
            </div>
    );
}

export { Movie };

