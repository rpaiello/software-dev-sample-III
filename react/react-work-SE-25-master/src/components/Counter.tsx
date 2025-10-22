
import React, { useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return(
        <>
            <div>
                <p>Current Count: {count}</p>
                <button onClick={increment} className='btn btn-success'>Add one</button>
            </div>
        </>
    )
    
}

export default Counter;
