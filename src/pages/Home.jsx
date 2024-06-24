import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (str) => {
        const filteredCategories = catalog.filter((category) =>
            category.name.toLowerCase().includes(str.toLowerCase())
        );

        const filteredMovies = catalog.flatMap((category) =>
            category.movies.filter((movie) =>
                movie.title.toLowerCase().includes(str.toLowerCase())
            )
        );

        setFilteredCatalog(filteredCategories);
        setFilteredMovies(filteredMovies);

        push({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories()
            .then((data) => {
                console.log('Fetched categories:', data);
                setCatalog(data);
                const searchQuery = search ? search.split('=')[1].toLowerCase() : '';
                if (searchQuery) {
                    handleSearch(searchQuery);
                } else {
                    setFilteredCatalog(data);
                }
            })
            .catch((error) => {
                setError('Failed to fetch categories');
                console.error('Error fetching categories:', error);
            });
            // eslint-disable-next-line
    }, [search]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} movies={filteredMovies} />
            )}
        </>
    );
}

export { Home };
