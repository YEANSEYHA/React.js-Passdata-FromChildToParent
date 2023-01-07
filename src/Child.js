import React, { useState } from 'react';


const Child = (props) => {
    const [name, setName] = useState("2");
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Point to function on ge
        props.onGetdata(name);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Child;