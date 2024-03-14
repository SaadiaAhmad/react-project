import AnimalTile from "./AnimalTile/AnimalTile";
import { useState } from 'react';
import './AnimalsShow.css';

function getRandomAnimal() {
    const animals = ['cow', 'horse', 'bird', 'dog', 'gator', 'sheep', 'fish', 'cat', 'mouse', 'hen', 'duck', 'rabbit', 'wolf'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function AnimalsShow() {
    const [ animals, setAnimals ] = useState([]);

    const handleButtonClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const clearAnimals = () => {
        setAnimals([]);
    }

    //Is there no for loop in React?
    const renderedAnimals = animals.map((animal, index) => <AnimalTile type={animal} key={index}></AnimalTile>)

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>The Animals Show</p>
                </div>
            </section>

            <div className="animals-container">
                <button onClick={handleButtonClick}>Add Animal</button>
                <p>Animals to show: {animals.length}</p>
                <a onClick={clearAnimals} href="javascript.void(0);">Clear</a>
                <div className="animal-list">{renderedAnimals}</div>
            </div>
        </div>
    );
}

export default AnimalsShow;