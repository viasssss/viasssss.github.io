import { FC } from 'react';
import { Container } from 'react-bootstrap';

const Footer: FC = () => {
    return(
        <footer className="bg-dark text-light py-4 mt-auto">
            <Container className="text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} Riley's season</p>
            </Container>
        </footer>    
        );
}

export default Footer