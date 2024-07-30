import React, {createContext, useContext, useMemo} from "react";
import {createUUID} from "../utils/id";


const DogContext = createContext(null);

const createDog = (name, url) => ({name, url, id: createUUID()});

const initialState = [
    createDog("Buksi", "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_10930.jpg"),
    createDog("Buksi2", "https://images.dog.ceo/breeds/mountain-bernese/n02107683_3379.jpg")
]

export const DogProvider = ({ children }) => {
    const [dogList, setDogList] = React.useState(initialState);

    const value = useMemo(() => ({
        list: dogList,
        delete: (id) => setDogList(prev => prev.filter(item => item.id !== id)),
        create: (name, url) => setDogList(prev => [...prev, createDog(name, url)]),
        update: (id, values) => setDogList(prev => prev.map(item => {
            if (item.id === id) {
                return {...values, id}
            }

            return item;
        }))
    }), [dogList, setDogList]);

    return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
};

export const useDogs = () => {
    const context = useContext(DogContext);

    if (context === null) {
        throw new Error("Need to be inside DogProvider");
    }

    return context;
}

