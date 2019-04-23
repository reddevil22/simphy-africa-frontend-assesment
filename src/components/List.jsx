import React from 'react';
import ListItem from './ListItem';

const List = ({list}) => {
    const builtList = list.map((item, index) => {
        return <ListItem item={item} index={index} />
    });
    return builtList;
};

export default List;