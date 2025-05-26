import './Card.css';
import BACK from '../assets/card-back1.png'



export const Card = ({img, isFlipped, onClick}) => {
    const classList = ['card-container']

    if (isFlipped) {
        classList.push('flipped')
    }

    return <div className={classList.join(" ")} onClick={onClick}>
        <img  className="front" src={img}/>
        <img className="back" src={BACK}/>
    </div>
}