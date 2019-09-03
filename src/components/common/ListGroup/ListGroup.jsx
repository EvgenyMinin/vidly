import React from 'react';
import './ListGroup.scss';

const ListGroup = ({items, valueProperty, textProperty}) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item[valueProperty]} className="list-group-item">
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name'
};
 
export default ListGroup;