// import { Link } from 'react-router-dom';

// function Header() {
//     return (
//         <nav className='green darken-1'>
//             <div className='nav-wrapper'>
//                 <Link to='/' className='brand-logo'>
//                     Movies
//                 </Link>
//                 <ul id='nav-mobile' className='right hide-on-med-and-down'>
//                     <li>
//                         <Link to={`/about`}>About</Link>
//                     </li>
//                     <li>
//                         <Link to={`/contacts`}>Contacts</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export { Header };

import { Link, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    const handleHomeClick = () => {
        history.push('/');
        window.location.reload(); // Перезагрузка страницы для сброса состояния
    };

    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <span onClick={handleHomeClick} className='brand-logo' style={{cursor: 'pointer'}}>
                    Movies
                </span>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/contacts`}>Contacts</Link>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-4 right"
                            href="https://github.com/lemon1964/django-react-movies"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Repo
                        </a>
                    </li>                 
                </ul>
            </div>
        </nav>
    );
}

export { Header };
