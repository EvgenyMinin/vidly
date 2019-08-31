import React from 'react';
import './Like.scss';

const Like = ({ liked, onLikeToggle }) => {
    let classes = 'heart-icon fa fa-heart';
    if (!liked) {
        classes += '-o'
    }
    return (
        <i
            className={classes}
            aria-hidden='true'
            onClick={onLikeToggle}
        />
    );
}

export default Like;