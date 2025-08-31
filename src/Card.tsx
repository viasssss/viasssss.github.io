import mypic from './assets/pic.png';
import { FC } from 'react';

const Card: FC = () => {
    return(
        <div className="card">
            <img className='card-img'src={mypic} alt="a picture of me">
            </img>
            <h2 className='card-title'>Riley Ji</h2>
            <p className='card-text'>A researcher in Applied Mathematics</p>
        </div>
        
    );
}

export default Card