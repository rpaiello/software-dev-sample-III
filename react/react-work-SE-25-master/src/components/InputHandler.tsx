import React , {useState} from 'react';

const InputHandler = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }


    return(
        <>
        <div className='form-group'>
            <input 
                type="text"
                placeholder='Enter anything...'
                value={inputValue}
                onChange={handleChange} />

                <hr />
                {/* <button onClick={addItems}>Add Item</button> */}

                <p className='lead'>Hello, {inputValue}</p>
        </div>
        </>
    )
}

export default InputHandler;