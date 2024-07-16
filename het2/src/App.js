import './App.css';

import {Card} from "./components/Card";
import {useEffect, useState} from "react";
import {createShuffledDeck, update, getFlipped} from "./utils/deck";


function App() {
    const [deck, setDeck] = useState(createShuffledDeck);
    const gameOver = !Boolean(deck.find(item => !item.isFound));

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDeck(prev => {
                return prev.map(item => item.isFound ? item : {
                    ...item,
                    isFlipped: false,
                })
            });
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [deck]);

    const handleClick = (id) => {
        setDeck(prev => {
            const target = prev.find(item => item.id === id);
            const flipped = getFlipped(prev);

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

            const newFlipped = getFlipped(newDeck)

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
        setDeck(createShuffledDeck());
    }


    return (
        <div className="game-container">
            {gameOver && (
                <div>
                    <button onClick={reset}>Play Again</button>
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
