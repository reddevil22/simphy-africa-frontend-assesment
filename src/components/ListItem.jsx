import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ item, index }) => {
    return <Link to={`cats/${index + 1}`}>
        <img
            width={128}
            height={128}
            src={item.url}
            alt={item.description}
        />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
    </Link>
}
export default ListItem;