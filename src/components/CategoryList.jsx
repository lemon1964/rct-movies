import { CategoryThing } from './CategoryThing';
import { Movie } from './Movie';

function CategoryList({ catalog = [], movies = [] }) {
    return (
        <div className='list'>
            {movies.length > 0 ? (
                movies.map((movie) => <Movie key={movie.id} {...movie} />)
            ) : (
                catalog.map((el) => <CategoryThing key={el.id} {...el} />)
            )}
        </div>
    );
}

export { CategoryList };
