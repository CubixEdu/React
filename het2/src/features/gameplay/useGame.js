import {useEffect, useState} from "react";
import {createShuffleDeck, getFlipped, update} from "../../utils/deck";

export const useGame = () => {
    const [deck, setDeck] = useState(createShuffleDeck);

    const handleClick = (id) => {
        setDeck(prev => {
            const target = prev.find(item => item.id === id);
            // const flipped = getFlipped(prev);

            if (target.isFound) {
                return prev;
            }

            let newDeck = prev.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isFlipped: !item.isFlipped
                    }
                }


                return item;
            })

            const newFlipped = getFlipped(newDeck);

            if (newFlipped.length === 2) {
                const cardOne = newFlipped[0]
                const cardTwo = newFlipped[1]

                if (cardOne.type === cardTwo.type) {
                    newDeck = update(newDeck, cardOne.id, {isFound: true});
                    newDeck = update(newDeck, cardTwo.id, {isFound: true});
                }
            }

            return newDeck
        })
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDeck(prev => {
                return prev.map(item => item.isFound ? item : {
                    ...item,
                    isFlipped: false,
                })
            })
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [deck]);

    useEffect(() => {
        console.log('deck changed \n', deck)
    }, [deck]);


    return {
        deck, handleClick
    }
}
