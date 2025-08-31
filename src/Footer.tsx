import { FC } from 'react';

const Footer: FC = () => {
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Riley's season</p>
        </footer>    
        );
}

export default Footer