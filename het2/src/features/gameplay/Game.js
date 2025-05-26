import {Card} from "../../components/Card";
import {useGame} from "./useGame";

export const Game = () => {
    const {deck, handleClick} = useGame()

    return (
        <div className="game-container">
            <div className="game">
                {deck.map(card => (
                    <Card key={card.id} img={card.img} isFlipped={card.isFlipped} onClick={() => handleClick(card.id)}/>
                ))}
            </div>
        </div>
    );
}