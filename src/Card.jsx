import mypic from './assets/pic.png'
import Button from './Button';

function Card(props) {
    return(
        <div className="card">
            <img className='card-img'src={mypic} alt="a picture of me">
            </img>
            <h2 className='card-title'>Riley Ji</h2>
            <p className='card-text'>A researcher in Applied Mathematics</p>
            <Button></Button>
        </div>
    );
}

export default Card