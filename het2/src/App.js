import './App.css';

import CLUB from './assets/card-clubs-1.png';
import DIAMOND from './assets/card-diamonds-1.png';
import HEARTS from './assets/card-hearts-1.png';
import SPADES from './assets/card-spades-1.png';
import {Card} from "./components/Card";
import {useState} from "react";

const cards = [CLUB, DIAMOND, HEARTS, SPADES].map((item, index) => ({
    type: index,
    img: item,
}));
const initialDeck = [...cards, ...cards].map((item, index) => ({
    id: index,
    img: item.img,
    type: item.type,
    isFlipped: false,
    isFound: false,
}));


const update = (prevDeck, id, newValues) => {
    return prevDeck.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                ...newValues,
            }
        }

        return item
    })
}

function App() {
    const [deck, setDeck] = useState(initialDeck);
    const gameOver = !Boolean(deck.find(item => !item.isFound));

    const handleClick = (id) => {
        setDeck(prev => {
            const target = prev.find(item => item.id === id);
            const flipped = prev.filter(item => item.isFlipped && !item.isFound);

            if (target.isFound || (flipped.length > 1 && !target.isFlipped)) {
                return prev;
            }


            let newDeck = prev.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isFlipped: !item.isFlipped,
                    }
                }

                return item;
            })

            const newFlipped = newDeck.filter(item => item.isFlipped && !item.isFound)

            if (newFlipped.length === 2) {
                const cardOne = newFlipped[0];
                const cardTwo = newFlipped[1];

                if (cardOne.type === cardTwo.type) {
                    newDeck = update(newDeck, cardOne.id, {isFound: true})
                    newDeck = update(newDeck, cardTwo.id, {isFound: true})
                }
            }

            return newDeck;
        });
    }

    const reset = () => {
        setDeck(initialDeck);
    }


    return (
        <div className="game-container">
            {gameOver && (
                <div>
                    GAME OVER
                    <button onClick={reset}>reset</button>
                </div>
            )}
            <div className="game">
                {deck.map(card => (
                    <Card
                        key={card.id}
                        img={card.img}
                        onClick={() => handleClick(card.id)}
                        isFlipped={card.isFlipped}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
