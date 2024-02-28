import AnimalTile from "./AnimalTile";
import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['cow', 'horse', 'bird', 'dog', 'gator', 'horse', 'fish', 'cat', 'mouse', 'hen', 'duck', 'rabbit', 'wolf'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function Animals() {
    const [ animals, setAnimals ] = useState([]);

    console.log('animals', animals);
    console.log('f', getRandomAnimal());

    const handleButtonClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
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

            <button onClick={handleButtonClick}>Add Animal</button>
            <p>Animals to show: {animals.length}</p>
            {renderedAnimals}
        </div>
    );
}

export default Animals;