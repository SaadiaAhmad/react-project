import './AnimalTile.css';
import { useState } from 'react';

import Bird from '../../../svg/animals-show/bird.svg';
import Cat from '../../../svg/animals-show/cat.svg';
import Cow from '../../../svg/animals-show/cow.svg';
import Dog from '../../../svg/animals-show/dog.svg';
import Duck from '../../../svg/animals-show/duck.svg';
import Fish from '../../../svg/animals-show/fish.svg';
import Gator from '../../../svg/animals-show/gator.svg';
import Heart from '../../../svg/animals-show/heart.svg';
import Hen from '../../../svg/animals-show/hen.svg';
import Horse from '../../../svg/animals-show/horse.svg';
import Mouse from '../../../svg/animals-show/mouse.svg';
import Rabbit from '../../../svg/animals-show/rabbit.svg';
import Sheep from '../../../svg/animals-show/sheep.svg';
import Wolf from '../../../svg/animals-show/wolf.svg';

function AnimalTile(props) {
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