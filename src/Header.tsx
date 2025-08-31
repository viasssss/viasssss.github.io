
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return(
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/students">Students</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header