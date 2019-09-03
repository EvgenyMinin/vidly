import React from 'react';
import './ListGroup.scss';

const ListGroup = ({items, valueProperty, textProperty, selectedGenre, onGenreSelect}) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    key={item[valueProperty]}
                    className={item === selectedGenre ? "list-group-item active" : "list-group-item" }
                    onClick={() => onGenreSelect(item)}
                >
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