import mypic from './assets/pic.png';
import { FC } from 'react';
import { Card as BootstrapCard, Container } from 'react-bootstrap';

const Card: FC = () => {
    return(
        <Container className="d-flex justify-content-center">
            <BootstrapCard style={{ width: '18rem' }} className="text-center shadow-sm">
                <BootstrapCard.Img variant="top" src={mypic} alt="a picture of me" />
                <BootstrapCard.Body>
                    <BootstrapCard.Title>Riley Ji</BootstrapCard.Title>
                    <BootstrapCard.Text>
                        A researcher in Applied Mathematics
                    </BootstrapCard.Text>
                </BootstrapCard.Body>
            </BootstrapCard>
        </Container>
    );
}

export default Card