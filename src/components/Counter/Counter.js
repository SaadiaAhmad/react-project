import { useState } from "react";
import Button from "../MultiComponents/Button/Button";

function Counter() {
    const [count, setCount ] = useState(0);
    const [ valueToAdd, setValueToAdd ] = useState(0);

    const handleCountChange = (flag) => {
        flag ? setCount(count + 1) : setCount(count - 1);
    }

    const handleInputChange = (event) => {
        setValueToAdd(parseInt(event.target.value) || 0);
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <div className="p-5 border-2 border-solid flex flex-col">
            <h1 className="text-lg font-bold">Count is {count}</h1>
            <div className="flex flex-row">
                <Button onClick={() => handleCountChange(true)}>Increment</Button>
                <Button onClick={() => handleCountChange(false)}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmitClick}>
                <label>Add a lot!</label>
                <input 
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                    value={valueToAdd || ''}
                    onChange={handleInputChange}
                />
                <Button onClick={handleSubmitClick}>Add it!</Button>
            </form>

        </div>
    )
}

export default Counter;