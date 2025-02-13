import React from 'react';
import { useDispatch, useSelector} from "react-redux";
function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const increment = () => {
        dispatch({type : "INCREMENT", payload: 1});
    }

    const decrement = () => {
        dispatch({type : "DECREMENT", payload: 1});
    }

    const reset = () => {
        dispatch({type : "RESET"});
    }

    return (
        <div className="App">
            <h1>Redux Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default App;