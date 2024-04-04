import { useReducer } from "react";
import Button from "../MultiComponents/Button/Button";

const INCREMENT_DECREMENT = 'increment-decrement';
const SET_VALUE_TO_ADD = 'update-input-value';
const ADD_VALUE = 'add-value';

const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT_DECREMENT:
            return {
                ...state,
                count: action.payload ? state.count + 1 : state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE: 
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default: 
            return state;
    }
}

function Counter() {
    const [ state, dispatch ] = useReducer(reducer, {
        count: 0,
        valueToAdd: 0
    })

    const handleCountChange = (flag) => {
        dispatch({
            type: INCREMENT_DECREMENT,
            payload: flag
        });
    }

    const handleInputChange = (event) => {
        const value = (parseInt(event.target.value) || 0);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add-value',
            payload: state.valueToAdd
        });
    }

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Counter</p>
                </div>
            </section>

            <div className="p-5 border-2 border-solid flex flex-col">

                <h1 className="text-lg font-bold">Count is {state.count}</h1>
                <div className="flex flex-row">
                    <Button onClick={() => handleCountChange(true)}>Increment</Button>
                    <Button onClick={() => handleCountChange(false)}>Decrement</Button>
                </div>

                <form onSubmit={handleSubmitClick}>
                    <label>Add a lot!</label>
                    <input 
                        type="number" 
                        className="p-1 m-3 bg-gray-50 border border-gray-300" 
                        value={state.valueToAdd || ''}
                        onChange={handleInputChange}
                    />
                    <Button onClick={handleSubmitClick}>Add it!</Button>
                </form>
            </div>
    </div>

    )
}

export default Counter;