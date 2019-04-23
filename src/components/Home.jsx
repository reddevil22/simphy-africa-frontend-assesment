import React from 'react';
import { inject, observer } from 'mobx-react';

import List from './List';

import '../App.css';

const Home = inject('store')(observer(({ store }) => {
    
    return (
        <div className="App">
            <div className="App-container">
                <div>
                    <h2>Cat List</h2>
                    <div className="App-list">
                        <List list={store.data} />
                    </div>
                </div>
            </div>
        </div>
    );
}));



export default Home;