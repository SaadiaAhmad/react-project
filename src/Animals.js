import AnimalTile from "./AnimalTile";

function Animals() {
    const handleClick = () => {
        setSatate(count, count++);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <p>Animals to show: </p>
            <AnimalTile></AnimalTile>
        </div>
    );
}

export default Animals;