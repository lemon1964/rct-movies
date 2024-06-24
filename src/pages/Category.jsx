import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMoviesByCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MovieList } from '../components/MovieList';

function Category() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const { goBack } = useHistory();


    useEffect(() => {
        getMoviesByCategory(id)
            .then((data) => {
                console.log('Fetched movies by category data:', data);
                setMovies(data.movies);
                setCategory(data.name);
            })
            .catch((error) => {
                setError('Failed to fetch movies');
                console.error('Error fetching movies:', error);
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <button className='btn' onClick={goBack}>Go Back</button>
            <p className='category-title'>{category}</p>
            {!movies.length ? (
                <Preloader />
            ) : (
                <MovieList movies={movies} />
            )}
            <button className='btn' onClick={goBack}>Go Back</button>

        </>
    );
}

export { Category };
