

import CLUB from "../assets/card-clubs-1.png";
import DIAMOND from '../assets/card-diamonds-1.png';
import HEARTS from '../assets/card-hearts-1.png';
import SPADES from '../assets/card-spades-1.png';


const cards = [CLUB, DIAMOND, HEARTS, SPADES].map((item, index) => ({
    type: index,
    img: item,
}))

const initialDeck = [...cards, ...cards].map((item, index) => ({
    id: index,
    img: item.img,
    type: item.type,
    isFlipped: false,
    isFound: false,
}))

const shuffle = deck => deck.sort(() => Math.random() - 0.5);

export const createShuffleDeck = () => shuffle([...initialDeck])

export const getFlipped = deck => deck.filter(item => item.isFlipped && !item.isFound)


export const update = (prevDeck, id, newValues) => {
    return prevDeck.map(item => {
        if (item.id === id) {
            return  {
                ...item,
                ...newValues,
            }
        }

        return item;
    })
}