import React from 'react';

const Item = (props) => {
    console.log("TCL: ListItem -> item", props);
    return <h1>Hello</h1>
    /* return <div className="list-item">
        <img
            width={128}
            height={128}
            src={item.item.url}
            alt={item.item.description}
        />
        <h5>{item.item.title}</h5>
        <p>{item.item.description}</p>
    </div> */
}
export default Item;