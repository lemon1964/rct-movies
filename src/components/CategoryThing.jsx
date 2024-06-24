import { Link } from 'react-router-dom';

function CategoryThing(props) {
    const {
        id,
        name,
        image,
        description,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description.slice(0, 160)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${id}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryThing };
