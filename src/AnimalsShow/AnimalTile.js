import { useState } from 'react';
import './AnimalTile.css';
import Bird from '../svg/bird.svg';
import Cat from '../svg/cat.svg';
import Cow from '../svg/cow.svg';
import Dog from '../svg/dog.svg';
import Duck from '../svg/duck.svg';
import Fish from '../svg/fish.svg';
import Gator from '../svg/gator.svg';
import Heart from '../svg/heart.svg';
import Hen from '../svg/hen.svg';
import Horse from '../svg/horse.svg';
import Mouse from '../svg/mouse.svg';
import Rabbit from '../svg/rabbit.svg';
import Sheep from '../svg/sheep.svg';
import Wolf from '../svg/wolf.svg';

function AnimalTile(props) {
    window.scrollTo(0, document.body.scrollHeight);
    const [ clicks, setClicks ] = useState(0);

    const handleAnimalClick = () => {
        setClicks(clicks + 1);
    };

    const svgMap = {
        bird: Bird,
        cat: Cat,
        cow: Cow,
        dog: Dog,
        duck: Duck,
        fish: Fish,
        gator: Gator,
        hen: Hen,
        horse: Horse,
        mouse: Mouse,
        rabbit: Rabbit,
        sheep: Sheep,
        wolf: Wolf
    };
    
    return (
        <div className="animal-tile" onClick={handleAnimalClick}>
            <div className="animal" >
                <img src={svgMap[props.type]} alt="animal" width="155px" height="155px" style={{ maxHeight: '155px' }}></img>
                <img className="heart" src={Heart} alt="heart" style={{ width: 20 + 5 * clicks }}></img>
            </div>
        </div>
    );
}

export default AnimalTile;