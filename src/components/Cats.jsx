import React from 'react'
import { inject, observer } from 'mobx-react';

import '../App.css';

const Cats = inject('store')(observer(({ store }) => {
    console.log("TCL: Cats -> store", store)
    /* const index = parseInt(location.pathname.match(/\d+/g)[0]);
    console.log("TCL: Cats -> index", index) */
    return <div className="App">
        <h1>Cat</h1>
    </div>
}));

export default Cats;