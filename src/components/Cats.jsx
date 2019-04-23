import React from 'react'
import '../App.css';
import data from '../utils/dataStore';

const Cats = (props) => {
    console.log("TCL: Cats -> props", props);
    return <div className="App">
        <h1>Cat</h1>
    </div>
};

export default Cats;